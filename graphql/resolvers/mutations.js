const createRecipe = require("./recipe/mutations/createRecipe");
const deleteRecipe = require("./recipe/mutations/deleteRecipe");
const editRecipe = require("./recipe/mutations/editRecipe");
const register = require("./user/mutations/register");
const login = require("./user/mutations/login");

module.exports = {
    ...createRecipe,
    ...deleteRecipe,
    ...editRecipe,
    ...register,
    ...login,
};