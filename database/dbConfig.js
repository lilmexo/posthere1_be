require("dotenv").config();
const knex = require('knex');

const knexConfig = require("../knexfile");

const environment = process.env.DB_ENV || "development";
//what does this do?


// module.exports = knex(knexConfig.development);

module.exports = knex(knexConfig[environment]);
