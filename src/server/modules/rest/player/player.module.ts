import { Module } from '@nestjs/common'
import { GameplayModule } from '@server/modules/gameplay/gameplay.module'
import { GameplayService } from '@server/modules/gameplay/gameplay.service'
import { PlayerController } from './player.controller'
import { TokenModule } from '@server/modules/token/token.module'
import { ReferralsModule } from '@server/modules/rest/referrals/referrals.module'
import { AccessoryModule } from '@server/modules/accessory/accessory.module'
import { UserModule } from '@server/modules/rest/user/user.module'
import { AccessoryService } from '@server/modules/accessory/accessory.service'
import { AppConfigModule } from '@server/modules/config/config.module'
import { AppConfigService } from '@server/modules/config/config.service'
import { CryptoModule } from '@server/modules/crypto/crypto.module'
import { CryptoService } from '@server/modules/crypto/crypto.service'
import { UserService } from '@server/modules/rest/user/user.service'

@Module({
  imports: [
   GameplayModule,
   TokenModule,
   ReferralsModule,
   AccessoryModule,
   UserModule,
   AppConfigModule,
   CryptoModule,
  ],
  controllers : [PlayerController],
  providers: [
    GameplayService, 
    AccessoryService, 
    AppConfigService, 
    CryptoService,
    UserService
  ],
})
export class PlayerModule {}