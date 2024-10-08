import { ApiProperty } from "@nestjs/swagger";
import { FullPlayerResponse } from "./player.response";


export class ManyPlayersResponse {
    @ApiProperty({
        description: 'total players amount',
        example: 300,
        required: true,
      })
    total: number 

    players: FullPlayerResponse[]
}