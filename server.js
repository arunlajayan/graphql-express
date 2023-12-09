const express = require("express");
const path = require('path');
// const { buildSchema } = require("graphql");
// const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ApolloServer } = require('apollo-server-express');
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolver.js'))
const schemaText = `
type Query{
    Products:[Product]
    Orders: [Order]
}
`
async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers:resolversArray
  })
  
  const server = new ApolloServer({
    schema: schema,
    
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' })
  
  
  
app.listen(3000, () => {
  console.log("graphql is running");
});
}

startApolloServer();


// const schema = buildSchema(`


// `);
// const root = {
//   Products: require('./Products/products.model'),
//   Orders: require('./Orders/orders.model')
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//   })
// );

