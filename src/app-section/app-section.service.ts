import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppSection } from './entities/app-section.entity';

@Injectable()
export class AppSectionService {
    constructor(@InjectRepository(AppSection) private readonly appSectionRepository: Repository<AppSection>){}

    async getAll(): Promise<AppSection[]> {
        const appSection = await this. appSectionRepository.find();

        return appSection;
    }
}




  