import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from './entities/opportunity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpportunitiesService {
 constructor(
    @InjectRepository(Opportunity)
    private opportunityRepository: Repository<Opportunity>,
  ) {}

  private readonly logger = new Logger('OpportunitiesService');

  findAll(skip = 0, take = 10) {
    return this.opportunityRepository.find({
      order: { createdAt: 'DESC' },
      skip,
      take,
    });
  }

  async findOne(id: string) {
    const oportunity = await this.opportunityRepository.findOneBy({ id });
    return oportunity;
  }

 

  create(data: CreateOpportunityDto) {
    const opp = this.opportunityRepository.create(data);
    return this.opportunityRepository.save(opp);
  }

  update(id: string, data: UpdateOpportunityDto) {
    return this.opportunityRepository.update(id, data);
  }

  remove(id: string) {
    return this.opportunityRepository.delete(id);
  }

   async deleteAllOpportunities() {
    const query = this.opportunityRepository.createQueryBuilder('opportunity');
    
    try {
      return await query.delete().where({}).execute();
    }catch(error) {
      return this.handleDBException(error);
    }

  }


  private handleDBException(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);

    throw new InternalServerErrorException("Unexpected error, check server logs");
  }
}
