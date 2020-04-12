const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunck)=>{
  data.push(chunck);
  console.log('data :', chunck, chunck.length);
});

readStream.on('end', ()=>{
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err)=>{
  console.log('error :', err);
})

//createReadStream : 파일을 읽는 스트림 메서드
//첫 번째 인자로 읽을 파일 경로를 넣고 두 번째 인자는 옵션 객체인데, highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션이다.
//기본값은 64KB이지만 여러 번 나눠서 보내는 모습을 보여주기 위해 16B로 나눴다 