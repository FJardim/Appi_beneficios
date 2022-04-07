import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discounts } from './entities/discounts.entity';

@Injectable()
export class DiscountsService {
    constructor(@InjectRepository(Discounts) private readonly discountsRepository: Repository< Discounts>){}

    async getAll(): Promise< Discounts[]> {
        const discounts = await this. discountsRepository.find();

        return discounts;
    }
}

