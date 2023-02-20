import { MeasurementUnit, PersonSex } from '../enums';
import { BaseEntity } from './base.entity';

export interface Person extends BaseEntity {
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  height: number,
  heightUnits: MeasurementUnit | string,
  avatarUrl: string,
  sex: PersonSex,
}
