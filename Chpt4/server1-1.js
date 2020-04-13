const https = require('https');
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca:[
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res)=>{
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>')
}).listen(443, ()=>{
  console.log('443번 포트에서 대기 중입니다');
})

//server1.js에서 암호화를 적용하려면 https를 사용해야 한다
//하지만 https는 아무나 사용할 수 있는 것이 아니다
//암호화를 적용하는 만큼, 그것을 인증해줄 수 있는 기관도 필요하다
//인증서는 인증 기관에서 구입해야 한다
//Let's Encrypt 같은 기관에서 무료로 발급해주기도 한다
//인증서 발급 과정은 복잡하고 도메인이 필요한 경우도 있다

//다른 것은 거의 비슷하지만 createServer 메서드가 인자를 두 개 받는다
//두 번째 인자는 http 모듀로가 같이 서버 로직이고, 첫 번째 인자는 인증서에 관룐된 옵션 객체이다
//인증서를 구입하면 pem이나 crt, 또는 key 확장자를 가진 파일들을 제공해준다
//파일들을 fs.readFileSync 메서드로 읽어서 cert, key, ca 옵션에 알맞게 넣어주면 된다
//노드의 http2 모듈은 SSL 암호화와 더불어 최신 HTTP 프로토콜인 http/2를 사용할 수 있게 해준다
//http/2는 요청 및 응답 방식이 기존 http/1.1보다 개선되어 훨씬 효율적으로 요청을 보낸다(웹의 속도도 많이 개선됨)

