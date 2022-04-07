import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

    async getAll(): Promise< Product[]> {
        const product = await this.productRepository.find();

        return product;
    }
}

