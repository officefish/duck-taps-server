import { Module } from '@nestjs/common'
import { PrismaModule } from '@server/modules/prisma/prisma.module'
import { PrismaService } from '@server/modules/prisma/prisma.service'
import { QuestController } from './quest.controller'
import { QuestService } from './quest.service'
import { PlayerModule } from '../player/player.module'
import { TokenModule } from '@server/modules/token/token.module'

@Module({
  imports: [
   PrismaModule,
   PlayerModule,
   TokenModule,
  ],
  controllers : [QuestController],
  providers: [PrismaService, QuestService],
})
export class QuestModule {}