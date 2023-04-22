const createRecipe = require("./modules/createRecipe");
const deleteRecipe = require("./modules/deleteRecipe");
const editRecipe = require("./modules/editRecipe");

module.exports = {
    ...createRecipe,
    ...deleteRecipe,
    ...editRecipe,
};