const queryResolvers = require('./recipe/queries');
const mutationResolvers = require('./recipe/mutations');

module.exports = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
}