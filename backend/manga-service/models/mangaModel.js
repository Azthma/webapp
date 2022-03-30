const db         = require('../config/db');
const mangaSchema = require('./schemas/mangaSchema');
const manga       = db.define('mangas', mangaSchema);

module.exports = manga;