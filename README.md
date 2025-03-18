# API de Processamento de Arquivos CNAB ✨
Esta API foi desenvolvida para processar arquivos CNAB, normalizar os dados e armazená-los em um banco de dados PostgreSQL. Ela também fornece endpoints para listar as transações por loja e calcular o saldo total.

# Tecnologias Utilizadas

NestJS: Framework para construção de aplicações Node.js.

Prisma: ORM para gerenciamento do banco de dados.

PostgreSQL: Banco de dados relacional.

Docker: Para containerização da aplicação e do banco de dados.

Insomnia: Para testar os endpoints da API.


# Funcionalidades

1 -Upload de Arquivo CNAB:

Endpoint: POST /cnab/upload

Aceita um arquivo CNAB no formato .txt.

Processa o arquivo e salva as transações no banco de dados.

2 - Listar Transações por Loja:

Endpoint: GET /stores

Retorna uma lista de transações agrupadas por loja, com o saldo total.

# Pré-requisitos

Antes de começar, certifique-se de ter instalado:

Node.js (v16 ou superior)

Docker (opcional, mas recomendado)

PostgreSQL (se não usar Docker)

Git (para clonar o repositório)

# Passo a Passo para Configuração
1. Clone o Repositório

git clone https://github.com/seu-usuario/desafio-dev-fullstack.git
cd desafio-dev-fullstack

2 - Instale as Dependências
npm install

3 - Configure o Banco de Dados
Usando Docker 
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
DATABASE_URL="postgresql://user:password@localhost:5432/cnab?schema=public"

Suba o banco de dados com Docker Compose:
docker-compose up -d

Execute as migrações do Prisma:
npx prisma migrate dev --name init

4. Execute a Aplicação

npm run start:dev

5. Teste a API

Upload de Arquivo CNAB

Use o Insomnia ou Postman para enviar uma requisição POST para http://localhost:3000/cnab/upload.

No corpo da requisição, selecione Multipart Form e adicione um campo file com o arquivo CNAB.

Listar Transações por Loja
Envie uma requisição GET para http://localhost:3000/stores.

A resposta será uma lista de transações agrupadas por loja, com o saldo total.