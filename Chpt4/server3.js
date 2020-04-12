const http = require('http');

const parseCookies = (cookie = '')=>
  cookie
  .split(';')
  .map(v => v.split('='))
  .map(([k, ...vs]) => [k, vs.join('=')])
  .reduce((acc, [k, v])=>{
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
  }, {})

http.createServer((req, res)=>{
  const cookies = parseCookies(req.headers.cookie);
  console.log(req.url, cookies);
  res.writeHead(200, { 'Set-Cookie':'mycookie=test' });
  res.end('Hello Cookie');
})
.listen(8082, ()=>{
  console.log('8082번 포트에서 서버 대기 중입니다!');
});

//쿠키는 name=zerocho;year=1994처럼 문자열 형식으로 오므로 이를 {name: 'zerocho', year: '1994'}와 같이 바꾸는 함수(parseCookies)를 만들었다
//createServer 메서드의 콜백에서는 제일 먼저 req 객체에 담겨 있는 쿠키를 분석한다
//쿠키는 req.headers.cookie에 들어 있다
//req.headers는 요청의 헤더를 의미한다
//응답의 헤더에 쿠키를 기록해야 하므로 res.writeHead 메서드를 사용했다
//첫 번째 인자로 200이라는 상태 코드가 성공이라는 의미로 들어있다. 
//두 번째 인자로는 헤더의 내용을 입력한다
//Set-Cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미다


//요청과 응답은 모두 헤더와 본문을 가지고 있다
//헤더는 요청 또는 응답에 대한 정보를 가지고 있는 곳이고, 본문은 서버와 클라이언트 간에 주고받을 실제 데이터를 담아두는 공간이다