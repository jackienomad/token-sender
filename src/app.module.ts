import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './models/token/token.module';

@Module({
  imports: [TokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
