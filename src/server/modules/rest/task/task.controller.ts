import { Controller, Get, Param, HttpException, HttpStatus, UseGuards, Post, Req, Logger, Body, NotFoundException, Res, BadRequestException } from '@nestjs/common';
import { PlayerGuard } from '../player/guards/player.guard';
import { Player } from '@server/common/decorators';
import { FastifyRequest, FastifyReply } from 'fastify'; // Импорт FastifyRequest
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { PrismaService } from '@server/modules/prisma/prisma.service';
import { TaskStatus } from '@prisma/client';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  
  constructor(
    private readonly service: TaskService,
    private readonly prisma: PrismaService
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Player items successfully responsed',
    //type: GetItemsForPlayerResponse,
  })

  @UseGuards(PlayerGuard)
  @Post()
  @Player()
  async getTasksForPlayer(
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    // Получаем игрока и его предметы
    const { tgId } = req.currentUser

    // Если шаблоны заданий еще не созданы, то создаем их
    await this.service.brootforceCreateTasks()

    const player = await this.prisma.player.findUnique({
      where: { tgId: tgId },
    });

    if (!player) {
      throw new Error(`Player with tgId ${tgId} not found`);
    }


    const playerTasks = await this.service.getTasksForPlayer(player)
    if (!playerTasks.length) {
      throw new BadRequestException('Player has no tasks');
    }

    const tasks = await this.service.checkCurrentTaskStatus(player)

    const completedTasks = tasks.filter(task => task.status === TaskStatus.COMPLETED || task.status === TaskStatus.READY)
    let totalProgress = 0
    for (const task of completedTasks) {
      totalProgress += task.templateTask.baunty
    }
    
    return reply.type('application/json').send({tasks, totalProgress});
    
    /* Calculate total progress */
   
  }

  @UseGuards(PlayerGuard)
  @Post('check')
  @Player()
  async checkTasksForPlayer(
    @Req() req: FastifyRequest,
  ) {
    // Получаем игрока и его предметы
    const { tgId } = req.currentUser

    /* Player */     
    const player = await this.prisma.player.findUnique({ where: { tgId }})
    if (!player) {
      throw new NotFoundException('User not found');
    }

    return await this.service.checkCurrentTaskStatus(player)
  }

  @UseGuards(PlayerGuard)
  @Post('baunty')
  @Player()
  async getTaskBaunty(
    @Body() body: {taskId?: string},
    @Req() req: FastifyRequest,
  ) {
    // Получаем игрока и его предметы
    const { tgId } = req.currentUser
    const { taskId } = body

    /* Player */     
    const player = await this.prisma.player.findUnique({ where: { tgId }})
    if (!player) {
      throw new NotFoundException('User not found');
    }

    return await this.service.getTaskBaunty(player, taskId)
   
  }

  @UseGuards(PlayerGuard)
  @Post('tick')
  @Player()
  async tickWithTasksValidation(
    @Req() req: FastifyRequest,
    @Body() body: {taps: number},
    @Res() reply: FastifyReply,
  ) {
    // Получаем игрока и его предметы
    const { tgId } = req.currentUser

    /* Player */     
    const player = await this.prisma.player.findUnique({ 
      where: { tgId },
    })

    await this.prisma.player.update({
      where: { tgId },
      data: { balance: player.balance + body.taps}
     })

    if (!player) {
      throw new NotFoundException('User not found');
    }

    const tasks = await this.service.checkCurrentTaskStatus(player)

    const completedTasks = tasks.filter(task => task.status === TaskStatus.COMPLETED || task.status === TaskStatus.READY)
    let totalProgress = 0
    for (const task of completedTasks) {
      totalProgress += task.templateTask.baunty
    }
    
    return reply.type('application/json').send({tasks, totalProgress});
  }

}