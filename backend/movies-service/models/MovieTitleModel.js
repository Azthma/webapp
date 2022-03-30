const db         = require('../config/db');
const MovieTitleSchema = require('./schemas/MovieTitleSchema');
const MovieTitle       = db.define('movie_titles', MovieTitleSchema);

module.exports = MovieTitle;