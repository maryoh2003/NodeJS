const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
  fs.readFile('./server2.html', (err, data)=>{
    if(err){
      throw err;
    }
    res.end(data);
  });
}).listen(8081,()=>{
   console.log('8081번 포트에서 서버 대기 중입니다!');
})

//요청이 들어오면 먼저 fs모듈로 HTML 파일을 읽는다.
//data 변수에 저장된 버퍼를 그대로 클라이언트에 보내주면 된다
//이전 예제에서는 문자열을 보냈지만 저렇게 버퍼를 보낼 수도 있다

//쿠키는 name=zerocho 같이 단순한 '키-값'의 쌍이다
//서버로부터 쿠키가 오면 웹 브라우저는 쿠키를 저장해두었다가 요청할 때마다 쿠키를 동봉해서 보내준다
//서버는 요청에 들어 있는 쿠키를 읽어서 사용자가 누구인지 파악한다
//쿠키는 요청과 응답의 header에 저장된다
//요청과 응답은 각각 헤더와 본문을 가진다
