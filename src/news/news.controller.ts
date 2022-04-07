import { Controller, Get } from '@nestjs/common';
import { News } from './entities/news.entity';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}
    
    @Get()
    async getAll(): Promise<News[]> {  
        return await this.newsService.getAll();
    }
}


