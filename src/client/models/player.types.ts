export interface IPlayer {
    active: boolean 
    balance: number
    createdAt: string
    energyLatest: number
    energyMax: number
    firstName?: string 
    id: string
    imageUrl?: string
    incomePerHour: number
    invitations?: any
    invitedById: string
    isPremium: boolean
    items: any
    lastEnergyUpdate: string
    lastIncomeUpdate: string
    lastLogin: string
    lastLogout: string
    lastName?: string
    levelId: number
    rank: string 
    recoveryRate: number
    referralCode: string 
    referralProfit: number
    tasks?: any
    tgId: string
    username?: string
}