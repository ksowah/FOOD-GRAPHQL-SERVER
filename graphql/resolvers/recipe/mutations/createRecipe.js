const Authenticate = require("../../../../middleware/auth");
const Recipe = require("../../../../models/Recipe");

const createRecipe = async (_, { recipeInput: { name, description } }, context) => {

    // use the Authenticate middleware to check if the user is logged in
    Authenticate(context);

    const newRecipe = new Recipe({
        name,
        description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
    });

    const recipe = await newRecipe.save();

    // console.log("the recipe",recipe);

    return recipe;
};

module.exports = {
    createRecipe,
};