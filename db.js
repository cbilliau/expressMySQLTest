var mysql = require('mysql'),
    async = require('async');

var PRODUCTION_DB = 'expresstest1',
    TEST_DB = '';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
  pool: null,
  mode: null
};

exports.connect = (mode, done) =>  {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'cbilliau',
    password: 'p!nkTapeP3n',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  });

  state.mode = mode;
  done();
};

exports.get = () => {
  // console.log(state.pool);
  return state.pool;
};

exports.fixtures = (data) => {
  let pool = state.pool
  if (!pool) return done(new Error('Missing database connection.'))

  let names = Object.keys(data.tables)
  async.each(names, (name, cb) => {
    async.each(data.tables[name], (row, cb) => {
      let keys = Object.keys(row),
      values = keys.map((key) => { return "'" + row[key] + "'" })

      pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
    }, cb)
  }, done)
}

exports.drop = (tables, done) => {
  let pool = state.pool
  if (!pool) return done(new Error('Missing database connection.'))

  async.each(tables, function(name, cb) {
    pool.query('DELETE * FROM ' + name, cb)
  }, done)
}
