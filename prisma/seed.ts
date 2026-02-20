import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const connectionString = process.env.DATABASE_URL || 'file:./dev.db';
const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Populando banco de dados...');

    await prisma.product.createMany({
        data: [
            {
                name: 'Sushi de Salmão',
                description: 'Salmão fresco sobre arroz temperado',
                price: 12.90,
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
                category: 'sushi',
                featured: true,
                available: true,
            },
            {
                name: 'Sushi de Atum',
                description: 'Atum vermelho premium',
                price: 15.90,
                image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400',
                category: 'sushi',
                featured: false,
                available: true,
            },
            {
                name: 'Hot Roll',
                description: 'Roll empanado com recheio especial',
                price: 28.90,
                image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400',
                category: 'rolls',
                featured: true,
                available: true,
            },
            {
                name: 'California Roll',
                description: 'Kani, pepino e abacate',
                price: 24.90,
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
                category: 'rolls',
                featured: false,
                available: true,
            },
            {
                name: 'Sashimi Especial',
                description: 'Variado de peixes frescos fatiados',
                price: 45.90,
                image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400',
                category: 'sashimi',
                featured: true,
                available: true,
            },
            {
                name: 'Edamame',
                description: 'Grãos de soja cozos no vapor com sal marinho e limão siciliano.',
                price: 18.9,
                image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=600&q=80',
                category: 'Entradas',
                featured: true,
                available: true,
            },
            {
                name: 'Gyoza Frito',
                description: 'Pastel japonês recheado com carne suína e repolho, acompanha molho ponzu.',
                price: 32.9,
                image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
                category: 'Entradas',
                featured: true,
                available: true,
            },
            {
                name: 'Missoshiro',
                description: 'Sopa tradicional japonesa de missô com tofu, wakame e cebolinha.',
                price: 16.9,
                image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
                category: 'Entradas',
                featured: true,
                available: true,
            },

            // Niguiris
            {
                name: 'Niguiri de Salmão',
                description: 'Bolinho de arroz temperado com fatia de salmão fresco. 2 unades.',
                price: 24.9,
                image: 'https://cardapio.nomadasushi.com.br/wp-content/uploads/2024/07/1.2-Salmao-768x960.jpg',
                category: 'Niguiris',
                featured: true,
                available: true,
            },
            {
                name: 'Niguiri de Atum',
                description: 'Bolinho de arroz temperado com fatia de atum vermelho. 2 unades.',
                price: 28.9,
                image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
                category: 'Niguiris',
                featured: true,
                available: true,
            },
            {
                name: 'Niguiri de Camarão',
                description: 'Bolinho de arroz com camarão grelhado e toque de limão. 2 unades.',
                price: 26.9,
                image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80',
                category: 'Niguiris',
                featured: true,
                available: true,
            },

            // Makis
            {
                name: 'Philadelphia Roll',
                description: 'Salmão, cream cheese e pepino envoltos em arroz e nori. 8 peças.',
                price: 42.9,
                image: 'https://www.tiger-corporation.com/wp-content/uploads/2023/02/hero-img-recipe-philadelphia-roll-cd2c9161aad91f5ba6ee520ecac7abe1.jpg',
                category: 'Makis',
                featured: true,
                available: true,
            },
            {
                name: 'Spicy Tuna Roll',
                description: 'Atum picante com pepino e molho sriracha. 8 peças.',
                price: 46.9,
                image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80',
                category: 'Makis',
                featured: true,
                available: true,
            },
            {
                name: 'Dragon Roll',
                description: 'Camarão empanado, abacate e cream cheese com cobertura de salmão. 8 peças.',
                price: 54.9,
                image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80',
                category: 'Makis',
                featured: true,
                available: true,
            },

            // Temakis
            {
                name: 'Temaki de Salmão',
                description: 'Cone de nori recheado com arroz, salmão fresco, cream cheese e cebolinha.',
                price: 36.9,
                image: 'https://images.unsplash.com/photo-1576021182211-9ea8dced3690?w=600&q=80',
                category: 'Temakis',
                featured: true,
                available: true,
            },
            {
                name: 'Temaki de Atum',
                description: 'Cone de nori com arroz, atum, pepino e molho especial da casa.',
                price: 38.9,
                image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
                category: 'Temakis',
                featured: true,
                available: true,
            },

            // Pratos Quentes
            {
                name: 'Ramen Shoyu',
                description: 'Caldo rico de shoyu com macarrão, chashu, ovo marinado e nori.',
                price: 64.9,
                image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
                category: 'Pratos Quentes',
                featured: true,
                available: true,
            },
            {
                name: 'Katsu Curry',
                description: 'Escalope de frango empanado com curry japonês sobre arroz branco.',
                price: 58.9,
                image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80',
                category: 'Pratos Quentes',
                featured: true,
                available: true,
            },
            {
                name: 'Yakisoba',
                description: 'Macarrão frito estilo japonês com legumes, frango e molho especial.',
                price: 52.9,
                image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
                category: 'Pratos Quentes',
                featured: true,
                available: true,
            },

            // Bebas
            {
                name: 'Chá Verde Gelado',
                description: 'Chá verde japonês (matcha) gelado, levemente adoçado.',
                price: 14.9,
                image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
                category: 'Bebidas',
                featured: true,
                available: true,
            },
            {
                name: 'Sake Tradicional',
                description: 'Saquê japonês servo na temperatura eal. 180ml.',
                price: 28.9,
                image: 'https://doryosushibar.com.br/wp-content/uploads/2022/08/DSC_3536-683x1024.jpg',
                category: 'Bebidas',
                featured: true,
                available: true,
            },
            {
                name: 'Ramune',
                description: 'Refrigerante japonês original com bolinha de vro. 330ml.',
                price: 18.9,
                image: 'https://exoticworld.us/cdn/shop/files/ramunestrawberry.png?v=1689724720&wth=1280',
                category: 'Bebidas',
                featured: true,
                available: true,
            },

            // Sobremesas
            {
                name: 'Mochi de Morango',
                description: 'Bolinho de arroz glutinoso recheado com sorvete de morango. 3 unades.',
                price: 26.9,
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
                category: 'Sobremesas',
                featured: true,
                available: true,
            },
            {
                name: 'Cheesecake de Matcha',
                description: 'Cheesecake japonês suave com cobertura de matcha premium.',
                price: 24.9,
                image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
                category: 'Sobremesas',
                featured: true,
                available: true,
            },
        ],
    });

    console.log('✅ Dados inseros com sucesso!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });