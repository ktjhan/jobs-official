/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { firstName: "Kavin", lastName: "Tjhan", email: "kavin@email.com" },
  ]);
};
