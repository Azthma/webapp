const BaseRepository = require('../../shared/repository/BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const Movie      = require('../models/MovieModel');

class MovieRepository extends BaseRepository{
   constructor(model) {
      super(model)
   }
}

module.exports = new MovieRepository(Movie);