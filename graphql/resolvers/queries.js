const getRecipes = require('./recipe/queries/getAllRecipe');
const recipe = require('./recipe/queries/getRecipe');
const getUsers = require('./user/queries/getAllUsers');
const getUser = require('./user/queries/getUser');

module.exports = {
    ...getRecipes,
    ...recipe,
    ...getUsers,
    ...getUser,
};