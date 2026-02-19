import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
        return this.prisma.product.findUnique({
            where: { id },
        });
    }

    async create(data: {
        name: string;
        description: string;
        price: number;
        image?: string;
        category: string;
        featured?: boolean;
        available?: boolean;
    }) {
        return this.prisma.product.create({ data });
    }
}
