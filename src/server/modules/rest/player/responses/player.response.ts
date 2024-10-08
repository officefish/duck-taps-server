import { ApiProperty } from "@nestjs/swagger";

export class FullPlayerResponse {
    @ApiProperty({
        description: 'Is player online',
        example: 300,
        required: true,
      })
    active: boolean 
    
    @ApiProperty({
        description: 'Current balance value',
        example: 300,
        required: true,
      })
    balance: number

    @ApiProperty({
        description: 'Player register datetime',
        example: 300,
        required: true,
      })
    createdAt: string

    @ApiProperty({
        description: 'Current energy value',
        example: 300,
        required: true,
      })
    energyLatest: number

    @ApiProperty({
        description: 'Max energy value',
        example: 300,
        required: true,
      })
    energyMax: number

    @ApiProperty({
        description: 'Telegram firstName',
        example: 300,
        required: true,
      })
    firstName?: string 

    @ApiProperty({
        description: 'Current database id value',
        example: 300,
        required: true,
      })
    id: string

    @ApiProperty({
        description: 'Telegram avatar url',
        example: 300,
        required: false,
      })
    imageUrl?: string

    @ApiProperty({
        description: 'Current income per hour value',
        example: 300,
        required: true,
      })
    incomePerHour: number

    @ApiProperty({
        description: 'Invitations list',
        example: 300,
        required: false,
    })
    invitations?: any

    @ApiProperty({
        description: 'Referrer id',
        example: '',
        required: true,
    })
    invitedById: string
    
    @ApiProperty({
        description: 'Is player premium in telegram',
        example: true,
        required: true,
    })
    isPremium: boolean

    @ApiProperty({
        description: 'Player items list',
        example: true,
        required: true,
    })
    items: any

    @ApiProperty({
        description: 'Player last energy update datetime',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    lastEnergyUpdate: string

    @ApiProperty({
        description: 'Player last income update datetime',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    lastIncomeUpdate: string

    @ApiProperty({
        description: 'Player last login datetime',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    lastLogin: string

    @ApiProperty({
        description: 'Player last logout update datetime',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    lastLogout: string

    @ApiProperty({
        description: 'Player last name in telegram',
        example: '2023-09-01T12:34:56Z',
        required: false,
    })
    lastName?: string

    @ApiProperty({
        description: 'Player level id',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    levelId: number

    @ApiProperty({
        description: 'Player rank',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    rank: string

    @ApiProperty({
        description: 'Player recovery rate',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    recoveryRate: number

    @ApiProperty({
        description: 'Player referral code',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    referralCode: string 
    
    @ApiProperty({
        description: 'Player referral profit',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    referralProfit: number

    @ApiProperty({
        description: 'Player referral profit',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    tasks?: any
    
    @ApiProperty({
        description: 'Player telegram id',
        example: '2023-09-01T12:34:56Z',
        required: true,
    })
    tgId: string
    
    @ApiProperty({
        description: 'Player username in telegram',
        example: '2023-09-01T12:34:56Z',
        required: false,
    })
    username?: string
}