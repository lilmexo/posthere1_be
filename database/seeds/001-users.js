
exports.seed = function (knex) {
  // Deletes ALL existing entries
  const users = [
    {
      username: "Thor",
      password: "Greek",
      id: 1
    },
    {
      username: "Thanos",
      password: "Greek",
      id: 2
    },
    {
      username: "Jupiter",
      password: "Greek",
      id: 3
    },
  ]


  return knex("users",)
    .insert(users,)
    .then(() => console.log("\n== Seed data for users  added. ==\n"))

};
