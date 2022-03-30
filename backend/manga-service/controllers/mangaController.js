const mangaRepository = require('../repository/mangaRepository');
const mangaTitleRepository = require('../repository/mangaTitleRepository');
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require('path');
const e = require('express');
const __basedir = path.resolve();

class mangaController {
  constructor() {}

  async addManga(req, res, next) {
    try{
        if (req.file == undefined) {
          return res.json({
            created: false,
            message: "You must select a file.",
          })
        }
        const errors = validationResult(req);
        if(errors.errors != ''){
          return res.json({
            errors
          })
        }
        const { ...defaults } = req.body;
        const manga = await mangaTitleRepository.findByTitle(defaults.title);
        if(!!manga && manga.status != 1){
          await mangaRepository.create({
            manga_title_id: !manga ? null : manga.id,
            name: defaults.name,
            synopsis: defaults.synopsis,
            author: defaults.author,
            artist: defaults.artist,
            genre: defaults.genre,
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

  async addMangaTitle(req, res, next) {
    try{
      const errors = validationResult(req);
      if(errors.errors != ''){
        return res.json({
          errors
        })
      }
      const { ...defaults } = req.body;
      const manga = await mangaTitleRepository.findByTitle(defaults.title);
      if(!manga){
        const data = await mangaTitleRepository.create(defaults);
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

  async updateMangaTitle(req, res, next) {
    try {
        const errors = validationResult(req);
        if(errors.errors != ''){
          return res.json({
            errors
          })
        }
        const { ...defaults } = req.body;
        const manga = await mangaTitleRepository.findById(req.params.id);
        if(!!manga){
            const updated = await mangaTitleRepository.updateById(req.params.id, defaults);
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

  async getAllManga(req, res, next) {
    try {
      const manga = await mangaRepository.findAllManga();
      if(!!manga){
          return res.json({
              count: manga.length,
              rows: manga
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

  async getMangaById(req, res, next) {
    try {
        const manga = await mangaRepository.findById(req.params.id);
        if(!!manga){
            return res.json({
              manga
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

  async getMangaByMangaTitleId(req, res, next) {
    try {
        const manga = await mangaRepository.findMangaByTitleId(req.params.id);
        if(!!manga){
          return res.json({
            count: manga.length,
            rows: manga
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

  async getMangaByTitle(req, res, next) {
    try {
        const manga = await mangaTitleRepository.findByTitle(req.params.title);
        if(!!manga){
            return res.json({
              manga
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

  async getLatestMangaTopic(req, res, next){
    try {
      const manga_titles_this_week = await mangaTitleRepository.findTopicsPostedThisWeek()

      return res.json({
        manga_titles_this_week,
      })
    } catch (error) {
      console.log('error', error)
      return res.json(error)
    }
  }

}

const manga = new mangaController();

module.exports = manga;
