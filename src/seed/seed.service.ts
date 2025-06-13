import { Injectable } from '@nestjs/common';
import { OpportunitiesService } from 'src/opportunities/opportunities.service';
import { initialData } from './data/seed-data';
import { Opportunity } from 'src/opportunities/entities/opportunity.entity';


@Injectable()
export class SeedService {

    constructor(
        private readonly opportunitiesService: OpportunitiesService ,
    ){} 

    async runSeed() {

        await this.insertNewOpportunity();

        return 'Seed executed';

    }

    private async insertNewOpportunity() {

        await this.opportunitiesService.deleteAllOpportunities();

        const seedOpportunities = initialData

        const insertPromises : Promise<Opportunity>[] = [];

        seedOpportunities.forEach(product => {
            insertPromises.push(this.opportunitiesService.create(product));
        });


        await Promise.all(insertPromises);


        return true;
    }

}
