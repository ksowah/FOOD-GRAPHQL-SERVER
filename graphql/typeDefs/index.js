const { gql } = require('apollo-server');

module.exports = gql`
    type Recipe {
        id: ID!
        name: String!
        description: String!
        createdAt: String!
        thumbsUp: Int!
        thumbsDown: Int!
    }

    input RecipeInput {
        name: String!
        description: String!
    }

    type Query {
        getRecipes(quantity: Int): [Recipe]
        recipe(ID: ID!): Recipe
    }

    type Mutation {
        createRecipe(recipeInput: RecipeInput): Recipe!
        editRecipe(ID: ID!, recipeInput: RecipeInput): Recipe
        deleteRecipe(ID: ID!): Boolean
    }
`

