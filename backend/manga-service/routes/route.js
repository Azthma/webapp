const manga = require('../controllers/mangaController');
const upload = require("../middleware/mangaUpload");
const { addMangaRules, updateMangaRules, addMangaTitleRules, updateMangaTitleRules } = require('../middleware/rules');
const { adminOnly, userAllowed } = require('../shared/middleware/validate');
var expressJwt = require('express-jwt');

module.exports = function(app) {

    const cors = require('cors');
    const corsOptions ={
        origin:"*",
        credentials:true,
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));

    app.post('/manga/add', upload.single('file'), manga.addManga);
    app.get('/manga', manga.getAllManga);
    app.get('/manga/:id', manga.getMangaById);
    app.get('/manga/title/:title', manga.getMangaByTitle);
    app.get('/manga/title-id/:id', manga.getMangaByMangaTitleId);
    app.post('/manga-title/add', addMangaTitleRules(), manga.addMangaTitle);
    app.put('/manga-title/update/:id', updateMangaTitleRules(), manga.updateMangaTitle);
    app.get('/manga/topic/latest', manga.getLatestMangaTopic);
    app.get('/manga-titles', manga.getAllMangaTitles);
    app.get('/manga-titles/search', manga.searchMangaTopic);

    /* can't access this routes if no jwt */
    app.use(
      expressJwt({
        secret: 'this is a secret',
        algorithms: ['HS256']
      })
    );

};
