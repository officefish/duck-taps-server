import { IPlayer } from "../models/player.types"
import { useAxiosPostTrigger } from "./axios.service"

interface IManyPlayersResponse {
  total: number
  players: IPlayer[]
}

export const useManyPlayers = () => {
    const { data, trigger } = useAxiosPostTrigger<IManyPlayersResponse>({
      route: 'player/many',
    })
  
    return { data, trigger }
}
  
  
  