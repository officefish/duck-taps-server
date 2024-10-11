export enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    READY = "READY",
    COMPLETED = "COMPLETED",
}

export interface ITask {
    id: string
    templateTaskId : string
    playerId: string
    status: TaskStatus
    progress: string
    createdAt: string
    updatedAt: string
    finishedAt: string
}

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
    tasks?: ITask[]
    tgId: string
    username?: string
}