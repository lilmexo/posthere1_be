
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

  const posts = [
    {
      posts: "I have no idea if this is going to work "
    },
    {
      posts: "There can only be one true champion ",
      user: 3
    },
  ]

  return knex("users", "posts")
    .insert(users, posts)
    .then(() => console.log("\n== Seed data for users and posts added. ==\n"))

};
