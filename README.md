# 🍽️ Smart Order - API Backend

> **API de Gerenciamento de Pedidos** - Projeto Integrador 2 - UNIVESP

## 📋 Sobre o Projeto

Esta é uma API REST desenvolvida para o **Projeto Integrador 2** da **Universidade Virtual do Estado de São Paulo (UNIVESP)**. O projeto representa a **reestruturação, refatoração e evolução** do sistema **Smart Order**, agora focado no gerenciamento completo de pedidos para Restaurantes.

### 🎯 Objetivos Acadêmicos
- Implementar conceitos avançados de desenvolvimento de software
- Aplicar boas práticas de arquitetura e padrões de projeto
- Desenvolver uma solução completa para gestão de restaurantes
- Integrar conhecimentos de banco de dados, autenticação e APIs REST

## 🚀 Tecnologias Utilizadas

### 🏗️ Backend Core
- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem tipada com tipagem estática
- **Express.js** - Framework web robusto e flexível
- **tsx** - Execução TypeScript em desenvolvimento

### 🗄️ Banco de Dados
- **PostgreSQL** - Banco de dados relacional
- **Prisma** - ORM moderno com type-safety
- **Prisma Client** - Cliente gerado automaticamente

### 🔐 Segurança e Autenticação
- **JWT** - Autenticação stateless
- **bcrypt** - Criptografia segura de senhas
- **CORS** - Controle de acesso cross-origin

### ✅ Validação e Qualidade
- **Zod** - Validação de schemas e tipos
- **express-async-errors** - Tratamento de erros assíncronos

### 🐳 Containerização
- **Docker** - Containerização da aplicação
- **Docker Compose** - Orquestração de serviços

### 🛠️ Ferramentas de Desenvolvimento
- **tsup** - Build tool otimizado
- **ts-node** - Execução TypeScript
- **Jest** - Framework de testes

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

### 🏗️ Principais Entidades:

#### 👥 **Users** - Usuários do Sistema
- Gerenciamento de usuários com diferentes níveis de acesso
- Suporte a roles: `admin` e `user`
- Autenticação via JWT

#### 👤 **Customers** - Clientes do Restaurante
- Cadastro completo de clientes
- Dados: nome, CPF, telefone, email
- Histórico de pedidos vinculado

#### 🍽️ **Products** - Cardápio
- Catálogo completo de produtos
- Categorização por tipo de produto
- Controle de preços e descrições

#### 📋 **Orders** - Pedidos
- Gestão completa do fluxo de pedidos
- Vinculação com cliente, garçom e mesa
- Controle de status (aberto/fechado)

#### 🛒 **OrderItems** - Itens dos Pedidos
- Detalhamento dos produtos em cada pedido
- Controle de quantidades
- Relacionamento com produtos e pedidos

#### 🍽️ **Tables** - Mesas
- Gerenciamento de mesas do restaurante
- Controle de disponibilidade
- Numeração única para identificação

#### 🧑‍🍳 **Waiters** - Garçons
- Cadastro de funcionários garçons
- Controle de data de contratação
- Vinculação com pedidos atendidos

#### 💳 **Payments** - Pagamentos
- Registro de pagamentos dos pedidos
- Múltiplos métodos de pagamento
- Controle de valores e datas

#### 📊 **SatisfactionSurvey** - Pesquisa de Satisfação
- Avaliação da experiência do cliente
- Escala de satisfação de 1 a 5
- Vinculação com pedidos finalizados

### 🏷️ Categorias de Produtos:
- 🍺 **Bebidas** - Refrigerantes, sucos, cervejas, etc.
- 🍽️ **Pratos** - Pratos principais do cardápio
- 📅 **Pratos do Dia** - Especialidades diárias

### 📊 Status e Enums:

#### Status de Pedidos:
- 🔓 **Open** - Pedido em andamento
- 🔒 **Closed** - Pedido finalizado

#### Status de Mesas:
- 🔓 **Open** - Mesa disponível
- 🔒 **Closed** - Mesa ocupada

#### Métodos de Pagamento:
- 💵 **Cash** - Dinheiro
- 💳 **Credit Card** - Cartão de crédito
- 💳 **Debit Card** - Cartão de débito
- 📱 **PIX** - Pagamento instantâneo

#### Níveis de Satisfação:
- 😞 **Péssimo** - Nota 1
- 😕 **Ruim** - Nota 2
- 😐 **Regular** - Nota 3
- 😊 **Bom** - Nota 4
- 😍 **Ótimo** - Nota 5

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

### 🔐 Autenticação
- `POST /sessions` - Login de usuário

### 👥 Usuários
- `POST /users` - Criar usuário
- `GET /users` - Listar usuários
- `GET /users/:id` - Buscar usuário por ID

### 🍽️ Produtos
- `POST /products` - Criar produto
- `GET /products` - Listar produtos
- `GET /products/:id` - Buscar produto por ID
- `PUT /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### 👤 Clientes
- `POST /customers` - Criar cliente
- `GET /customers` - Listar clientes
- `GET /customers/:id` - Buscar cliente por ID
- `PUT /customers/:id` - Atualizar cliente
- `DELETE /customers/:id` - Deletar cliente

### 🍽️ Mesas
- `POST /tables` - Criar mesa
- `GET /tables` - Listar mesas
- `PUT /tables/:id` - Atualizar status da mesa
- `DELETE /tables/:id` - Deletar mesa

### 🧑‍🍳 Garçons
- `POST /waiters` - Cadastrar garçom
- `GET /waiters` - Listar garçons
- `PUT /waiters/:id` - Atualizar dados do garçom
- `DELETE /waiters/:id` - Deletar garçom

### 📋 Pedidos
- `POST /orders` - Criar pedido
- `GET /orders` - Listar pedidos
- `GET /orders/:id` - Buscar pedido por ID
- `DELETE /orders/:id` - Cancelar pedido

### 🛒 Itens do Pedido
- `POST /ordersItens` - Adicionar item ao pedido
- `GET /ordersItens` - Listar itens de pedidos
- `GET /ordersItens/order/:orderId/products` - **Buscar produtos de um pedido específico**
- `GET /ordersItens/:id` - Buscar item por ID
- `DELETE /ordersItens/:id` - Remover item do pedido

## 💳 Funcionalidades Avançadas

### 🏦 Sistema de Pagamentos
O sistema inclui um módulo completo de pagamentos com suporte a múltiplos métodos:

- **Registro Automático**: Pagamentos são vinculados automaticamente aos pedidos
- **Múltiplos Métodos**: Dinheiro, cartão de crédito, débito e PIX
- **Controle de Valores**: Cálculo automático de totais com formatação decimal
- **Histórico Completo**: Rastreamento de todas as transações
- **Resumo Detalhado**: Retorna produtos, quantidades, subtotais e total geral
- **Validação de Satisfação**: Requer pesquisa de satisfação para finalizar pagamento

### 📊 Pesquisa de Satisfação
Sistema integrado de avaliação da experiência do cliente:

- **Avaliação Pós-Pedido**: Pesquisa automática após finalização
- **Escala de 1 a 5**: Sistema intuitivo de notas
- **Relatórios**: Análise de satisfação para melhorias
- **Histórico**: Acompanhamento da evolução da satisfação

### 🔄 Fluxo Completo do Pedido
1. **Criação**: Cliente, garçom e mesa são vinculados
2. **Adição de Itens**: Produtos são adicionados com quantidades
3. **Acompanhamento**: Status em tempo real do pedido
4. **Finalização**: Pagamento e pesquisa de satisfação
5. **Relatórios**: Análise completa da experiência

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação. Inclua o token no header:

```
Authorization: Bearer <seu_token_jwt>
```

### 🔒 Controle de Acesso
- **Admin**: Acesso total ao sistema
- **User**: Acesso limitado às funcionalidades operacionais
- **Middleware de Autorização**: Verificação automática de permissões

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

## 🚀 Exemplos de Uso

### 🔐 Autenticação
```bash
# Login de usuário
curl -X POST http://localhost:3333/sessions \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@restaurante.com", "password": "123456"}'
```

### 📋 Criar Pedido
```bash
# Criar novo pedido
curl -X POST http://localhost:3333/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "tableNumber": "5",
    "cpf": "12345678901",
    "waiterName": "João Silva"
  }'
```

### 🛒 Adicionar Item ao Pedido
```bash
# Adicionar produto ao pedido
curl -X POST http://localhost:3333/ordersItens \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "orderId": "uuid-do-pedido",
    "productId": "uuid-do-produto",
    "quantity": 2
  }'
```

### 🛍️ Buscar Produtos de um Pedido
```bash
# Buscar todos os produtos de um pedido específico
curl -X GET http://localhost:3333/ordersItens/order/uuid-do-pedido/products \
  -H "Authorization: Bearer <token>"
```

**Resposta esperada:**
```json
[
  {
    "id": "item-uuid-1",
    "orderId": "uuid-do-pedido",
    "productId": "product-uuid-1",
    "quantity": 2,
    "product": {
      "id": "product-uuid-1",
      "name": "Hambúrguer Clássico",
      "price": 25.90,
      "description": "Hambúrguer com carne, queijo, alface e tomate"
    }
  }
]
```

### 💰 Resumo de Pagamento
```bash
# Obter resumo detalhado do pedido para pagamento
curl -X GET http://localhost:3333/payments/order/uuid-do-pedido \
  -H "Authorization: Bearer <token>"
```

**Resposta esperada:**
```json
{
  "orderId": "uuid-do-pedido",
  "total": 66.69,
  "totalItems": 3,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "items": [
    {
      "productId": "product-uuid-1",
      "productName": "Hambúrguer Clássico",
      "price": 25.90,
      "quantity": 2,
      "subtotal": 51.80
    },
    {
      "productId": "product-uuid-2",
      "productName": "Batata Frita",
      "price": 14.89,
      "quantity": 1,
      "subtotal": 14.89
    }
  ]
}
```

### 🍽️ Gerenciar Mesa
```bash
# Atualizar status da mesa
curl -X PUT http://localhost:3333/tables/uuid-da-mesa \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"status": "closed"}'
```

## 🎓 Contexto Acadêmico

Este projeto é desenvolvido como parte do **Projeto Integrador 2** da **UNIVESP**, visando:

- Aplicação prática dos conceitos aprendidos
- Desenvolvimento de competências técnicas
- Implementação de boas práticas de desenvolvimento
- Evolução do projeto Smart Order com novas funcionalidades

### 🆕 Novas Funcionalidades Implementadas

#### 🏗️ **Arquitetura Robusta**
- Implementação de Clean Architecture
- Separação clara de responsabilidades
- Padrões Repository e Service Layer
- Middlewares customizados para autenticação e autorização

#### 📊 **Gestão Completa de Pedidos**
- Sistema completo de pedidos com itens
- Controle de status em tempo real
- Vinculação automática com clientes, garçons e mesas
- Histórico completo de transações
- **Nova**: Busca de produtos por pedido específico (`GET /ordersItens/order/:orderId/products`)

#### 💳 **Sistema de Pagamentos Avançado**
- Múltiplos métodos de pagamento
- Integração com pedidos
- Controle de valores e datas
- Relatórios financeiros
- **Nova**: Resumo detalhado de pagamento com produtos e subtotais
- **Nova**: Cálculo automático com formatação decimal (ex: 66.69)
- **Nova**: Contagem total de itens no pedido
- **Nova**: Validação obrigatória de pesquisa de satisfação

#### 📈 **Pesquisa de Satisfação**
- Avaliação automática pós-pedido
- Escala de satisfação intuitiva
- Relatórios de qualidade
- Análise de tendências
- **Integração**: Obrigatória para finalizar pagamentos

#### 🔐 **Segurança Avançada**
- Autenticação JWT
- Controle de acesso por roles
- Criptografia de senhas
- Middlewares de segurança

#### 🗄️ **Banco de Dados Otimizado**
- Schema Prisma bem estruturado
- Relacionamentos complexos
- Migrações versionadas
- Type-safety completo
- **Nova**: Tipos personalizados para resolver problemas de tipagem (Decimal vs Number)

## 👨‍💻 Desenvolvedores

**Wendel Campos Aguiar**

- Estudante UNIVESP - Projeto Integrador 2

## 📄 Licença

Este projeto está sob a licença ISC.

---

> **⚠️ Nota**: Este é um projeto em desenvolvimento para fins acadêmicos. Algumas funcionalidades podem estar em implementação ou sujeitas a mudanças durante o período de desenvolvimento.
