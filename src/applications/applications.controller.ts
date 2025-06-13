import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Application } from './entities/application.entity';

@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private service: ApplicationsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Found all Applications', type: Application, isArray: true })
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    return this.service.findAll(Number(skip) || 0, Number(take) || 10);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Found a Application', type: Application })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Found all Applications', type: Application })
  create(
    @Body() body: CreateApplicationDto,
    @Query('utm_source') utmSource?: string,
    @Query('utm_medium') utmMedium?: string,
    @Query('utm_campaign') utmCampaign?: string,
  ) {

  
    const applicationData ={
      ...body,
      utmSource,
      utmMedium,
      utmCampaign,
    }

    return this.service.create(applicationData);
  }
}
