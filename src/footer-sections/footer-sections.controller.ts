import { Controller, Get } from '@nestjs/common';
import { FooterSection } from './entities/footer-sections.entity';
import { FooterSectionsService } from './footer-sections.service';

@Controller('footer-sections')
export class FooterSectionsController {
    constructor(private readonly footerSectionsService: FooterSectionsService) {}
    
    @Get()
    async getAll(): Promise<FooterSection[]> {  
        return await this.footerSectionsService.getAll();
    }
}

