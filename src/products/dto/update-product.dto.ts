import { IsString, IsNumber, IsBoolean, IsOptional, Min, MaxLength } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
    name?: string;

    @IsString()
    @IsOptional()
    @MaxLength(500, { message: 'Descrição deve ter no máximo 500 caracteres' })
    description?: string;

    @IsNumber()
    @IsOptional()
    @Min(0, { message: 'Preço não pode ser negativo' })
    price?: number;

    @IsString()
    @IsOptional()
    @MaxLength(500, { message: 'URL da imagem deve ter no máximo 500 caracteres' })
    image?: string;

    @IsString()
    @IsOptional()
    @MaxLength(50, { message: 'Categoria deve ter no máximo 50 caracteres' })
    category?: string;

    @IsBoolean()
    @IsOptional()
    featured?: boolean;

    @IsBoolean()
    @IsOptional()
    available?: boolean;
}
