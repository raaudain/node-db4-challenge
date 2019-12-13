const db = require("../data/db-config");

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList
}

function getRecipes(){
    return db("recipes")
}

function getShoppingList(recipe_id){
    return db("recipes as rec")
        .select("ing.quantity", "ing.unit_of_measure", "ing.ingredient")
        .join("Ingredients as ing", "rec.id", "ing.recipe_id")
        .where({id})
}

function getInstructions(recipe_id){
    return db("recipes as rec")
        .select("instr.step as Steps")
        .join("Instructions as instr", "rec.id", "instr.instr_id")
        .where({id})
}