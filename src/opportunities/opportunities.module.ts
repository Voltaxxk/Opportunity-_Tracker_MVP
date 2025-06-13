import { Module } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { OpportunitiesController } from './opportunities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opportunity } from './entities/opportunity.entity';

@Module({
  controllers: [OpportunitiesController],
  providers: [OpportunitiesService],
  imports: [TypeOrmModule.forFeature([Opportunity])],
  exports: [OpportunitiesService],
})
export class OpportunitiesModule {}
