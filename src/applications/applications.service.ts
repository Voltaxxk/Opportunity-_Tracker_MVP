import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private repo: Repository<Application>,
  ) {}

  async findAll(skip = 0, take = 10) {
    return this.repo.find({
      select: ['id', 'name', 'email', 'message', 'utmSource', 'utmMedium', 'utmCampaign', 'createdAt'],
      order: { createdAt: 'DESC' },
      skip,
      take,
      relations: ['opportunity'],
    });
  }

  findOne(id: string) {
    return this.repo.findOne({
      where: { id },
      relations: ['opportunity'],
    });
  }

  create(data: CreateApplicationDto) {
    const app = this.repo.create(data);
    return this.repo.save(app);
  }
}
