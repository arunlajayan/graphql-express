const express = require("express");
const path = require('path');
// const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolver.js'))
const schemaText = `
type Query{
    Products:[Product]
    Orders: [Order]
}
`

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers:resolversArray
})
const app = express();

// const schema = buildSchema(`


// `);
const root = {
  Products: require('./Products/products.model'),
  Orders: require('./Orders/orders.model')
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("port is running");
});
