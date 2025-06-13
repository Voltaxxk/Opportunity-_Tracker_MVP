import { IsString, IsEmail, IsOptional, IsUUID } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  message: string;

  @IsUUID()
  opportunityId: string;

  @IsOptional()
  @IsString()
  utmSource?: string;

  @IsOptional()
  @IsString()
  utmMedium?: string;

  @IsOptional()
  @IsString()
  utmCampaign?: string;
}