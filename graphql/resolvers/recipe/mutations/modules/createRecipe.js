const Recipe = require("../../../../../models/Recipe");

const createRecipe = async (_, { recipeInput: { name, description } }) => {
    const newRecipe = new Recipe({
        name,
        description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
    });

    const recipe = await newRecipe.save();

    console.log("the recipe",recipe);

    return recipe;
};

module.exports = {
    createRecipe,
};