

# Projeto Full-Stack 2025: CRUD Moderno com Node, GraphQL e Vue 3


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-lightgrey)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.37.7-blue)](https://sequelize.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-8.16.3-blue)](https://www.postgresql.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-pink)](https://graphql.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo_Server-5.0.0-purple)](https://www.apollographql.com/docs/apollo-server/)
[![Nodemon](https://img.shields.io/badge/Nodemon-3.1.10-green)](https://nodemon.io/)
 
 


![Tabela Book](https://i.ibb.co/SXkQ7mtR/Screenshot-1.png) 
![Tabela Book](https://i.ibb.co/bgc3NbHZ/Screenshot-2.png) 


##  Tecnologias Utilizadas

### **Backend**
- **Node.js + Express**  
  API robusta e escalável com arquitetura modular.

- **PostgreSQL + Sequelize**  
  Banco de dados relacional com ORM para modelos e migrations.

- **GraphQL (Apollo Server)**  
  Queries e mutations otimizadas, substituindo arquitetura REST tradicional.

### **Frontend**
- **Vue 3 (Composition API)**  
  Interface moderna com reatividade granular e componentes reutilizáveis.

- **Apollo Client**  
  Gerenciamento inteligente de dados com cache integrado.

---

##  Features Principais
- CRUD completo com validações
- Autenticação JWT segura
- Tipagem TypeScript (opcional)
- Dockerização para deploy fácil

##  Como Executar
```bash
# Backend
npm install
npm run dev

# Frontend (diretório separado)
cd frontend
npm install
npm run serve
```
## Exemplo de consultas


```bash
#  Query para listar todos os livros
query {
  books {
    id
    title
    author
    publishedYear
  }
}

#  Query para buscar 1 livro por ID
query {
  book(id: 1) {
    id
    title
    author
    publishedYear
  }
}

#Mutation para criar um livro

mutation {
  createBook(
    title: "Dom Casmurro"
    author: "Machado de Assis"
    publishedYear: 1899
  ) {
    id
    title
  }
}
#Mutation para atualizar um livro
mutation {
  updateBook(
    id: 1
    title: "Dom Casmurro (Atualizado)"
    author: "Machado de Assis"
  ) {
    id
    title
    author
  }
}

#Mutation para deletar um livro
mutation {
  deleteBook(id: 1)
}

```

![Tabela Book](https://i.ibb.co/jdHypzd/Screenshot-3.png) 
![Tabela Book](https://i.ibb.co/Mk87vhbC/Screenshot-4.png) 