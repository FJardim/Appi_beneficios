import { Module } from '@nestjs/common';
import { BusinessInfoService } from './business-info.service';
import { BusinessInfoController } from './business-info.controller';
import { BusinessInfo } from './entities/business-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessInfo])], 
  providers: [BusinessInfoService],
  controllers: [BusinessInfoController],

})
export class BusinessInfoModule {}
