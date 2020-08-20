
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          posts: "I have no idea if this is going to work "
        },
        {
          posts: "There can only be one true champion ",
          user: 3
        },
      ]);
    });
};
