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

    type User {
        id: ID!
        username: String!
        email: String!
        token: String!
        password: String!
    }

   type ClientUser {
        id: ID!
        username: String!
        email: String!
   }

    input RecipeInput {
        name: String!
        description: String!
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!
    }

    input LoginInput {
        username: String!
        password: String!
    }

    type Query {
        getRecipes(quantity: Int): [Recipe]
        recipe(ID: ID!): Recipe
        getUser(ID: ID!): User
        getUsers: [ClientUser]
    }

    type Mutation {
        createRecipe(recipeInput: RecipeInput): Recipe!
        editRecipe(ID: ID!, recipeInput: RecipeInput): Recipe
        deleteRecipe(ID: ID!): Boolean
        register(registerInput: RegisterInput): User!
        login(loginInput: LoginInput): User!
    }
`

