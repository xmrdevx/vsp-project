import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';
import { IPageable } from '../dtos/paging/pageable.interface';

export interface IRepository<T, ID> {
  create(data: DeepPartial<T>): T;
  createMany(data: DeepPartial<T>[]): T[];
  save(data: DeepPartial<T>): Promise<T>;
  saveMany(data: DeepPartial<T>[]): Promise<T[]>;
  findOneById(id: ID): Promise<T | null>;
  findByCondition(filterCondition: FindOneOptions<T>): Promise<T | null>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  findByPageable(pageable: IPageable, options?: FindManyOptions<T>): Promise<[T[], number]>
  remove(data: T): Promise<T>;
  findWithRelations(relations: FindManyOptions<T>): Promise<T[]>;
  preload(entityLike: DeepPartial<T>): Promise<T | null>;
}
