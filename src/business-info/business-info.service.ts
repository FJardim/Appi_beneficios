import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessInfo } from './entities/business-info.entity';

@Injectable()
export class BusinessInfoService {
    constructor(@InjectRepository(BusinessInfo) private readonly businessInfoRepository: Repository<BusinessInfo>){}

    async getAll(): Promise<BusinessInfo[]> {
        const businessInfo = await this. businessInfoRepository.find();

        return businessInfo;
    }
}
