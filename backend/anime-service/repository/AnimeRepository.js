const BaseRepository = require('../../shared/repository/BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const anime      = require('../models/AnimeModel');
const anime_title        = require('../models/AnimeTitleModel');

anime_title.hasMany(anime);
anime.belongsTo(anime_title);

class AnimeRepository extends BaseRepository{
   constructor(model) {
      super(model)
   }

   findAllAnime(fields) {
      const options = {};
      if (!!fields && fields) {
         options.attributes = fields;
      }
      options.include = [
          { model: anime_title, as: 'anime_title', attributes: ['id', 'title', 'date_posted']},
      ];
      return this.model.findAndCountAll(options);
  }
}

module.exports = new AnimeRepository(anime);