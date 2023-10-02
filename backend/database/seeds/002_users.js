exports.seed = async (knex) => {
  await knex("users").insert([
    { firstName: "Kavin", lastName: "Tjhan", email: "kavin@email.com" },
  ]);
};
