const BaseRepository    = require('../../shared/repository/BaseRepository')
const Op                = require('sequelize').Op;
const Sequelize         = require('sequelize');
const mangaTitle        = require('../models/mangaTitleModel');

class mangaTitleRepository extends BaseRepository{
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

    findTopicsPostedThisWeek(fields) {
        const currentDate = new Date();
        const first = currentDate.getDate() - currentDate.getDay();
        const last = currentDate.getDate() - currentDate.getDay() + 6;
        const firstDayOfWeek = new Date(currentDate.setDate(first)).toISOString().slice(0, 10);
        const lastDayOfWeek = new Date(currentDate.setDate(last)).toISOString().slice(0, 10);

        const options = {
            attributes: [
                [Sequelize.fn('date_format', Sequelize.col('date_posted'), '%Y-%m-%d'), 'date_posted']
            ],
            where: {
                date_posted: {
                    [Op.between]: [firstDayOfWeek, lastDayOfWeek]
                }
            }
        };

        options.attributes = fields;
      
        return this.model.findAll(options);
    }

    findAllMangaTopics(fields) {
        const options = {};

        if (!!fields && fields) {
            options.attributes = fields;
        }
      
        return this.model.findAndCountAll(options);
    }

    searchMangaTopic(fields) {
        const search = fields.search || "";
        const options = {
            where: {
                title: {
                    [Op.like]: `%${search}%`,
                }
            }
        };

        options.attributes = fields;
      
        return this.model.findAndCountAll(options);
    }
}

module.exports = new mangaTitleRepository(mangaTitle);