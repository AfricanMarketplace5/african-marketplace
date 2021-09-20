//Imports
const knex = require('knex');
const knexConfig = require('../knexfile.js');


//Environment Variables
const environment = process.env.NODE_ENV || 'development';


//Exports; Exposing
module.exports = knex(knexConfig[environment]);