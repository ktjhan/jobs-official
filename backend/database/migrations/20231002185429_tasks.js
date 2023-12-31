/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.string("taskName", 128).notNull();
    table.date("date");
    table
      .integer("job_id")
      .references("id")
      .inTable("jobPosts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNull();
    table.boolean("completed").defaultTo(false);
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
};
