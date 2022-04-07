import { Module } from '@nestjs/common';
import { DiscountsController } from './discounts.controller';
import { DiscountsService } from './discounts.service';
import { Discounts } from './entities/discounts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
  imports: [TypeOrmModule.forFeature([Discounts])], 
  controllers: [DiscountsController],
  providers: [DiscountsService]
})
export class DiscountsModule {}


