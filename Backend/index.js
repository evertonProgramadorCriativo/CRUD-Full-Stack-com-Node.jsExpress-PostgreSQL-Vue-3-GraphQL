require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { sequelize } = require('./models');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/bookResolver');
const cors = require('cors');

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, async () => {
    await sequelize.authenticate();
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();