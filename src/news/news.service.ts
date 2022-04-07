import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
    constructor(@InjectRepository(News) private readonly newsRepository: Repository<News>){}

    async getAll(): Promise<News[]> {
        const news = await this.newsRepository.createQueryBuilder('news')
            .innerJoinAndSelect('news.store', 'store')
            .getMany()

        return news;
    }
}
