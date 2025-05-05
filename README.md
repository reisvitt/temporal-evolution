# Dashboard de Monitoramento de Envios

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-green.svg)]()

Um sistema completo para monitoramento e análise de envios de mensagens por canais (E-mail, WhatsApp e Push Notification). O frontend, construído com React, Tailwind CSS e Shadcn/UI, oferece uma interface responsiva para visualização de métricas. O backend, baseado em Node.js e PostgreSQL, fornece uma API otimizada para consultas em milhões de registros, com suporte a Docker para desenvolvimento.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Otimização de Consultas](#otimização-de-consultas)
- [Contribuição](#contribuição)
- [Autor](#autor)
- [Licença](#licença)

---

## 📊 Sobre o Projeto

Este projeto consiste em um dashboard para monitoramento de envios de mensagens, permitindo que equipes analisem métricas como taxas de entrega e aberturas. O frontend, disponível em [Dashboard Temporal Evolution](https://frontend-production-3c26.up.railway.app/), consome dados via API, enquanto o backend processa milhões de registros do arquivo `seed.sql` em um banco PostgreSQL.

**Objetivo**: Facilitar a tomada de decisão com base em KPIs de campanhas, com uma interface intuitiva e um backend otimizado para alto desempenho.

**Desafio Principal**: Garantir respostas rápidas às consultas no backend, mesmo com grande volume de dados, e oferecer uma experiência de usuário fluida no frontend.

![Dashboard Screenshot](/frontend/screenshots/dashboard.png "Visualização do dashboard de envios")

---

## ✨ Funcionalidades

### Frontend

- Visualização de envios por canal (E-mail, WhatsApp, Push Notification) em gráficos e tabelas.
- Interface responsiva e acessível com Tailwind CSS e Shadcn/UI.
- Requisições à API com Axios para dados.
- Validação de formulários e dados com Zod.
- Componentes interativos (ex.: filtros, navegação) baseados em Radix UI.

### Backend

- API RESTful para fornecer dados de envios.
- Integração com PostgreSQL, processando o arquivo `seed.sql`.
- Consultas otimizadas para alto desempenho.
- Endpoints para métricas de canais, períodos e engajamento.

---

## 🛠 Tecnologias Utilizadas

### Frontend

- React (com Vite)
- Tailwind CSS
- Shadcn/UI (baseado em Radix UI)
- Axios (requisições HTTP)
- Zod (validação de esquemas)
- Node.js (v20)
- npm (gerenciador de pacotes)

### Backend

- Node.js (v20)
- Express (framework API)
- PostgreSQL (banco de dados)
- Docker (containerização)
- Arquivo `seed.sql` (dados de envios)

---

## 📝 Pré-requisitos

- [Node.js](https://nodejs.org/) (v20)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (para desenvolvimento com backend)
- [PostgreSQL](https://www.postgresql.org/) (com suporte ao arquivo `seed.sql`)

---

## 🚀 Instalação

### Frontend

1. Clone o repositório:
   `git clone https://github.com/reisvitt/temporal-evolution.git`
   `cd temporal-evolution/frontend`

2. Instale as dependências:
   `npm install`

3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na pasta `frontend/`.
   - Adicione a URL da API (ex.: `VITE_API_URL=http://localhost:3000/api`).

4. Inicie o servidor de desenvolvimento:
   `npm run dev`

5. Acesse o dashboard em: `http://localhost:5173` (porta padrão do Vite).

### Backend (Sem Docker)

1. Navegue até a pasta do backend:
   `cd temporal-evolution/backend`

2. Instale as dependências:
   `npm install`

3. Configure o banco de dados:

   - Importe o arquivo `seed.sql` para o PostgreSQL:
     `psql -U usuario -d nome_do_banco < seed.sql`
   - Crie um arquivo `.env` na pasta `backend/` com as credenciais:
     ```
     DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
     ```

4. Inicie o servidor:
   `npm start`

5. A API estará disponível em: `http://localhost:3000` (ou a porta configurada).

### Backend (Com Docker - Desenvolvimento)

1. Certifique-se de que o Docker e o Docker Compose estão instalados.
2. Navegue até a raiz do repositório (onde está o `docker-compose.yml`):
   `cd temporal-evolution/backend`

3. Inicie os serviços (backend e PostgreSQL):
   `docker-compose up --build`

4. A API estará disponível em: `http://localhost:3000`.
5. O banco de dados PostgreSQL estará acessível em: `localhost:5432` (credenciais definidas no `docker-compose.yml`).

**Nota**: O `docker-compose.yml` é configurado para desenvolvimento e carrega automaticamente o `seed.sql` no PostgreSQL.

---

## 🖥 Uso

1. **Inicie o Backend**: Certifique-se de que o servidor backend está rodando (`http://localhost:3000`).
2. **Acesse o Dashboard**: Abra o navegador e vá para `http://localhost:5173`.
3. **Explore as Visualizações**:
   - Veja envios por canal em gráficos de barras ou tabelas.
   - Analise métricas de engajamento (ex.: aberturas).
4. **Interaja**: Use filtros para segmentar dados por período ou canal.
5. **Consulte a Documentação**: Clique no ícone "Sobre" no dashboard para detalhes sobre a interface e métricas.

---

## 📂 Estrutura do Projeto

### Frontend

- `frontend/public/` : Arquivos estáticos (ex.: favicon, assets)
- `frontend/src/` : Código-fonte do frontend
- `frontend/tailwind.config.js` : Configuração do Tailwind CSS
- `frontend/vite.config.js` : Configuração do Vite
- `frontend/package.json` : Dependências e scripts
- `frontend/.env` : Variáveis de ambiente (ex.: URL da API)

### Backend

- `backend/src/` : Código-fonte do backend
  - `routes/` : Rotas da API
  - `controllers/` : Lógica de negócio
  - `models/` : Modelos do banco de dados
- `backend/scripts/seed.sql` : Arquivo modelo dos dados
- `backend/package.json` : Dependências e scripts
- `backend/Dockerfile` : Configuração para containerização do backend
- `docker-compose.yml` : Configuração para desenvolvimento (backend e PostgreSQL)
- `backend/.env` : Variáveis de ambiente (ex.: conexão com PostgreSQL)

### Raiz

- `README.md` : Documentação do projeto
- `LICENSE` : Licença MIT

---

## ⚡ Otimização de Consultas

Para lidar com milhões de registros no arquivo `seed.sql`, o backend implementa as seguintes otimizações no PostgreSQL:

- **Particionamento**: Tabelas particionadas por ano com base na coluna `created_at`, reduzindo o tamanho dos dados escaneados por consulta.
- **Indexação**: Índices criados nas colunas mais consultadas (ex.: `created_at`, `origin` e `response_status_id`) para acelerar buscas.

**Possíveis Melhorias**:

- Uso de consultas agregadas para reduzir o volume de dados processados.
- Implementação de cache para resultados de consultas frequentes.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   `git checkout -b minha-feature`
3. Commit suas alterações:
   `git commit -m "Adiciona minha feature"`
4. Envie para o repositório remoto:
   `git push origin minha-feature`
5. Abra um Pull Request.

---

## 👤 Autor

**Vitor Reis**

- GitHub: [github.com/reisvitt](https://github.com/reisvitt)
- E-mail: [reis.vitt@gmail.com](mailto:reis.vitt@gmail.com)

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
