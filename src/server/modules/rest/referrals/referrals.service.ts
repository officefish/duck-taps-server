import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@server/modules/prisma/prisma.service'
//import { PlayersTokenDto } from '@server/modules/token/dto'

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
    return this.prisma.referral.create({
      data: {
        referrerId,
        referredId,
      },
    });
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