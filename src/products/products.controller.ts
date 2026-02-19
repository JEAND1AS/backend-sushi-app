import { Controller, Get, Post, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    findAll(@Query('category') category?: string) {
        return this.productsService.findAll(category);
    }

    @Get('featured')
    findFeatured() {
        return this.productsService.findFeatured();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    create(
        @Body()
        body: {
            name: string;
            description: string;
            price: number;
            image?: string;
            category: string;
            featured?: boolean;
            available?: boolean;
        }
    ) {
        return this.productsService.create(body);
    }
}