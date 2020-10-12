const http = require('http');
const url = require('url');
const db = require('./include/db');

const conn = db.init();

http.createServer((req, res) => {

}).listen(3000, _ => {
  const _url = 'SELECT * FROM lang';
  const path = _url.pathname
  if (path === '/list2') {
    conn.query(sql, (err, rows, fields) => {
      if (err) console.log(err)
      else {
        res.end()
      }
    })
  }
})