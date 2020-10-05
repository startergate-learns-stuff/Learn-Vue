const http = require('http');
const mariadb = require('mariadb');
const url = require('url');
const qs = require('querystring');

const dbInfo = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'web'
}

const init = async _ => {
  let conn = await mariadb.createConnection(dbInfo)
  return conn;
};

const connect = async conn => {
  let _conn = await conn;
  _conn.connect(err => {
    if (err) console.log(err);
    else console.log('connected')
  });
};

const conn = init();
connect(conn);

http.createServer((req, res) => {
  let _url = url.parse(req.url);
  const params = qs.parse(_url.query);

  if (req.url.includes('/list')) {

  } else if (req.url.includes('/next')) {

  } else {

  }

  res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
  res.write('<em>Hello Node</em>')
  res.end();
}).listen(3000, _ => {

});