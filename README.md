# 🛍️ Projeto de Simulação de Vendas para Loja de TI

**Unidade Curricular**: Sistemas Distribuídos e Mobile
**Professor**: Adailton de Jesus
**Período**: 2025.1

## 🚀 Introdução

Este projeto consiste em uma aplicação que simula o gerenciamento de vendas de uma **loja de TI**, especializada na comercialização de produtos de tecnologia como periféricos, acessórios, componentes e dispositivos eletrônicos.

O sistema é composto por duas APIs:

- Uma **API principal**, responsável pelo gerenciamento de **clientes, vendedores, produtos e vendas**;
- Uma **API secundária**, dedicada à **geração de relatórios estatísticos**.

As duas aplicações foram desenvolvidas em **JavaScript**, são executadas em contêineres **Docker** e utilizam como base um **banco de dados MySQL**.

## 🧪 Tecnologias Utilizadas

- **Linguagem de Programação**: JavaScript
- **Ambiente de Execução**: Node.js
- **Framework para API**: Express.js
- **Banco de Dados**: MySQL (Relacional)
- **Containerização**: Docker e Docker Compose
- **Driver MySQL para Node.js**: mysql2
- **Validação de Dados**: Joi
- **Gerenciamento de Variáveis de Ambiente**: dotenv

## 🏗️ Arquitetura

O projeto usa o modelo de **microsserviços**, com duas aplicações diferentes que compartilham um banco de dados. Esse modelo favorece a **escalabilidade, modularidade** e manutenção das funcionalidades de maneira independente.

- **`api-main` (API Principal)**

  - **Porta**: `3000`
  - **Responsabilidade**: Realiza as operações de CRUD para clientes, vendedores, produtos e vendas. Gerencia o estado do estoque e o registro de transações.

- **`api-report` (API de Relatórios)**

  - **Porta**: `3001`
  - **Responsabilidade**: Fornece relatórios estatísticos baseados nos dados gerados pela API principal.

- **`db` (Banco de Dados)**

  - **Porta**: `3309`
  - **Responsabilidade**: Armazena todos os dados da aplicação de forma relacional. É inicializado com um script (`init.sql`) que cria as tabelas e popula os dados iniciais.

- **`sales-network` (Rede Docker)**

  - **Driver**: `bridge`
  - **Responsabilidade**: Cria uma rede virtual isolada para que os contêineres possam se comunicar usando os nomes dos serviços.

## 🧰 Requisitos para Execução

- 🐳 Docker e Docker Compose

## 🚀 Como Rodar a Aplicação

1.  Clone o repositório e navegue até a pasta do código-fonte:

    ```bash
    git clone https://github.com/milenaoliveira07/EntregaA3.git
    cd EntregaA3/source_code
    ```

2.  Inicie os contêineres em modo detached (segundo plano):

    ```bash
    docker-compose up -d
    ```

    ✅ **O que este comando faz?**

    - Baixa a imagem do `mysql:8.4`.
    - Constrói as imagens de `api-main` e `api-report` a partir dos Dockerfiles.
    - Inicia os três serviços (`api-main`, `api-report`, `db`).
    - Cria e popula o banco de dados `salesdb` utilizando o script `init.sql`.

3.  Verifique os serviços disponíveis:

    - 🌐 **API Principal**: `http://localhost:3000`
    - 📊 **API de Relatórios**: `http://localhost:3001`
    - 🗄️ **Banco de Dados**: `localhost:3309` (para acesso externo)

## 📡 Endpoints da Aplicação

### 🔧 API Principal (`Para acessar use a porta 3000 com o endpoint /api/{recurso}`)

#### 👥 Clientes

- `GET /clients` – Lista todos os clientes
- `GET /clients/:id` – Busca cliente por ID
- `POST /clients` – Cria novo cliente
- `PUT /clients/:id` – Atualiza cliente
- `DELETE /clients/:id` – Remove cliente

#### 🧑‍💼 Vendedores

- `GET /sellers` – Lista todos os vendedores
- `GET /sellers/:id` – Busca vendedor por ID
- `POST /sellers` – Cria novo vendedor
- `PUT /sellers/:id` – Atualiza vendedor
- `DELETE /sellers/:id` – Remove vendedor

#### 📦 Produtos

- `GET /products` – Lista todos os produtos
- `GET /products/:id` – Busca produto por ID
- `POST /products` – Cria novo produto
- `PUT /products/:id` – Atualiza produto
- `DELETE /products/:id` – Remove produto

#### 💰 Vendas

- `GET /sales` – Lista todas as vendas
- `GET /sales/:id` – Busca venda por ID
- `POST /sales` – Registra nova venda
- `PUT /sales/:id` – Atualiza o status de uma venda
- `PATCH /sales/:id/cancel` – Cancela uma venda e restaura o estoque
- `DELETE /sales/:id` – Remove uma venda

---

### 📈 API de Relatórios (`Para acessar use a porta 3001 com o endpoint /api/{recurso}`)

- `GET /reports/top-selling-products` – Lista os produtos mais vendidos.
- `GET /reports/products-by-client/:id` – Lista os produtos comprados por um cliente específico.
- `GET /reports/average-consumption-by-client` – Mostra o valor médio de compra por cliente.
- `GET /reports/low-stock-products` – Lista os produtos com estoque baixo ou igual ao limite definido.

## 👨‍💻 Equipe

- **Milena Oliveira** – Gerenciamento de Produtos ([GitHub](https://github.com/milenaoliveira07))
- **Gustavo Matheus** – Gerenciamento de Vendedores ([GitHub](https://github.com/gustanitro))
- **Hudson Castro** – Gerenciamento de Clientes ([GitHub](https://github.com/Hudson-castro))
- **Aquila Vieira** – Gerenciamento de Vendas ([GitHub](https://github.com/Aquila5564))
