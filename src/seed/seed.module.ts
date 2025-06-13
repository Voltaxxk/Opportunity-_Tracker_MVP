import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { OpportunitiesModule } from 'src/opportunities/opportunities.module';


@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [OpportunitiesModule],
})
export class SeedModule {}
