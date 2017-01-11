'use strict';

let express = require('express');
let app = express();
let db = require('./db');

app.set('view engine', 'pug');

app.use('/comments', require('./controllers/comments'));
// app.use('/users', require('./controllers/users'));

// Connect to MySQL on start
db.connect(db.MODE_PRODUCTION, function(err) {
  if (err) {
    console.error('Unable to connect to db.');
    process.exit(1);
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...');
    });
  }
});
