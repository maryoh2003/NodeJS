const http = require('http');

http.createServer((req, res)=>{
  //여기에 어떻게 응답할지 적어준다
});

//http 서버가 있어야 웹 브라우저의 요청을 처리할 수 있으므로 http모듈을 사용했다. 
//http모듈에는 createServer 메서드가 있는데, 인자로 요청에 대한 콜백 함수를 넣을 수 있다.
//요청이 들어올 때마다 매번 콜백 함수가 실행되므로 이 콜백 함수에 응답을 적어주면 된다.

//createServer의 콜백 부분을 보면 req와 res 매개변수가 있다
//보통 request를 줄여 req이라고 표현하고 response를 줄여 res라고 표현한다(매개변수의 이름은 마음대로 바꿔도 된다)
//req 객체는 요청에 관한 정보들을, res 객체는 응답에 관한 정보들을 담고 있다
