import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const skip = {
    skip: z.number().min(0),
  }
  
  const take = {
    take: z.number().min(5).max(100),
  }
  
  const PartialSchema = z.object({
    ...skip,
    ...take,
  })

  export class GetManyPlayersDto extends createZodDto(PartialSchema) {}
