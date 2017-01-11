// controller
'use strict';

let express = require('express'),
    router = express.Router();

let Comments = require('../models/comment');

router.get('/', (req, res) => {
  console.log('hello world too');
  res.send('hello world');
});

router.get('/all', (req, res) => {
  Comments.getAll((err, rows) => {
    let remarks = (JSON.stringify(rows[0]));
    res.render('comments', {title: 'Comments', comments: remarks});
    console.log('From controller: \n ' + remarks);
  });
});

router.get('/byUser', (req, res) => {
  Comments.getAllByUser((err,docs) => {
    res.render('comments', {comments: docs});
  });
});

module.exports = router;
