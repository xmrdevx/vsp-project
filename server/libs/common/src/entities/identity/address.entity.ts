import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Profile } from "./profile.entity";

@Entity({ name: 'app_address' })
export class Address extends BaseEntity {
  @Column({ type: String, nullable: true })
  public street: string | null | undefined;

  @Column({ type: String, nullable: true })
  public street2: string | null | undefined;

  @Column({ type: String, nullable: true })
  public city: string | null | undefined;

  @Column({ type: String, nullable: true })
  public state: string | null | undefined;

  @Column({  type: String,nullable: true })
  public zip: string | null | undefined;

  @Column({ type: String, nullable: true })
  public country: string | null | undefined;

  @OneToOne(type => Profile, profile => profile.address)
  public profile: Profile;

  constructor(obj: Partial<Address>) {
    super();
    Object.assign(this, obj);
  }
}
