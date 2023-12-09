const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const { makeExecutableSchema } = require('@graphql-tools/schema')

const app = express();

const schema = buildSchema(`

type Query{
    Products:[Product]
    Orders: [Order]
}
type Product{
    id:ID
    description: String,
    reviews:[Review]
    price: Float
}

type Review{
    rating: Int
    comment: String
}

type Order{
    date: String
    subtotal:Float
    items: [OrderItem]
}

type OrderItem{
    product: Product
    quantity: Int
}
`);
const root = {
  Products: [
    {
      id: "red shoe",
      description: " shoe",
      price: 12.2,
    },
    {
      id: "red shirt",
      description: " dress",
      price: 10.2,
    },
  ],
  Orders: [
    {
      date: "2001-02-20",
      subtotal: 40.2,
      items: [
        {
          product: {
            id: "red shirt",
            description: " dress",
            price: 10.2,
          },
          quantity: 2,
          
        },
      ],
    },
  ],
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("port is running");
});
