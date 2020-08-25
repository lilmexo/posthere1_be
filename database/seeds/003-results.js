
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('results').del()
    .then(function () {
      // Inserts seed entries
      return knex('results').insert([
        {
          results: 1,
        },
        {
          results: 3,
        },
        {
          results: 5
        },

      ]);
    });
};
