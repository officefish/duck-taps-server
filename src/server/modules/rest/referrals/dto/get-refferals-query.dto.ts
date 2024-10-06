import { PickType } from '@nestjs/swagger'
import { PageOptionsDto } from '@server/helpers/dto'

export class GetReferralsQueryDto extends PickType(PageOptionsDto, [
  'take',
  'page',
]) {}