const { param, body } = require('express-validator');

const addMangaRules = () => {
    return [
        body('manga_title_id').notEmpty().withMessage('manga_title_id is required.'),
        body('name').notEmpty().withMessage('name is required.'),
        body('synopsis').notEmpty().withMessage('synopsis is required.'),
        body('author').notEmpty().withMessage('author is required.'),
        body('artist').notEmpty().withMessage('artist is required.'),
        body('genre').notEmpty().withMessage('genre is required.')
    ];
};

const updateMangaRules = () => {
    return [
        body('manga_title_id').notEmpty().withMessage('manga_title_id is required.'),
        body('name').notEmpty().withMessage('name is required.'),
        body('synopsis').notEmpty().withMessage('synopsis is required.'),
        body('author').notEmpty().withMessage('author is required.'),
        body('artist').notEmpty().withMessage('artist is required.'),
        body('genre').notEmpty().withMessage('genre is required.')
    ];
};

const addMangaTitleRules = () => {
    return [
        body('title').notEmpty().withMessage('title is required.'),
        body('status').notEmpty().withMessage('status is required.'),
        body('date_posted').notEmpty().withMessage('date_posted is required.'),
    ];
};
  
const updateMangaTitleRules = () => {
    return [
        body('title').notEmpty().withMessage('title is required.'),
        body('status').notEmpty().withMessage('status is required.'),
        body('date_posted').notEmpty().withMessage('date_posted is required.'),
    ];
};

const useRequiredParam = (arg) => {
  return [param(arg).notEmpty().withMessage(`${arg} is required.`)];
};

module.exports = {
    addMangaRules,
    updateMangaRules,
    addMangaTitleRules,
    updateMangaTitleRules,
    useRequiredParam
};
