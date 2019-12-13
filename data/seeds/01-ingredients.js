
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        // The Best Chocolate Chip Cookie Recipe Ever
        {
          quantity: 1,
          unit_of_measure: "cup",
          ingredient: "salted butter (softened)", 
          recipe_id: 1
        },
        {
          quantity: 1,
          unit_of_measure: "cup",
          ingredient: "white (granulated) sugar", 
          recipe_id: 1
        },
        {
          quantity: 1,
          unit_of_measure: "cup",
          ingredient: "light brown sugar", 
          recipe_id: 1
        },
        {
          quantity: 2,
          unit_of_measure: "tsp",
          ingredient: "pure vanilla extract", 
          recipe_id: 1
        },
        {
          quantity: 2,
          unit_of_measure: null,
          ingredient: "large eggs", 
          recipe_id: 1
        },
        {
          quantity: 3,
          unit_of_measure: "cups",
          ingredient: "all-purpose flour", 
          recipe_id: 1
        },
        {
          quantity: 1,
          unit_of_measure: "tsp",
          ingredient: "baking soda", 
          recipe_id: 1
        },
        {
          quantity: .5,
          unit_of_measure: "tsp",
          ingredient: "backing powder", 
          recipe_id: 1
        },
        {
          quantity: 1,
          unit_of_measure: "tsp",
          ingredient: "sea salt", 
          recipe_id: 1
        },
        {
          quantity: 2,
          unit_of_measure: "cups",
          ingredient: "chocolate chips", 
          recipe_id: 1
        },

        // Easy Pecan Pie Recipe
        {
          quantity: 1,
          unit_of_measure: "cup",
          ingredient: "Karo Light OR Dark Corn Syrup", 
          recipe_id: 2
        },
        {
          quantity: 3,
          unit_of_measure: null,
          ingredient: "eggs", 
          recipe_id: 2
        },
        {
          quantity: 1,
          unit_of_measure: "cup",
          ingredient: "granulated sugar", 
          recipe_id: 2
        },
        {
          quantity: 2,
          unit_of_measure: "tbs",
          ingredient: "butter, melted", 
          recipe_id: 2
        },
        {
          quantity: 1,
          unit_of_measure: "tsp",
          ingredient: "pure vanilla extract", 
          recipe_id: 2
        },
        {
          quantity: 1.5,
          unit_of_measure: "cups",
          ingredient: "chopped pecans", 
          recipe_id: 2
        },
        {
          quantity: 1,
          unit_of_measure: null,
          ingredient: "9-inch unbaked or frozen deep-dish pie crust", 
          recipe_id: 2
        },
      ]);
    });
};
