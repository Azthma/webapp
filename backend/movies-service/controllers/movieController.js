const MovieRepository = require('../repository/MovieRepository');
const MovieTitleRepository = require('../repository/MovieTitleRepository');
const fs = require("fs");
const path = require('path');
const e = require('express');
const __basedir = path.resolve();

class movieController {
  constructor() {}

  async addMovie(req, res, next) {
    const { ...defaults } = req.body;
    try{
        if (req.file == undefined) {
          return res.json({
            created: false,
            message: "You must select a file.",
          })
        }
        const movie = await MovieTitleRepository.findByTitle(defaults.title);
        if(!movie || (!!movie && movie.status != 1)){
          await MovieRepository.create({
            movie_title_id: !movie ? null : movie.id,
            name: defaults.name,
            year: defaults.year,
            synopsis: defaults.synopsis,
            genre: defaults.genre,
            director: defaults.director,
            writer: defaults.writer,
            producer: defaults.producer,
            cinematography: defaults.cinematography,
            editor: defaults.editor,
            music: defaults.music,
            casts: defaults.casts,
            production_companies: defaults.production_companies,
            running_time: defaults.running_time,
            language: defaults.language,
            picture_name: req.file.filename,
            picture: fs.readFileSync(
              __basedir + "/resources/" + req.file.filename
            ),
          }).then(() => {
            return res.json({
              created: true,
              message: "Success."
            })
          });
        }
        else{
            return res.json({
                data: false,
                message: "title already in use, please use a different title.",
            })
        }
    }
    catch(error){
        console.log('error', error)
        return res.sendStatus(500)
    }
  }

  async addMovieTitle(req, res, next) {
    const { ...defaults } = req.body;
    try{
      const movie = await MovieTitleRepository.findByTitle(defaults.title);
      if(!movie){
        const data = await MovieTitleRepository.create({
          title: defaults.title,
          status: defaults.status,
          date_posted: defaults.date_posted
        });
        return res.json({
            created: true,
            message: "success.",
            data: data
        })
      }
      else{
        return res.json({
            data: false,
            message: "title already in use.",
        })
      }
    }
    catch(error){
        console.log('error', error)
        return res.sendStatus(500)
    }
  }

  // async updateAnimeTitle(req, res, next) {
  //   try {
  //       const { ...defaults } = req.body;
  //       const anime = await AnimeTitleRepository.findById(req.params.id);
  //       if(!!anime){
  //           const updated = await AnimeTitleRepository.updateById(req.params.id, defaults);
  //           return res.json({
  //               updated: !!updated,
  //               message: "success."
  //           })
  //       }
  //       else{
  //           return res.json({
  //               confirmed: false,
  //               message: "data does not exist"
  //           })
  //       }
  //   } catch (error) {
  //       console.log('error', error)
  //       return res.sendStatus(500)
  //   }
  // }

  // async getAnimeById(req, res, next) {
  //   try {
  //       const anime = await AnimeRepository.findById(req.params.id);
  //       if(!!anime){
  //           return res.json({
  //             anime
  //           })
  //       }
  //       else{
  //           return res.json({
  //               data: false,
  //               message: "data not found",
  //           })
  //       }
  //   } catch (error) {
  //       console.log('error', error)
  //       return res.sendStatus(500)
  //   }
  // }

  // async getAnimeByTitle(req, res, next) {
  //   try {
  //       const anime = await AnimeTitleRepository.findByTitle(req.params.title);
  //       if(!!anime){
  //           return res.json({
  //             anime
  //           })
  //       }
  //       else{
  //           return res.json({
  //               data: false,
  //               message: "data not found",
  //           })
  //       }
  //   } catch (error) {
  //       console.log('error', error)
  //       return res.sendStatus(500)
  //   }
  // }

}

const movie = new movieController();

module.exports = movie;
