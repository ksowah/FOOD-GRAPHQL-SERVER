const Recipe = require("../../../../../models/Recipe");

async function recipe(_, { ID }) {
    try {
      const recipe = await Recipe.findById(ID);
      if (recipe) {
        return recipe;
      } else {
        throw new Error('Recipe not found');
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  module.exports = {
    recipe,
};