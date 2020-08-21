
exports.seed = function (knex) {
  // Deletes ALL existing entries
  const users = [
    {
      username: "Thor",
      password: "Greek"
    },
    {
      username: "Thanos",
      password: "Greek"
    },
    {
      username: "Jupiter",
      password: "Greek"
    },
  ]


  return knex("users",)
    .insert(users,)
    .then(() => console.log("\n== Seed data for users  added. ==\n"))

};
