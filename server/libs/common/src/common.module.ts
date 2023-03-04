import { Module } from '@nestjs/common';
import { LinksRepository } from './repositories/links.repository';

@Module({
  providers: [LinksRepository],
  exports: [],
})
export class CommonModule {}
