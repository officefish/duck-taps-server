import { 
  BadRequestException,
  Body, 
  Controller, 
  ForbiddenException, 
  Get, 
  HttpCode, 
  Options, 
  Post, 
  Query, 
  Res
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { FastifyReply } from 'fastify'

import { Public } from '@server/common/decorators/is-public.decorator'
import { Cookies } from '@server/common/decorators/get-cookie.decorator'
import { SuccessMessageType } from '@server/helpers/common/types'

import { AuthService } from './auth.service'


import { 
  PlayerLogoutOperation,
  PlayerRefreshOperation,
  PlayerLoginOperation } from './decorators'

import { PlayerRefreshResponse, PlayerLoginResponse } from './responses'

import { PlayerLoginDto } from './dto'
import { RegisterWithCommandDto, TelegramInitDataDto } from './dto/telegram-initial.dto'
import { TelegramService } from '@server/modules/telegram/telegram.service'
import { ReferralsService } from '../referrals/referrals.service'

@ApiTags('auth')
@Public()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly telegramService: TelegramService,
    private readonly referralService: ReferralsService
  ) {}

  @ApiResponse({
    status: 200,
    description: 'User successfully registered or logged in',
    type: PlayerLoginResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Invalid Telegram Init Data',
  })

  @Post('register')
  async register(
    @Body() initial: TelegramInitDataDto,
  ): Promise<PlayerLoginResponse> {

    console.log(`initData: ${initial.initData}`)

    const valid = this.telegramService.validateInitData(initial.initData);
    if (!valid) {
      // Возвращаем 403 ошибку если данные невалидные
      throw new ForbiddenException('Invalid Telegram Init Data');
    }

    const userData = this.telegramService.extractUserData(initial.initData);

    const dto = {
      tgId: userData.id,
      username: userData.username,
      isPremium: false,
      firstName: userData.firstName,
      lastName: userData.lastName,
    } as unknown as PlayerLoginDto

    return await this.authService.registerOrLogin(dto, null);
  }

  /* register with referrer */
  @ApiResponse({
    status: 200,
    description: 'User successfully registered or logged in',
    type: PlayerLoginResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Invalid Telegram Init Data',
  })

  @Post('register-with-command')
  async registerWithReferrer(
    @Body() body: RegisterWithCommandDto,
  ): Promise<PlayerLoginResponse> {

    //console.log(`initData: ${initial.initData}`)

    const { initData, command } = body
    //const referralCode = command.split('=')[1]
    if (!command.startsWith("referrerId=")) {
      throw new BadRequestException("Invalid command")
    }

    const parsedCommand = this.authService.parseReferrerIdString(command)
    const referralCode = parsedCommand?.uuid || null

    const valid = this.telegramService.validateInitData(initData);
    if (!valid) {
      // Возвращаем 403 ошибку если данные невалидные
      throw new ForbiddenException('Invalid Telegram Init Data');
    }

    const userData = this.telegramService.extractUserData(initData);

    const dto = {
      tgId: userData.id,
      username: userData.username,
      isPremium: false,
      firstName: userData.firstName,
      lastName: userData.lastName,
    } as unknown as PlayerLoginDto

    const response = await this.authService.registerOrLogin(dto, referralCode);

    /* Если пользователь пытается зарегистрировать сам себя, то игнорируем эту попытку */
    if (response.player.referralCode === referralCode) {
      return response
    }

    /* Если пользователь уже зарегистрирова, то игнорируем попытку активации приглашения */
    if (!response.isNew) {
      return response
    }

    const referrer = await this.referralService.findByReferralCode(referralCode);
      if (referrer) {
        await this.referralService.trackReferral(referrer.id, response.player.id);
        await this.referralService.rewardReferrer(referrer.id);
      }

    return response
  }




  @Options('register')
  @ApiResponse({
    status: 204,
    description: 'CORS preflight check for register endpoint',
  })
  async options(@Res() reply: FastifyReply) {
    return reply.status(204).send(); // Возвращаем успешный ответ для preflight
  }

  @PlayerLoginOperation()
  @HttpCode(200)
  @Post('login')
  async login(
    @Body() dto: PlayerLoginDto,
    @Query('referrerId') referrerId: string,
  ): Promise<PlayerLoginResponse> {
    return await this.authService.registerOrLogin(dto, referrerId);
  }

  @PlayerLogoutOperation()
  @HttpCode(200)
  @Post('logout')
  async logout(
    @Cookies('refreshToken') refreshToken: string,
  ): Promise<SuccessMessageType> {
    const { message } = await this.authService.logoutPlayer(refreshToken);

    return { message };
  }

//   @PlayerRefreshOperation()
//   @Get('refresh')
//   async refresh(
//     @Cookies('refreshToken') requestRefreshToken: string,
//   ): Promise<PlayerRefreshResponse> {
//     const { message, player, accessToken, refreshToken } =
//       await this.authService.refreshTokens(requestRefreshToken);

//     return {
//       message,
//       player,
//       accessToken,
//       refreshToken,
//     };
//   }
// }
}