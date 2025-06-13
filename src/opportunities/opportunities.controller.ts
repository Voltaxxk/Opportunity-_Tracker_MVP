import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query, ParseIntPipe } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';

@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Post()
  create(@Body() createOpportunityDto: CreateOpportunityDto) {
    return this.opportunitiesService.create(createOpportunityDto);
  }

  @Get()
  findAll(
      @Query('skip', ParseIntPipe) skip?: number,
      @Query('take', ParseIntPipe) take?: number,
  ) {
    return this.opportunitiesService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string ) {
    return this.opportunitiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateOpportunityDto: UpdateOpportunityDto) {
    return this.opportunitiesService.update(id, updateOpportunityDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.opportunitiesService.remove(id);
  }
}
