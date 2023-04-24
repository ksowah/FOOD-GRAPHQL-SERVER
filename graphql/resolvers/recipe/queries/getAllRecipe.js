const Authenticate = require("../../../../middleware/auth");
const Recipe = require("../../../../models/Recipe");

async function getRecipes(_, { quantity }, context) {
  // use the Authenticate middleware to check if the user is logged in
  Authenticate(context);

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
