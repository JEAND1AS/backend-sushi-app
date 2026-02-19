import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
    } | null>;
    create(body: {
        name: string;
        description: string;
        price: number;
        image?: string;
        category: string;
        featured?: boolean;
        available?: boolean;
    }): Promise<{
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
