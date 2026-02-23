import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }
    
    async findAll(category?: string) {
        return this.prisma.product.findMany({
            where: category ? { category } : undefined,
            orderBy: { name: 'asc' },
        });
    }

    async findFeatured() {
        return this.prisma.product.findMany({
            where: { featured: true },
            orderBy: { name: 'asc' },
        });
    }

    async findOne(id: number) {
        const product = await this.prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }

        return product;
    }

    async create(data: CreateProductDto) {
        return this.prisma.product.create({ data });
    }

    async update(id: number, data: UpdateProductDto) {
        // Verifica se o produto existe
        await this.findOne(id);

        return this.prisma.product.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        // Verifica se o produto existe
        await this.findOne(id);

        return this.prisma.product.delete({
            where: { id },
        });
    }
}
