import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Opportunity } from './entities/opportunity.entity';

@ApiTags('Opportunities')
@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Created a new Opportunity', type  : Opportunity })
  create(@Body() createOpportunityDto: CreateOpportunityDto) {
    return this.opportunitiesService.create(createOpportunityDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Found all Opportunities', type : Opportunity, isArray: true })
  findAll(
      @Query('skip',new DefaultValuePipe(0), ParseIntPipe) skip: number,
      @Query('take',new DefaultValuePipe(10), ParseIntPipe) take: number,
  ) {
    return this.opportunitiesService.findAll(skip, take);
  }


  @Get(':id')
  @ApiResponse({ status: 200, description: 'Found Opportunity by ID', type : Opportunity })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.opportunitiesService.findOne(id);
  }

}
