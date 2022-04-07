import { Controller, Get } from '@nestjs/common';
import { NeededInfoService } from './needed-info.service';
import { NeededInfo } from './entities/needed-info.entity';

@Controller('needed-info')
export class NeededInfoController {
    constructor(private readonly neededInfoService: NeededInfoService) {}
    
    @Get()
    async getAll(): Promise<NeededInfo[]> {  
        return await this.neededInfoService.getAll();
    }

}


