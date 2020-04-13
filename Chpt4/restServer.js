const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res)=>{
  if(req.method === 'GET'){
    if(req.url === '/'){
      return fs.readFile('./restFront.html', (err, data)=>{
        if(err){
          throw err;
        }
        res.end(data);
      });
    } else if(req.url === '/about'){
      return fs.readFile('./about.html', (err, data)=>{
        if(err){
          throw err;
        }
        res.end(data);
      });
    } else if(req.url === '/users'){
      return res.end(JSON.stringify(users));
    }
    return fs.readFile(`.${req.url}`, (err, data)=>{
      if(err){
        res.writeHead(404, 'NOT FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });
  } else if(req.method === 'POST'){
    if(req.url === '/users'){
      let body = '';
      req.on('data', (data)=>{
        body+=data;
      });
      return req.on('end', ()=>{
        console.log('POST 본문(Body):', body);
        const {name} = JSON.parse(body);
        const id = Date.now();
        users[id] = name;
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if(req.method==='PUT'){
    if(req.url.startsWith('/users/')){
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', (data)=>{
        body+=data;
      });
      return req.on('end', ()=>{
        console.log('PUT 본문(Body):', body);
        users[key] = JSON.parse(body).name;
        return res.end(JSON.stringify(users));
      });
    }
  } else if(req.method==='DELETE'){
    if(req.url.startsWith('/users/')){
      const key = req.url.split('/')[2];
      delete users[key];
      return res.end(JSON.stringify(users));
    }
  }
  res.writeHead(404, 'NOT FOUND');
  return res.end('NOT FOUND');
})
.listen(8085, ()=>{
  console.log('8085번에서 포트 대기 중입니다')
})

//요청이 어떤 메서드를 사용했는지 req.method로 알 수 있다(그래서 req.method로 if문 처리)

//GET 메서드에서 /, /about 요청 주소는 페이지를 요청하는 것이므로 HTML 파일을 읽어서 전송한다
//AJAX 요청을 처리하는 /users에서는 users데이터를 전송한다
//JSON 형식을 보내기 위해 JSON.stringfy를 해준다
//그 외의 GET요청은 CSS나 JS파일을 요청하는 것이므로 찾아서 보내주고, 없다면 404 NOT FOUND 에러를 응답한다

//POST와 PUT 메서드는 클라이언트로부터 데이터를 받으므로 특별한 처리가 필요하다
//req.on('data', 콜백)과 req.on('end', 콜백) 부분은 버퍼와 스트림에서 나왔던 readStream이다
//readStream으로 요청과 같이 들어오는 요청 본문을 받을 수 있다
//문자열이므로 JSON으로 만드는 JSON.parse 과정이 한 번 필요하다

//DELETE 메서드로 요청이 오면 주소에 들어 있는 키에 해당하는 사용자를 제거한다

//해당하는 주소가 없을 경우 404 NOT FOUND 에러를 응답한다


//NetWork 탭에서 네트워크 요청 내용을 실시간으로 볼 수 있다
//REST API 방식으로 주소를 만들었으므로 주소만 봐도 요청 내용을 유추할 수 있다
//Name은 요청 주소를, Method는 요청 메서드를, Status는 HTTP 응답 코드를, Protocol은 HTTP 프로토콜을, Type은 요청의 종류를 의미한다. xhr은 AJAX 요청이다
//데이터는 메모리상의 변수에 저장되어 있으므로 서버를 종료하기 전까지 유지된다
//데이터가 계속 유지되길 원한다면 데이터베이스를 사용해야 한다
