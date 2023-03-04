import { IRepository } from './repository.interface';
import { Link } from '../entities/shared/link.entity';

export const LINKS_REPOSITORY_TOKEN: string = 'LINKS_REPOSITORY_TOKEN';

export interface ILinksRepository extends IRepository<Link, string> { };
