import { ApiProperty } from '@nestjs/swagger';
import { Opportunity } from 'src/opportunities/entities/opportunity.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Application {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column('text')
  message: string;

  @ApiProperty()
  @Column({ nullable: true })
  utmSource: string;

  @ApiProperty()
  @Column({ nullable: true })
  utmMedium: string;

  @ApiProperty()
  @Column({ nullable: true })
  utmCampaign: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @ManyToOne(() => Opportunity, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'opportunityId' })
  opportunity: Opportunity;

  @ApiProperty()
  @Column()
  opportunityId: string;
}
