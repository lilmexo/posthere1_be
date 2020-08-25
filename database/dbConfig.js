const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.NODE_ENV || "development";
//what does this do?


// module.exports = knex(knexConfig.development);

module.exports = knex(knexConfig[environment]);
