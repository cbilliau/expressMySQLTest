// method
'use strict';

let db = require('../db.js');

exports.create = (userId, text, done) => {
  let values = [userId, text, new Date().toISOString()];

  db.get().query('INSERT INTO comments (user.id, text, date) VALUES(?, ?, ?)',
  values, (err, result) => {
    if (err) return done(err)
    done(null, result.insertId);
  });
};

exports.getAll = (done) => {
  db.get().query('SELECT * FROM comments', (err, rows) => {
    if (err) return done(err)
    console.log('From Method: \n', rows);
    done(null, rows);
  });
};

exports.getAllByUser = (userId, done) => {
  db.get().query('SELECT * FROM comments WHERE user_id = ?', userId, (err, rows) => {
    if (err) return done(err)
    done(null, rows);
  });
};
