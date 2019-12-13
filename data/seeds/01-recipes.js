
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, 
          name: 'The Best Chocolate Chip Cookie Recipe Ever', 
        },

        {
          id: 2, 
          name: 'Easy Pecan Pie Recipe', 
        },

      ]);
    });
};
