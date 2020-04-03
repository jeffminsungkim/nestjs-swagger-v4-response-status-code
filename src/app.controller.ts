import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { WordDto } from './word.dto';

@ApiTags('test')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Test description.',
    type: String,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  @ApiResponse({
    status: 200,
    type: String,
  })
  async printHelloSomething(@Body() dto: WordDto): Promise<string> {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(`Hello ${dto.word}`), 1000);
    });
  }
}
