const db         = require('../config/db');
const AnimeSchema = require('./schemas/AnimeSchema');
const Anime       = db.define('animes', AnimeSchema);

module.exports = Anime;