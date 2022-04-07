import { Controller, Get } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    
    @Get()
    async getAll(): Promise<Product[]> {  
        return await this.productService.getAll();
    }
}

