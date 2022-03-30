const movie = require('../controllers/movieController');
const upload = require("../middleware/movieUpload");
var expressJwt = require('express-jwt');

module.exports = function(app) {

    const cors = require('cors');
    const corsOptions ={
        origin:"*",
        credentials:true,
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));
    
    app.post('/movie/add', upload.single('file'), movie.addMovie);
    app.post('/movie-title/add', movie.addMovieTitle);

    /* can't access this routes if no jwt */
    app.use(
      expressJwt({
        secret: 'this is a secret',
        algorithms: ['HS256']
      })
    );

};
