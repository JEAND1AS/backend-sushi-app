import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(category?: string): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string | null;
        category: string;
        featured: boolean;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findFeatured(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string | null;
        category: string;
        featured: boolean;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string | null;
        category: string;
        featured: boolean;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: CreateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string | null;
        category: string;
        featured: boolean;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: UpdateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string | null;
        category: string;
        featured: boolean;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string | null;
        category: string;
        featured: boolean;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
