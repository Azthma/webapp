const AnimeRepository = require('../repository/AnimeRepository');
const AnimeTitleRepository = require('../repository/AnimeTitleRepository');
const fs = require("fs");
const path = require('path');
const e = require('express');
const __basedir = path.resolve();

class animeController {
  constructor() {}

  async addAnime(req, res, next) {
    try{
        if (req.file == undefined) {
          return res.json({
            created: false,
            message: "You must select a file.",
          })
        }
        const { ...defaults } = req.body;
        const anime = await AnimeTitleRepository.findByTitle(defaults.title);
        if(!!anime && anime.status != 1){
          await AnimeRepository.create({
            anime_title_id: !anime ? null : anime.id,
            name: defaults.name,
            synopsis: defaults.synopsis,
            genre: defaults.genre,
            director: defaults.director,
            producer: defaults.producer,
            music: defaults.music,
            studio: defaults.studio,
            episodes: defaults.episodes,
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

  async addAnimeTitle(req, res, next) {
    const { ...defaults } = req.body;
    try{
      const anime = await AnimeTitleRepository.findByTitle(defaults.title);
      if(!anime){
        const data = await AnimeTitleRepository.create({
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

  async updateAnimeTitle(req, res, next) {
    try {
        const { ...defaults } = req.body;
        const anime = await AnimeTitleRepository.findById(req.params.id);
        if(!!anime){
            const updated = await AnimeTitleRepository.updateById(req.params.id, defaults);
            return res.json({
                updated: !!updated,
                message: "success."
            })
        }
        else{
            return res.json({
                confirmed: false,
                message: "data does not exist"
            })
        }
    } catch (error) {
        console.log('error', error)
        return res.sendStatus(500)
    }
  }

  async getAllAnime(req, res, next) {
    try {
      const anime = await AnimeRepository.findAllAnime();
      if(!!anime){
          return res.json({
              count: anime.length,
              rows: anime
          })
      }
      else{
          return res.json({
              data: false,
              message: "user not found",
          })
      }
    } catch (error) {
        console.log('error', error)
        return res.sendStatus(500)
    }
  }

  async getAnimeById(req, res, next) {
    try {
        const anime = await AnimeRepository.findById(req.params.id);
        if(!!anime){
            return res.json({
              anime
            })
        }
        else{
            return res.json({
                data: false,
                message: "data not found",
            })
        }
    } catch (error) {
        console.log('error', error)
        return res.sendStatus(500)
    }
  }

  async getAnimeByTitle(req, res, next) {
    try {
        const anime = await AnimeTitleRepository.findByTitle(req.params.title);
        if(!!anime){
            return res.json({
              anime
            })
        }
        else{
            return res.json({
                data: false,
                message: "data not found",
            })
        }
    } catch (error) {
        console.log('error', error)
        return res.sendStatus(500)
    }
  }

}

const anime = new animeController();

module.exports = anime;
