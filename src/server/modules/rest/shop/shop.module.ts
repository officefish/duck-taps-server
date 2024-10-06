import { Module } from '@nestjs/common'
import { PrismaModule } from '@server/modules/prisma/prisma.module'
import { PrismaService } from '@server/modules/prisma/prisma.service'
import { PlayerModule } from '../player/player.module'
import { TokenModule } from '@server/modules/token/token.module'
import { ShopController } from './shop.controller'
import { ShopService } from './shop.service'

@Module({
  imports: [
   PrismaModule,
   PlayerModule,
   TokenModule,
  ],
  controllers : [ShopController],
  providers: [PrismaService, ShopService],
})
export class ShopModule {}