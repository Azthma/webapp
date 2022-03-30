const anime = require('../controllers/animeController');
const upload = require("../middleware/animeUpload");
var expressJwt = require('express-jwt');

module.exports = function(app) {

    const cors = require('cors');
    const corsOptions ={
        origin:"*",
        credentials:true,
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));

    app.post('/anime/add', upload.single('file'), anime.addAnime);
    app.get('/anime', anime.getAllAnime);
    app.get('/anime/:id', anime.getAnimeById);
    app.get('/anime/title/:title', anime.getAnimeByTitle);
    app.post('/anime-title/add', anime.addAnimeTitle);
    app.put('/anime-title/update/:id', anime.updateAnimeTitle);

    /* can't access this routes if no jwt */
    app.use(
      expressJwt({
        secret: 'this is a secret',
        algorithms: ['HS256']
      })
    );

};
