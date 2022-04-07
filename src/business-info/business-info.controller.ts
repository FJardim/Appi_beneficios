import { Controller, Get } from '@nestjs/common';
import { BusinessInfo } from './entities/business-info.entity';
import { BusinessInfoService } from './business-info.service';

@Controller('business-info')
export class BusinessInfoController {
    constructor(private readonly BusinessInfoService: BusinessInfoService){}

    @Get()
    async getAll(): Promise<BusinessInfo[]> {
        return await this.BusinessInfoService.getAll();
    }
}

