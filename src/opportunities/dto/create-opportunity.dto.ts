import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOpportunityDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  deadline: string;
}