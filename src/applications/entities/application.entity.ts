import { Opportunity } from 'src/opportunities/entities/opportunity.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('text')
  message: string;

  @Column({ nullable: true })
  utmSource: string;

  @Column({ nullable: true })
  utmMedium: string;

  @Column({ nullable: true })
  utmCampaign: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Opportunity, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'opportunityId' })
  opportunity: Opportunity;

  @Column()
  opportunityId: string;
}
