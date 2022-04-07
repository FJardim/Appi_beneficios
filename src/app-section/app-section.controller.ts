import { Controller, Get } from '@nestjs/common';
import { AppSection } from './entities/app-section.entity';
import { AppSectionService } from './app-section.service';

@Controller('app-section')
export class AppSectionController {
    constructor(private readonly appSectionService: AppSectionService) {}
    
    @Get()
    async getAll(): Promise<AppSection[]> {  
        return await this.appSectionService.getAll();
    }

}

