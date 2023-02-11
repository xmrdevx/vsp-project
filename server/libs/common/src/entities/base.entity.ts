import { PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public createdOn: Date;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public updatedOn: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  public deletedOn: Date | null | undefined;

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
