const http = require('http');

const server = http.createServer((req, res)=>{
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>')
});
server.listen(8080);
server.on('listening', ()=>{
  console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', (error)=>{
  console.error(error);
})

//res 객체에는 res.write와 res.end 메서드가 있다. 
//우선 res.write의 첫 번째 인자는 클라이언트로 보낼 데이터이다
//지금은 HTML 모양의 문자열을 보냈지만 버퍼를 보낼 수도 있다
//또한 여러번 호출해서 데이터를 여러 개 보내도 된다

//res.end는 응답을 종료하는 메서드다
//만약 인자가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료한다
//따라서 위에 코드는 res.write에서 <h1>Hello Node!</h1> 문자열을 한 번, res.end에서 <p>Hello Server!</p> 문자열을 한 번 클라이언트로 보낸 후 응답이 종료된 것이다