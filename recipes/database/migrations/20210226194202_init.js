exports.up = function (knex) {
  return knex.schema

      .createTable("roles", (tbl) => {
      tbl.increments();

      tbl.string("name", 128).notNullable().unique();
    })

    .createTable("users", (tbl) => {
      tbl.increments();

      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();

      tbl
        .integer("role")
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .defaultTo(2);
    })

    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("title", 255).notNullable();
      tbl.string("source", 255).notNullable();
      tbl.string("ingredients", 255).notNullable();
      tbl.string("instructions", 255).notNullable();
      tbl.string("category", 255).notNullable();
      tbl.string("img");
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("recipes")
  .dropTableIfExists("users")
  .dropTableIfExists("roles");
};
