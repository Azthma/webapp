const BaseRepository    = require('../../shared/repository/BaseRepository')
const Op                = require('sequelize').Op;
const Sequelize         = require('sequelize');
const MovieTitle        = require('../models/MovieTitleModel');

class MovieTitleRepository extends BaseRepository{
    constructor(model) {
        super(model)
    }

    findByTitle(title, fields) {
        const options = {
            where: { title },
        };
  
        if (!!fields && fields) {
            options.attributes = fields;
        }
        
        return this.model.findOne(options);
    }
}

module.exports = new MovieTitleRepository(MovieTitle);