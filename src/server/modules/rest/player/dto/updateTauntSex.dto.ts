import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class UpdateTauntSexDto { 

    @ApiProperty({ 
      description: 'Update player taunt sex', 
      example: "male"
    })
    @IsString()
    sex: "male" | "female" | "MALE" | "FEMALE";

   
}