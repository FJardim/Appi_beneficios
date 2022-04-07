import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
    constructor(@InjectRepository(Store) private readonly storeRepository: Repository<Store>) {}
    
    async getAll(): Promise<Store[]> {
        const Store = await this.storeRepository.find();

        return Store;
    }
}



