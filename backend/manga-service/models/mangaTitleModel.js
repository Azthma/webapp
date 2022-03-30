const db         = require('../config/db');
const mangaTitleSchema = require('./schemas/mangaTitleSchema');
const mangaTitle       = db.define('manga_titles', mangaTitleSchema);

module.exports = mangaTitle;