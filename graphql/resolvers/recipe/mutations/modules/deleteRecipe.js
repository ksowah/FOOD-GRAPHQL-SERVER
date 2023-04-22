const Recipe = require('../../../../../models/Recipe');

const deleteRecipe = async (_, { ID }) => {
    try {
        const recipe = await Recipe.findById(ID);
        if (recipe) {
            await recipe.deleteOne();
            return true;
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
    deleteRecipe,
};