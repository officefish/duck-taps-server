import { Module } from '@nestjs/common'
import { PrismaModule } from '@server/modules/prisma//prisma.module'
import { AppConfigModule } from '@server/modules/config/config.module'
import { SentryModule } from '@sentry/nestjs/setup'
import { PingPongModule } from '@server/modules/rest/ping-pong/ping-pong.module'
import { AuthModule } from '@server/modules/rest/auth/auth.module'
import { TelegramModule } from '@server/modules/telegram/telegram.module'
import { GameplayModule } from '@server/modules/gameplay/gameplay.module'
import { PlayerModule } from '@server/modules/rest/player/player.module'
import { QuestModule } from '@server/modules/rest/quest/quest.module'
import { ShopModule } from '@server/modules/rest/shop/shop.module'

import { APP_FILTER } from "@nestjs/core";
import { SentryGlobalFilter } from "@sentry/nestjs/setup";
import { TaskModule } from '@server/modules/rest/task/task.module'
import { ClassicAuthModule } from '../modules/rest/classic-auth/classic-auth.module'
import { UserModule } from '../modules/rest/user/user.module'

@Module({
  imports: [
    PrismaModule,
    AppConfigModule,
    TelegramModule,
    SentryModule.forRoot(),
    PingPongModule,
    AuthModule,
    ClassicAuthModule,
    GameplayModule,
    UserModule,
    PlayerModule,
    QuestModule,
    ShopModule,
    TaskModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
  ],
})
export class AppModule {}
