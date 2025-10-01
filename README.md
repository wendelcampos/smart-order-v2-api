# 🍽️ Restaurante Pedrão - API Backend

> **API de Gerenciamento de Pedidos** - Projeto Integrador 2 - UNIVESP

## 📋 Sobre o Projeto

Esta é uma API REST desenvolvida para o **Projeto Integrador 2** da **Universidade Virtual do Estado de São Paulo (UNIVESP)**. O projeto representa a **reestruturação, refatoração e evolução** do sistema **Smart Order**, agora focado no gerenciamento completo de pedidos para o Restaurante Pedrão.

### 🎯 Objetivos Acadêmicos
- Implementar conceitos avançados de desenvolvimento de software
- Aplicar boas práticas de arquitetura e padrões de projeto
- Desenvolver uma solução completa para gestão de restaurantes
- Integrar conhecimentos de banco de dados, autenticação e APIs REST

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem tipada
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação e autorização
- **bcrypt** - Criptografia de senhas
- **Zod** - Validação de dados
- **Docker** - Containerização

## 📁 Estrutura do Projeto

```
src/
├── configs/           # Configurações da aplicação
├── controllers/       # Controladores das rotas
├── database/          # Configuração do banco de dados
├── env/              # Variáveis de ambiente
├── interfaces/       # DTOs e interfaces
├── logic/            # Lógica de negócio
├── middlewares/      # Middlewares customizados
├── repositories/     # Camada de acesso a dados
├── routes/           # Definição das rotas
├── types/            # Tipagens TypeScript
└── utils/            # Utilitários e helpers
```

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** com separação clara de responsabilidades:

- **Controllers**: Responsáveis por receber requisições HTTP
- **Logic**: Contém a lógica de negócio da aplicação
- **Repositories**: Interface entre lógica e banco de dados
- **Middlewares**: Interceptadores para autenticação e tratamento de erros

## 📊 Modelos de Dados

### Principais Entidades:
- **Users** - Usuários do sistema (Admin/User)
- **Customers** - Clientes do restaurante
- **Products** - Produtos/cardápio
- **Orders** - Pedidos realizados
- **Tables** - Mesas do restaurante
- **Waiters** - Garçons
- **Payments** - Pagamentos
- **SatisfactionSurvey** - Pesquisa de satisfação

### Categorias de Produtos:
- 🍺 Bebidas
- 🍽️ Pratos
- 📅 Pratos do Dia

### Status de Pedidos:
- 🔓 Aberto
- 🔒 Fechado

## 🔧 Instalação e Configuração

### Pré-requisitos
- Node.js (v18 ou superior)
- PostgreSQL
- Docker (opcional)

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd api-backend-sistema
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/restaurante_pedrao"
JWT_SECRET="seu_jwt_secret_aqui"
```

### 4. Configure o banco de dados
```bash
# Execute as migrações
npx prisma migrate dev

# Gere o cliente Prisma
npx prisma generate
```

### 5. Execute a aplicação
```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

## 🐳 Docker

Para executar com Docker:

```bash
docker-compose up -d
```

## 📚 Endpoints da API

### Autenticação
- `POST /sessions` - Login de usuário

### Usuários
- `POST /users` - Criar usuário
- `GET /users` - Listar usuários
- `GET /users/:id` - Buscar usuário por ID

### Produtos
- `POST /products` - Criar produto
- `GET /products` - Listar produtos
- `GET /products/:id` - Buscar produto por ID
- `PUT /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### Clientes
- `POST /customers` - Criar cliente
- `GET /customers` - Listar clientes
- `GET /customers/:id` - Buscar cliente por ID
- `PUT /customers/:id` - Atualizar cliente
- `DELETE /customers/:id` - Deletar cliente

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação. Inclua o token no header:

```
Authorization: Bearer <seu_token_jwt>
```

## 🛡️ Middlewares

- **ensure-authenticated**: Verifica se o usuário está autenticado
- **verify-user-authorization**: Verifica permissões do usuário
- **error-handling**: Tratamento global de erros

## 📝 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Compila para produção
npm start           # Executa versão compilada
npm run test:dev    # Executa testes em modo watch
```

## 🎓 Contexto Acadêmico

Este projeto é desenvolvido como parte do **Projeto Integrador 2** da **UNIVESP**, visando:

- Aplicação prática dos conceitos aprendidos
- Desenvolvimento de competências técnicas
- Implementação de boas práticas de desenvolvimento
- Evolução do projeto Smart Order com novas funcionalidades

## 👨‍💻 Desenvolvedores

**Wendel Campos Aguiar**

- Estudante UNIVESP - Projeto Integrador 2

## 📄 Licença

Este projeto está sob a licença ISC.

---

> **⚠️ Nota**: Este é um projeto em desenvolvimento para fins acadêmicos. Algumas funcionalidades podem estar em implementação ou sujeitas a mudanças durante o período de desenvolvimento.
