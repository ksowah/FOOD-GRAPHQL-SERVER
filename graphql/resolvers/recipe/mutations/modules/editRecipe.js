const Recipe = require("../../../../../models/Recipe");

const editRecipe = async (_, { ID, recipeInput: { name, description } }) => {
    try {
        const recipe = await Recipe.findById(ID);
        if (recipe) {
            recipe.name = name;
            recipe.description = description;
            await recipe.save();
            return recipe;
        }
        else {
            throw new Error('Recipe not found');
        }
    }
    catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    editRecipe,
};

