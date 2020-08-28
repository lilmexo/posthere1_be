
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('results').del()
    .then(function () {
      // Inserts seed entries
      return knex('results').insert([
        {
          id: 1,
          results: 1,
        },
        {
          id: 2,
          results: 3,
        },
        {
          id: 3,
          results: 5
        },

      ]);
    });
};
