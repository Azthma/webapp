const express = require('./config/express.js');
const db      = require('./config/db.js');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

const port = process.env.PORT || 3000;

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const app = express();

app.listen(port, function() {
    console.log('listening at port ' + port);
});