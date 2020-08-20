
exports.up = function (knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments()
            tbl.string("username", 128).notNullable().unique().index();
            tbl.string("password", 256).notNullable();
        })

        .createTable("posts", tbl => {
            tbl.increments()
            tbl.string("posts", 256)
            tbl
                .integer("user")
                .unsigned()
                .references("users.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("posts").dropTableIfExists("users");
};
