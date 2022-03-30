const db         = require('../config/db');
const MovieSchema = require('./schemas/MovieSchema');
const Movie       = db.define('movies', MovieSchema);

module.exports = Movie;