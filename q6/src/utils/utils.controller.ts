import { Controller, Get, Query } from '@nestjs/common';
import { UtilsService } from './utils.service';

@Controller('utils')
export class UtilsController {
  constructor(private utilsService: UtilsService) {}

  @Get('double')
  doubleNumber(@Query('num') num: string) {
    const numberToDouble = parseFloat(num);
    return this.utilsService.double(numberToDouble);
  }
}
