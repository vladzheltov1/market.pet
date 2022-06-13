import { Product, ProductID } from "@/shared/types/products";
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products: Array<Product> = [];

    getAll(): string {
        return JSON.stringify(this.products);
    }    

    getById(id: ProductID): string {
        return JSON.stringify(this.products.find(product => product.id === id));
    }

    
}