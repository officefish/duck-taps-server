import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@server/modules/prisma/prisma.service'
import { subDays } from 'date-fns';
import { ConfigService } from '@nestjs/config'
  
import { 
    GetReferralsQueryDto,
} from './dto'
import { Player } from '@prisma/client'

@Injectable()
export class ReferralsService {
  private logger = new Logger(ReferralsService.name);

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async trackReferral(referrerId: string, referredId: string) {
    const referral = await this.prisma.referral.create({
      data: {
        referrerId,
        referredId,
      },
    });

    // Получаем текущую дату в Московском времени
    const nowMoscowTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
    const currentDay = new Date(nowMoscowTime);
    currentDay.setHours(0, 0, 0, 0);  // Обнуляем часы, чтобы получить только дату

    // 3. Проверяем, есть ли уже запись на этот день
    let referralDay = await this.prisma.referralDay.findFirst({
      where: {
          referralId: referral.id,
          day: currentDay,
      },
    });

    if (referralDay) {
      // Если запись есть, увеличиваем количество регистраций
      await this.prisma.referralDay.update({
          where: { id: referralDay.id },
          data: {
              registrations: referralDay.registrations + 1,
          },
      });
    } else {
      // Если записи нет, создаем новую запись за текущий день
      await this.prisma.referralDay.create({
          data: {
              referralId: referral.id,
              day: currentDay,
              registrations: 1,
          },
      });
    }
  }

  async fgetRegistrationsForLastWeek(numDays: number) {
    // 1. Определяем дату семь дней назад с учётом московского времени
    const nowMoscowTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
    const currentDay = new Date(nowMoscowTime);
    const lastWeek = subDays(currentDay, numDays); // Получаем дату неделю назад

    // 2. Запрос в базу для получения регистраций за последние 7 дней
    const registrations = await this.prisma.referralDay.groupBy({
        by: ['day'],
        where: {
            day: {
                gte: lastWeek, // Фильтруем по дням больше или равно последней неделе
            },
        },
        _sum: {
            registrations: true, // Суммируем количество регистраций за каждый день
        },
        orderBy: {
            day: 'asc', // Упорядочиваем по дате (от старой к новой)
        },
    });

    // 3. Приводим результат к нужному формату: массив объектов с датой и количеством регистраций
    const result = registrations.map(reg => ({
        date: reg.day,
        registrations: reg._sum.registrations || 0,
    }));

    return result;
  }

  async rewardReferrer(referrerId: string) {
    const referrer = await this.prisma.player.findUnique({ where: { id: referrerId } });

    this.logger.log(`Игрок ${referrer.username} получил награду за приглашение.`);
  }

  async findByReferralCode(referralCode) {
    return this.prisma.player.findFirst({ where: { referralCode } });
  }

  async getReferralsCount(player: Player) {
    return this.prisma.player.count({ where: { invitedById: player.id } });
  }

  async getReferrals(player: Player, query?: GetReferralsQueryDto) {
    const { take = 10, page = 1 } = query || {};
    // Получаем общее количество рефералов
    const totalCount = await this.prisma.player.count({
      where: { invitedById: player.id },
    });

    // Получаем срез рефералов
    const skip = (page - 1) * take
    const referrals = await this.prisma.player.findMany({
      where: { invitedById: player.id },
      skip,
      take,
    });

    this.logger.log(
      `Получены рефералы для пользователя с ID: ${player.id}`,
    )
    return { totalCount, referrals }
  }

  async getReferrerByTgId(tgId: string, query?: GetReferralsQueryDto) {

    const { take = 10, page = 1 } = query || {};
    const skip = (page - 1) * take

    return this.prisma.player.findUnique({
      where: { tgId },
      include: {
        invitations: {
          skip,
          take,
          // where: {
          //   active: true, // Например, фильтрация по активным игрокам
          // },
        },
      },
    });
  }

}