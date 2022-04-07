import { Controller, Get } from '@nestjs/common';
import { Discounts } from './entities/discounts.entity';
import { DiscountsService } from './discounts.service';

@Controller('discounts')
export class DiscountsController {
constructor(private readonly discountsService:  DiscountsService) {}
    
    @Get()
    async getAll(): Promise< Discounts[]> {  
        return await this.discountsService.getAll();
    }
    
}