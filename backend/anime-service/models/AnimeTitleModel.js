const db         = require('../config/db');
const AnimeTitleSchema = require('./schemas/AnimeTitleSchema');
const AnimeTitle       = db.define('anime_titles', AnimeTitleSchema);

module.exports = AnimeTitle;