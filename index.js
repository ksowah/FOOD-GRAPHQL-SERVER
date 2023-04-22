const { ApolloServer } = require('apollo-server');
require('dotenv').config();

const MongoDB = require('./config/db');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

MongoDB();

server.listen({ port: process.env.PORT || 5000 }).then((res) => {
    console.log(`Server running at ${res.url}`);
});