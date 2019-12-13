exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", table => {
                table.increments();
                
                table.string("name", 255).notNullable().unique();
                
        })
        
        .createTable("ingredients", table => {
            table.increments();

            table.string("ingredient", 255)
                .notNullable();

            table.float("quantity");
            table.string("unit_of_measure");
            
            table.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })

        .createTable("instructions", table => {
            table.increments();

            table.string("step")
                .notNullable();
            
            table.integer("instr_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("instructions")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")    
};
