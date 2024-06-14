import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';
import { DoubleNumberDto } from './dto/double-number.dto';

@Controller('api')
export class ApiController {
  constructor(private utilsService: UtilsService) {}

  @Post('test')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  doubleNumber(@Body() doubleNumberDto: DoubleNumberDto) {
    return this.utilsService.double(doubleNumberDto.num);
  }
}
