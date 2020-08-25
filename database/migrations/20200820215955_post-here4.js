exports.up = function (knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments()
            tbl.string("username", 128).notNullable().unique().index();
            tbl.string("password", 255).notNullable();
        })

        .createTable("posts", tbl => {
            tbl.increments()
            tbl.string("title", 255).notNullable();
            tbl.string("text", 255).notNullable();
            // tbl
            //     .integer("user")
            //     .notNullable()
            //     .unsigned()
            //     .references("users.id")
            //     .onDelete("RESTRICT")
            //     .onUpdate("CASCADE");
        })

        .createTable("results", tbl => {
            tbl.increments()
            tbl.integer("results", 3, 5).default(1)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("results").dropTableIfExists("posts").dropTableIfExists("users");
}