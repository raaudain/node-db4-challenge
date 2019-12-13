
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        // The Best Chocolate Chip Cookie Recipe Ever
        {
          step: "Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.", 
          instr_id: 1
        },
        {
          step: "In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.", 
          instr_id: 1
        },
        {
          step: "Cream together butter and sugars until combined.", 
          instr_id: 1
        },
        {
          step: "Beat in eggs and vanilla until fluffy.", 
          instr_id: 1
        },
        {
          step: "Mix in the dry ingredients until combined.", 
          instr_id: 1
        },
        {
          step: "Add 12 oz package of chocolate chips and mix well.", 
          instr_id: 1
        },
        {
          step: "Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies)!", 
          instr_id: 1
        },
        {
          step: "Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.", 
          instr_id: 1
        },
        {
          step: "Let them sit on the baking pan for 2 minutes before removing to cooling rack.", 
          instr_id: 1
        },

        // Easy Pecan Pie Recipe
        {
          step: "Preheat oven to 350°F.", 
          instr_id: 2
        },
        {
          step: "Mix Karo® Light Corn Syrup, eggs, sugar, butter and vanilla using a spoon or a rubber spatula. Stir in pecans and pour the mixture into pie crust.", 
          instr_id: 2
        },
        {
          step: "Bake on center rack of oven for 60 to 70 minutes. Cool for at least 2 hours on wire rack before serving.", 
          instr_id: 2
        },

      ]);
    });
};
