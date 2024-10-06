import { Module } from '@nestjs/common'
import { GameplayModule } from '@server/modules/gameplay/gameplay.module'
import { GameplayService } from '@server/modules/gameplay/gameplay.service'
import { PlayerController } from './player.controller'
import { TokenModule } from '@server/modules/token/token.module'
import { ReferralsModule } from '@server/modules/rest/referrals/referrals.module'

@Module({
  imports: [
   GameplayModule,
   TokenModule,
   ReferralsModule,
  ],
  controllers : [PlayerController],
  providers: [GameplayService],
})
export class PlayerModule {}