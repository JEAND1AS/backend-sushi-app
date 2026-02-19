# 🍣 Backend Sushi App

API REST desenvolvida com NestJS e Prisma para gerenciamento de produtos de um restaurante de sushi.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API Endpoints](#api-endpoints)
- [Como Adicionar Novos Itens](#como-adicionar-novos-itens)
- [Banco de Dados](#banco-de-dados)

## 🎯 Sobre o Projeto

Este é o backend de uma aplicação de cardápio digital para restaurante de comida japonesa. A API permite:
- Listar produtos (sushi, rolls, sashimi, entradas, etc.)
- Filtrar produtos por categoria
- Buscar produtos em destaque
- Adicionar novos produtos
- Gerenciar disponibilidade de produtos

## 🛠 Tecnologias

- **NestJS** - Framework Node.js para construção de aplicações server-side
- **Prisma** - ORM para TypeScript/JavaScript
- **SQLite** - Banco de dados (pode ser alterado facilmente)
- **TypeScript** - Superset JavaScript com tipagem estática
- **Jest** - Framework de testes

## 📁 Estrutura de Arquivos

### Arquivos Raiz

| Arquivo | Descrição |
|---------|-----------|
| **package.json** | Gerencia dependências do projeto e scripts npm |
| **tsconfig.json** | Configurações do compilador TypeScript |
| **tsconfig.build.json** | Configurações específicas para build de produção |
| **nest-cli.json** | Configurações da CLI do NestJS |
| **eslint.config.mjs** | Regras de linting do código (padrões de código) |
| **prisma.config.ts** | Configurações do Prisma ORM |

### 📂 prisma/

Diretório do Prisma ORM - gerencia banco de dados e migrações.

| Arquivo | Descrição |
|---------|-----------|
| **schema.prisma** | Define a estrutura do banco de dados (tabelas, campos, relações) |
| **seed.ts** | Script para popular o banco com dados iniciais de exemplo |
| **migrations/** | Histórico de alterações no banco de dados |

**Estrutura do Model Product:**
```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String   // Nome do produto
  description String   // Descrição detalhada
  price       Float    // Preço em reais
  image       String?  // URL da imagem (opcional)
  category    String   // Categoria (sushi, rolls, etc.)
  featured    Boolean  // Produto em destaque
  available   Boolean  // Disponibilidade
  createdAt   DateTime // Data de criação
  updatedAt   DateTime // Data de atualização
}
```

### 📂 src/

Código-fonte principal da aplicação.

#### Arquivos Raiz do src/

| Arquivo | Descrição |
|---------|-----------|
| **main.ts** | Ponto de entrada da aplicação - inicia o servidor na porta 3000 |
| **app.module.ts** | Módulo raiz - importa todos os outros módulos |
| **app.controller.ts** | Controller raiz - endpoint de health check |
| **app.service.ts** | Service raiz - lógica de negócio básica |

#### 📂 src/prisma/

Módulo de integração com Prisma.

| Arquivo | Descrição |
|---------|-----------|
| **prisma.module.ts** | Módulo que exporta PrismaService |
| **prisma.service.ts** | Service que gerencia conexão com banco de dados |
| **prisma.service.spec.ts** | Testes unitários do PrismaService |

#### 📂 src/products/

Módulo de produtos - **PRINCIPAL FUNCIONALIDADE DO SISTEMA**.

| Arquivo | Descrição |
|---------|-----------|
| **products.module.ts** | Módulo de produtos - importa e exporta componentes |
| **products.controller.ts** | Define rotas da API (/products) |
| **products.service.ts** | Lógica de negócio para operações de produtos |
| **products.controller.spec.ts** | Testes do controller |
| **products.service.spec.ts** | Testes do service |

### 📂 test/

Testes end-to-end (E2E) da aplicação.

| Arquivo | Descrição |
|---------|-----------|
| **app.e2e-spec.ts** | Testes de integração completos |
| **jest-e2e.json** | Configuração do Jest para testes E2E |

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd backend-sushi-app

# 2. Instale as dependências
npm install

# 3. Configure o banco de dados
npx prisma generate
npx prisma migrate deploy

# 4. Popule o banco com dados iniciais
npm run prisma:seed

# 5. Inicie o servidor em modo desenvolvimento
npm run start:dev
```

A aplicação estará rodando em `http://localhost:3000`

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev       # Inicia servidor com hot-reload
npm run start:debug     # Inicia servidor em modo debug

# Build e Produção
npm run build           # Compila o projeto
npm run start:prod      # Inicia servidor de produção

# Banco de Dados
npm run prisma:seed     # Popula banco com dados iniciais

# Testes
npm run test            # Executa testes unitários
npm run test:watch      # Executa testes em modo watch
npm run test:cov        # Executa testes com cobertura
npm run test:e2e        # Executa testes end-to-end

# Qualidade de Código
npm run lint            # Verifica e corrige problemas de linting
npm run format          # Formata código com Prettier
```

## 🌐 API Endpoints

### GET /products
Retorna todos os produtos.

**Query Parameters:**
- `category` (opcional) - Filtra por categoria

```bash
# Todos os produtos
GET http://localhost:3000/products

# Produtos por categoria
GET http://localhost:3000/products?category=sushi
```

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "Sushi de Salmão",
    "description": "Salmão fresco sobre arroz temperado",
    "price": 12.90,
    "image": "https://...",
    "category": "sushi",
    "featured": true,
    "available": true,
    "createdAt": "2024-02-19T14:31:53.000Z",
    "updatedAt": "2024-02-19T14:31:53.000Z"
  }
]
```

### GET /products/featured
Retorna apenas produtos em destaque.

```bash
GET http://localhost:3000/products/featured
```

### GET /products/:id
Retorna um produto específico por ID.

```bash
GET http://localhost:3000/products/1
```

### POST /products
Cria um novo produto.

**Body:**
```json
{
  "name": "Temaki de Salmão",
  "description": "Temaki recheado com salmão e cream cheese",
  "price": 18.90,
  "image": "https://exemplo.com/imagem.jpg",
  "category": "temaki",
  "featured": false,
  "available": true
}
```

## ➕ Como Adicionar Novos Itens

### 1️⃣ Adicionar Novos Produtos ao Seed (Dados Iniciais)

Edite o arquivo [prisma/seed.ts](prisma/seed.ts):

```typescript
await prisma.product.createMany({
    data: [
        // ... produtos existentes ...
        {
            name: 'Temaki de Salmão',
            description: 'Cone de alga nori com salmão, arroz e cream cheese',
            price: 18.90,
            image: 'https://exemplo.com/temaki.jpg',
            category: 'temaki',
            featured: false,
            available: true,
        },
        // Adicione mais produtos aqui
    ],
});
```

Depois execute:
```bash
# Limpa banco e repopula
npx prisma migrate reset --force
npm run prisma:seed
```

### 2️⃣ Adicionar Novos Campos ao Model Product

1. Edite [prisma/schema.prisma](prisma/schema.prisma):

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  price       Float
  image       String?
  category    String
  featured    Boolean  @default(false)
  available   Boolean  @default(true)
  spicy       Boolean  @default(false)  // ✅ NOVO CAMPO
  vegetarian  Boolean  @default(false)  // ✅ NOVO CAMPO
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

2. Crie a migração:
```bash
npx prisma migrate dev --name add_spicy_vegetarian_fields
```

3. Atualize o Service [src/products/products.service.ts](src/products/products.service.ts):

```typescript
async create(data: {
    name: string;
    description: string;
    price: number;
    image?: string;
    category: string;
    featured?: boolean;
    available?: boolean;
    spicy?: boolean;        // ✅ NOVO
    vegetarian?: boolean;   // ✅ NOVO
}) {
    return this.prisma.product.create({ data });
}
```

4. Atualize o Controller [src/products/products.controller.ts](src/products/products.controller.ts):

```typescript
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
        spicy?: boolean;        // ✅ NOVO
        vegetarian?: boolean;   // ✅ NOVO
    }
) {
    return this.productsService.create(body);
}
```

### 3️⃣ Adicionar Novos Endpoints

Para adicionar um endpoint que filtra produtos vegetarianos:

1. Adicione método no Service [src/products/products.service.ts](src/products/products.service.ts):

```typescript
async findVegetarian() {
    return this.prisma.product.findMany({
        where: { vegetarian: true },
        orderBy: { name: 'asc' },
    });
}
```

2. Adicione rota no Controller [src/products/products.controller.ts](src/products/products.controller.ts):

```typescript
@Get('vegetarian')
findVegetarian() {
    return this.productsService.findVegetarian();
}
```

**⚠️ IMPORTANTE:** Coloque rotas específicas ANTES de rotas com parâmetros:

```typescript
@Get('featured')      // ✅ Antes
findFeatured() { }

@Get('vegetarian')    // ✅ Antes
findVegetarian() { }

@Get(':id')           // ✅ Depois
findOne() { }
```

### 4️⃣ Criar um Novo Módulo (ex: Orders - Pedidos)

```bash
# Gera módulo completo automaticamente
nest generate resource orders
```

Isso criará:
- `src/orders/orders.module.ts`
- `src/orders/orders.controller.ts`
- `src/orders/orders.service.ts`
- Arquivos de teste

Depois:
1. Adicione o model no [prisma/schema.prisma](prisma/schema.prisma)
2. Crie a migração
3. Implemente a lógica no service e controller

## 🗄 Banco de Dados

### Comandos Úteis do Prisma

```bash
# Gera o Prisma Client (necessário após alterar schema)
npx prisma generate

# Cria nova migração
npx prisma migrate dev --name nome_da_migracao

# Aplica migrações em produção
npx prisma migrate deploy

# Reseta banco (CUIDADO: apaga tudo)
npx prisma migrate reset

# Abre interface visual do banco
npx prisma studio
```

### Prisma Studio

Para visualizar e editar dados graficamente:

```bash
npx prisma studio
```

Abrirá em `http://localhost:5555` uma interface web para gerenciar o banco.

## 🔧 Configurações Importantes

### CORS

O CORS está habilitado em [src/main.ts](src/main.ts) para permitir requisições do frontend:

```typescript
app.enableCors();
```

### Porta do Servidor

Porta padrão: 3000 (configurável via variável de ambiente `PORT`)

```typescript
await app.listen(process.env.PORT ?? 3000);
```

### Banco de Dados

Por padrão usa SQLite (`file:./dev.db`). Para mudar para PostgreSQL ou MySQL, edite [prisma/schema.prisma](prisma/schema.prisma):

```prisma
datasource db {
  provider = "postgresql"  // ou "mysql"
  url      = env("DATABASE_URL")
}
```

E configure a variável `DATABASE_URL` no arquivo `.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sushi_db"
```

## 📚 Recursos Adicionais

- [Documentação NestJS](https://docs.nestjs.com/)
- [Documentação Prisma](https://www.prisma.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📝 Notas

- Sempre execute `npx prisma generate` após alterar o schema
- Use `npm run start:dev` para desenvolvimento (hot-reload automático)
- Mantenha os testes atualizados ao adicionar novas funcionalidades
- Siga os padrões de código (execute `npm run lint` e `npm run format`)

---

**Desenvolvido com ❤️ usando NestJS e Prisma**
