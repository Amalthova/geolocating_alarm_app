const knex = require('knex');
// require('dotenv').config();
const config = require("../knexfile");

// This tuple checks if it getting a dev dependency. If yes, config.production.
module.exports = knex(process.env.PORT ? config.production : config.development); 
