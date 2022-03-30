const BaseRepository = require('../../shared/repository/BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const manga      = require('../models/mangaModel');
const manga_title        = require('../models/mangaTitleModel');

manga_title.hasMany(manga);
manga.belongsTo(manga_title);

class mangaRepository extends BaseRepository{
   constructor(model) {
      super(model)
   }

   findAllManga(fields) {
      const options = {};

      if (!!fields && fields) {
         options.attributes = fields;
      }

      options.attributes = { exclude: ['picture'] }

      options.include = [
          { model: manga_title, as: 'manga_title', attributes: ['id', 'title', 'date_posted']},
      ];
      
      return this.model.findAndCountAll(options);
   }

   findMangaByTitleId(manga_title_id, fields) {
      const options = {
         where: { manga_title_id },
      };

      if (!!fields && fields) {
         options.attributes = fields;
      }

      options.attributes = { exclude: ['picture'] }
      
      options.include = [
         { model: manga_title, as: 'manga_title', attributes: ['id', 'title', 'date_posted']},
      ];
      
      return this.model.findAndCountAll(options);
   }
}

module.exports = new mangaRepository(manga);