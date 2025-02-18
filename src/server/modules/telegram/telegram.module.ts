import { Module } from '@nestjs/common'
import { AppConfigModule } from '@server/modules/config/config.module'
import { AppConfigService } from '@server/modules/config/config.service'
import { TelegramService } from './telegram.service'
import { HttpModule } from '@nestjs/axios';  // Импортируем HttpModule


@Module({
    imports: [
        AppConfigModule,
        HttpModule
      ],
  providers: [TelegramService, AppConfigService],
  exports: [TelegramService],
})
export class TelegramModule {}