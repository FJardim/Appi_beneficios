import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NeededInfo } from './entities/needed-info.entity';

@Injectable()
export class NeededInfoService {
    constructor(@InjectRepository(NeededInfo) private readonly neededInfoRepository: Repository<NeededInfo>){}

    async getAll(): Promise<NeededInfo[]> {
        const neededInfo = await this. neededInfoRepository.find();

        return neededInfo;
    }
}