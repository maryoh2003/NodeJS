const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '')=>
  cookie
  .split(';')
  .map(v => v.split('='))
  .map(([k, ...vs]) => [k, vs.join('=')])
  .reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
  }, {});

  const session = {};

  http.createServer((req, res)=>{
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){ 
      const {query} = url.parse(req.url);     
      const {name} = qs.parse(query);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes()+5);
      const randomInt = Date.now();
      session[randomInt] = {
        name, 
        expires,
      };
      res.writeHead(302, {
        Location: '/',
        'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
    } else if(cookies.session && session[cookies.session].expires > new Date()){
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else{
      fs.readFile('./server4.html', (err, data)=>{
        if(err){
          throw err;
        }
        res.end(data);
      });
    }
  })
  .listen(8084, ()=>{
    console.log('8084번 포트에서 서버 대기 중입니다!');
  })

  //server4와 달라진 부분
  //쿠키에 이름을 담아서 보내는 대신 randomInt라는 임의의 숫자를 보냈다
  //사용자의 이름과 만료시간은 session이라는 객체에 대신 저장한다

  //이 방식이 세션이다
  //서버에 사용자 정보를 저장하고 클라이언트와는 세션 아이디로만 소통한다.
  //세션 아이디는 꼭 쿠키를 사용해서 주고 받지 않아도 되지만 많은 웹사이트가 쿠키를 사용한다
  //실제 배포용 서버에서는 세션을 위와 같은 변수에 저장하지 않고 데이터베이스에 넣어둔다
  //서비스를 새로 만들 때마다 쿠키와 세션을 직접 구현할 수는 없다
  //다른 사람들이 만든 검증된 코드를 사용하는 것이 좋다
