
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          title: "Sparta",
          text: "I have no idea if this is going to work ",
          user: 2
        },
        {
          title: "I hate DB",
          text: "There can only be one true champion ",
          user: 1
        },
      ]);
    });
};
