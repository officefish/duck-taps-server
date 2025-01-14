import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from "@server/modules/prisma/prisma.service"; // Подключаем сервис Prisma
import { TaskType, TaskStatus, Player, TaskOnPlayer, Task } from '@prisma/client';
import { QuestService } from '../quest/quest.service';
import { TelegramService } from '@server/modules/telegram/telegram.service';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  
  constructor(
    private readonly prisma: PrismaService, // Ensure proper readonly
    private readonly quest: QuestService,
    private readonly telegram: TelegramService
  ) {}

  async brootforceCreateTasks() {
    // Проверяем, существуют ли категории
    const existingTasks = await this.prisma.task.findMany();
    if (existingTasks.length > 0) {
      console.log('Tasks already exists');
      return;
    }

    // Если не ежедневное, установите срок истечения через 3 месяца
    const expiresAt = new Date(new Date().setMonth(new Date().getMonth() + 3)); 

    /*
    Пригласи 5 друзей
    Пригласи 10 друзей
    Пригласи 50 друзей
    Пригласи 100 друзей
    Пригласи 1000 друзей
    Пригласи 5 премиум друзей
    Ежедневные приглашения 0/5
    Ежедневные приглашения 0/10
    Ежедневные приглашения 0/30
    Подпишись на телеграм канал
    Подпишись на телеграм чат
    Потапай по своему персонажу 0/1000
    Потапай по своему персонажу 0/10k
    Потапай по своему персонажу 0/100k
    */

     // Создание категорий и товаров
      const tasks = {
        daily: [
        //   { 
        //     type: TaskType.DAILY_BAUNTY,
        //     title: 'Ежидневная награда',
        //     baunty: 200,
        //     bonus: 50,
        //     navigate: '/daily-quest'
        //   },
        //   {
        //     type: TaskType.DAILY_MINIGAME,
        //     title: 'Мини игра',
        //     navigate: '/minigame',
        //     baunty: 300,
        //   }
        ],
        season: [
          /* Пригласи друзей */
          { 
            type: TaskType.INVITE_COUNT,
            title: 'Пригласи 5 друзей',
            target: 5,
            baunty: 5,
            expiresAt,
          },
          { 
            type: TaskType.INVITE_COUNT,
            title: 'Пригласи 10 друзей',
            target: 10,
            baunty: 5,
            expiresAt,
          },
          { 
            type: TaskType.INVITE_COUNT,
            title: 'Пригласи 50 друзей',
            target: 50,
            baunty: 5,
            expiresAt,
          },
          { 
            type: TaskType.INVITE_COUNT,
            title: 'Пригласи 100 друзей',
            target: 100,
            baunty: 5,
            expiresAt,
         },
         { 
          type: TaskType.INVITE_COUNT,
          title: 'Пригласи 1000 друзей',
          target: 1000,
          baunty: 5,
          expiresAt,
        },
       /* Пригласи друзей c premium */
       { 
        type: TaskType.INVITE_PREMIUM_COUNT,
        title: 'Пригласи 5 друзей с премиум аккаунтом',
        target: 5,
        baunty: 10,
        expiresAt,
      },
      /* Приглашай друзей каждый день */
      { 
        type: TaskType.INVITE_EVERY_DAY,
        title: 'Приглашай друзей 5 дней подряд',
        target: 5,
        baunty: 5,
        expiresAt,
      },
      { 
        type: TaskType.INVITE_EVERY_DAY,
        title: 'Приглашай друзей 10 дней подряд',
        target: 10,
        baunty: 10,
        expiresAt,
      },
      { 
        type: TaskType.INVITE_EVERY_DAY,
        title: 'Приглашай друзей 30 дней подряд',
        target: 30,
        baunty: 20,
        expiresAt,
      },
      /* Кликни по игрушке */
      { 
        type: TaskType.TAPS_COUNT,
        title: 'Потапай по своему персонажу 1000 раз',
        target: 1000,
        baunty: 5,
        expiresAt,
      },
      { 
        type: TaskType.TAPS_COUNT,
        title: 'Потапай по своему персонажу 10.000 раз',
        target: 10_000,
        baunty: 5,
        expiresAt,
      },
      { 
        type: TaskType.TAPS_COUNT,
        title: 'Потапай по своему персонажу 100.000 раз',
        target: 100_000,
        baunty: 10,
        expiresAt,
      },

      { 
        type: TaskType.SUBSCRIBE_CHANNEL,
        title: 'Подпишись на канал',
        baunty: 10,
        content: 'farmducks',
        navigate: 'https://t.me/farmducks',
        expiresAt,
      },
      { 
        type: TaskType.SUBSCRIBE_CHANNEL,
        title: 'Подпишись на чат',
        baunty: 10,
        content: '+mBPrR2hbVVYxZDcy',
        navigate: 'https://t.me/+mBPrR2hbVVYxZDcy',
        expiresAt,
      },
      // { 
      //   type: TaskType.TAPS_COUNT,
      //   title: 'Подпишись на чат',
      //   baunty: 5,
      //   expiresAt,
      // },
         
        ]
      };

      await this.createTaskTemplates(true, tasks.daily);
      await this.createTaskTemplates(false, tasks.season);
    
      this.logger.log('Task templates success added');
  }

  // Функция для создания товаров с зависимостями
  async createTaskTemplates(daily: boolean, tasks: any[]) {

      // Создаем товары для этой категории
  const taskPromises = [];
  for (const task of tasks) {

    const promise = this.prisma.task.create({
      data: {
        type: task.type,
        title: task.title,
        description: task.description,
        baunty: task.baunty,
        bonus: task.bonus,
        isDaily: daily,
        content: task.content,
        navigate: task.navigate,
        target: task.target,
        expiresAt: task.expiresAt, // Устанавливаем срок истечения, если задание не ежедневное
      },
    });
    taskPromises.push(promise);
  }

    await Promise.all(taskPromises);
  }

  async getTasksForPlayer(player: Player) {
    // Находим игрока по его Telegram ID
    
    const playerTasks = await this.prisma.taskOnPlayer.findMany({
      where: {
        playerId: player.id,
      },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
    })
    if (playerTasks.length > 0) {
      return playerTasks
    }

    const availableTasks = await this.prisma.task.findMany({})

    const taskPromises = availableTasks.map(task => this.prisma.taskOnPlayer.create({
      data: {
        templateTask: {
          connect: { id: task.id }, // связываем существующую задачу через connect
        },
        player: {
          connect: { id: player.id }, // связываем существующего игрока через connect
        },
        status: TaskStatus.PENDING
      },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
    }));

    await Promise.all(taskPromises);
    // // Возвращаем список всех задач игрока, включая уже существующие и новые
    const allPlayerTasks = await this.prisma.taskOnPlayer.findMany({
      where: { playerId: player.id },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
    });
    return allPlayerTasks;
  }

  async checkCurrentTaskStatus(player: Player) {
    const allPlayerTasks = await this.prisma.taskOnPlayer.findMany({
      where: { playerId: player.id },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
    });

     // Process tasks with async/await and map to return updated tasks
    await Promise.all(
      allPlayerTasks.map(async (task) => {
        switch (task.templateTask.type) {
          case TaskType.SUBSCRIBE_CHANNEL:
            return this.checkSubscription(player, task, task.templateTask);
          case TaskType.INVITE_COUNT:
            return this.checkInviteCount(player, task, task.templateTask);
          case TaskType.INVITE_PREMIUM_COUNT:
            return this.checkInvitePremiumCount(player, task, task.templateTask);
            case TaskType.TAPS_COUNT:
              return this.checkTapsCount(player, task, task.templateTask);
          case TaskType.DAILY_MINIGAME:
            return this.checkDailyMinigame(player, task);
          case TaskType.DAILY_BAUNTY:
            return this.checkDailyBaunty(player, task);
          default:
            return task; // Return the task unchanged if no specific logic is needed
        }
      })
    );

    const updatedTasks = await this.prisma.taskOnPlayer.findMany({
      where: { playerId: player.id },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
      orderBy: [
        {
          updatedAt: "desc", // or pass "asc" to order ascendingly
        },
      ],
    });
    return updatedTasks;

  }

  async checkSubscription(player: Player, taskOnPlayer: TaskOnPlayer, task: Task) {

    if (taskOnPlayer.status === TaskStatus.COMPLETED 
      || taskOnPlayer.status === TaskStatus.READY) {
      return 
    }

    const isSubscribed = await this.telegram.checkUserSubscription(task.content, player.tgId)
    if (!isSubscribed) {
      return 
    }

    await this.prisma.taskOnPlayer.update({
      where: { id: taskOnPlayer.id },
      data: { status: TaskStatus.READY },
    })

  }

  async checkTapsCount(player: Player, taskOnPlayer: TaskOnPlayer, task:Task) {
   
    if (taskOnPlayer.status === TaskStatus.COMPLETED 
      || taskOnPlayer.status === TaskStatus.READY) {
      return 
    }

    const taps = player.balance

    if (taps < task.target) {
       await this.prisma.taskOnPlayer.update({
        where: { id: taskOnPlayer.id },
        data: { status: TaskStatus.IN_PROGRESS,
          progress: taps,
          maxProgress: task.target,
          updatedAt: new Date(),
         },
      })
      return 
    }

    await this.prisma.taskOnPlayer.update({
      where: { id: taskOnPlayer.id },
      data: { 
        status: TaskStatus.READY,
        updatedAt: new Date(),
      },
    })
  }

  // Проверка количества приглашений
  async checkInviteCount(player: Player, taskOnPlayer: TaskOnPlayer, task:Task) {
   
    if (taskOnPlayer.status === TaskStatus.COMPLETED 
      || taskOnPlayer.status === TaskStatus.READY) {
      return 
    }

    const referrer = await this.prisma.player.findUnique({
      where: { tgId: player.tgId },
      include: { invitations: true },
    })

    if (!referrer) {
      return 
    }

    if (referrer.invitations.length < task.target) {
      await this.prisma.taskOnPlayer.update({
        where: { id: taskOnPlayer.id },
        data: { 
          status: TaskStatus.IN_PROGRESS,
          progress: referrer.invitations.length,
          maxProgress: task.target,
          updatedAt: new Date()
         },
      })
      return 
    }

    await this.prisma.taskOnPlayer.update({
      where: { id: taskOnPlayer.id },
      data: { 
        status: TaskStatus.READY,
        updatedAt: new Date()
      },
    })
  }

  async checkInvitePremiumCount(player: Player, taskOnPlayer: TaskOnPlayer, task:Task) {
   
    if (taskOnPlayer.status === TaskStatus.COMPLETED 
      || taskOnPlayer.status === TaskStatus.READY) {
      return 
    }

    const playerWithInvitations = await this.prisma.player.findUnique({
      where: { tgId: player.tgId },
      include: { invitations: true },
    })

    if (!playerWithInvitations || playerWithInvitations.invitations.length === 0) {
      return
    }

    const premiumInvitations = playerWithInvitations.invitations.filter(player => player.isPremium === true)

    if (!premiumInvitations || premiumInvitations.length === 0) {
      return 
    }

    if (premiumInvitations.length < task.target) {
      await this.prisma.taskOnPlayer.update({
        where: { id: taskOnPlayer.id },
        data: { status: TaskStatus.IN_PROGRESS,
          progress: premiumInvitations.length,
          maxProgress: task.target,
          updatedAt: new Date(),
         },
      })
      return 
    }

    await this.prisma.taskOnPlayer.update({
      where: { id: taskOnPlayer.id },
      data: { 
        status: TaskStatus.READY,
        updatedAt: new Date(),
       },
    })
  }

  async checkDailyMinigame(player: Player, task: TaskOnPlayer) {
    const status = await this.quest.isGameAvailable(player);
    if (status.isBlocked) {
      // we also can change task status to pending or completed depends on remaining time
      await this.prisma.taskOnPlayer.update({
        where: { id: task.id },
        data: { status: TaskStatus.COMPLETED },
      })
      return
    } 

    await this.prisma.taskOnPlayer.update({
      where: { id: task.id },
      data: { status: TaskStatus.PENDING },
    })
  }

  async checkDailyBaunty(player: Player, taskOnPlayer: TaskOnPlayer) {
    const { claimedToday } = await this.quest.getDailyRewardInfo(player);
    if (claimedToday) {
      await this.prisma.taskOnPlayer.update({
        where: { id: taskOnPlayer.id },
        data: { status: TaskStatus.COMPLETED },
      })
      return
    } 
    await this.prisma.taskOnPlayer.update({
      where: { id: taskOnPlayer.id },
      data: { status: TaskStatus.PENDING },
    })
  }

  async getTaskBaunty(player: Player, taskId: string) {
    const task = await this.prisma.taskOnPlayer.findUnique({
      where: { id: taskId },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
    })
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if(task.status === TaskStatus.COMPLETED) {
      throw new HttpException('Task already completed', HttpStatus.BAD_REQUEST);
    }

    if(task.status === TaskStatus.READY) {
      
      await this.prisma.taskOnPlayer.update({
        where: { id: task.id },
        data: { status: TaskStatus.COMPLETED },
      })

      await this.prisma.player.update({
        where: { id: player.id },
        data: { balance: { increment: task.templateTask.baunty } },
      })
    }
    
    const updatedTasks = await this.prisma.taskOnPlayer.findMany({
      where: { playerId: player.id },
      include: {
        templateTask: true, // Включаем информацию о шаблоне задания
      },
    });
    return updatedTasks;

  }
}

