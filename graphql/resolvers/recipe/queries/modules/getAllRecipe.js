const Recipe = require("../../../../../models/Recipe");

async function getRecipes(_, { quantity }) {
  try {
    // return most recent recipes
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    return recipes.slice(0, quantity);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getRecipes,
};
