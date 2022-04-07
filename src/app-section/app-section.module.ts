import { Module } from '@nestjs/common';
import { AppSectionController } from './app-section.controller';
import { AppSectionService } from './app-section.service';
import { AppSection } from './entities/app-section.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AppSection])], 
  providers: [ AppSectionService],
  controllers: [AppSectionController],
})
export class AppSectionModule {}
