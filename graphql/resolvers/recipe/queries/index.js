const getRecipes = require('./modules/getAllRecipe');
const recipe = require('./modules/getRecipe');

module.exports = {
    ...getRecipes,
    ...recipe,
};