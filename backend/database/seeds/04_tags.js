/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("jobTags").insert([
    { tagName: "Full Time", jobPosts_id: 1 },
    { tagName: "Part Time", jobPosts_id: 2 },
    { tagName: "Remote", jobPosts_id: 3 },
  ]);
};
