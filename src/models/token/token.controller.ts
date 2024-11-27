import { Controller, Param, Post } from '@nestjs/common';
import { TokenService } from './token.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Token')
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('send/:address')
  sendToken(@Param('address') address: string) {
    return this.tokenService.sendNativeToken(address);
  }
}
