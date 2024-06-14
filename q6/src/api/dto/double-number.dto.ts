import { IsNumber } from 'class-validator';

export class DoubleNumberDto {
  @IsNumber({}, { message: 'num must be a number' })
  num: number;
}
