import { BeforeInsert, BeforeUpdate, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './identity/user.entity';

export abstract class BaseTrackedEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public createdOn: Date;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public updatedOn: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  public deletedOn: Date | null | undefined;

  @Column()
  public createdById: string;

  @ManyToOne(type => User)
  @JoinColumn()
  public createdBy: User;

  @Column()
  public updatedById: string;

  @ManyToOne(type => User)
  @JoinColumn()
  public updatedBy: User;

  @Column({ nullable: true })
  public deletedById: string;

  @ManyToOne(type => User)
  @JoinColumn()
  public deletedBy: User;

  @BeforeInsert()
  public initializeTimestamps() {
    const now: Date = new Date()
    this.createdOn = now;
    this.updatedOn = now;
  }

  @BeforeUpdate()
  public updateTimestamps() {
    const now: Date = new Date();
    this.updatedOn = now;
  }
}
