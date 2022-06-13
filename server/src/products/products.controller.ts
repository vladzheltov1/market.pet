import { ProductID } from '@/shared/types/products';
import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll(): string {
        return this.productService.getAll();
    }
    
    @Get(":id")
    @HttpCode(HttpStatus.OK)
    getById(@Param("id") id: ProductID): string {
        return this.productService.getById(id);
    }
}