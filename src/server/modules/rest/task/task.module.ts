import { Module } from '@nestjs/common'
import { PrismaModule } from '@server/modules/prisma/prisma.module'
import { PrismaService } from '@server/modules/prisma/prisma.service'
import { PlayerModule } from '../player/player.module'
import { TokenModule } from '@server/modules/token/token.module'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'
import { QuestModule } from '../quest/quest.module'
import { QuestService } from '../quest/quest.service'
import { TelegramModule } from '@server/modules/telegram/telegram.module'
import { TelegramService } from '@server/modules/telegram/telegram.service'
import { AppConfigModule } from '@server/modules/config/config.module'
import { AppConfigService } from '@server/modules/config/config.service'
import { HttpModule, HttpService } from '@nestjs/axios'

@Module({
  imports: [
   AppConfigModule, 
   PrismaModule,
   PlayerModule,
   TokenModule,
   QuestModule,
   TelegramModule,
   HttpModule,
  ],
  controllers : [TaskController],
  providers: [PrismaService, TaskService, QuestService, TelegramService, AppConfigService],
})
export class TaskModule {}