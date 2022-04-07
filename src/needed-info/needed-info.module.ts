import { Module } from '@nestjs/common';
import { NeededInfoService } from './needed-info.service';
import { NeededInfoController } from './needed-info.controller';
import { NeededInfo } from './entities/needed-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NeededInfo])], 
  providers: [NeededInfoService],
  controllers: [NeededInfoController],
})
export class NeededInfoModule {}


