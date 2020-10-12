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

http.createServer(async (req, res) => {
  let _url = url.parse(req.url);
  const params = qs.parse(_url.query);
  console.log(params)

  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.url.includes('/list')) {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    res.write('[{"사과": 5}, {"배": 2}, {"귤": 10}]');
  } else if (req.url.includes('/list2')) {
    const SQL = 'SELECT * FROM lang';
    await (await conn).query(SQL, (err, rows, fields) => {
      res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
      res.write(JSON.stringify(rows))
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h3>서버 테스트</h3>');
  }
  res.end();
}).listen(3000, _ => {
  console.log('server')
});