import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FooterSection } from './entities/footer-sections.entity';

@Injectable()
export class FooterSectionsService {
    constructor(@InjectRepository( FooterSection) private readonly footerSectionsRepository: Repository< FooterSection>){}

    async getAll(): Promise< FooterSection[]> {
        const footerSections = await this. footerSectionsRepository.find();

        return footerSections;
    }
}
