const fs = require('fs');

fs.readFile('./readme.txt', (err, data)=>{
  if(err){
    throw err;
  }
  console.log(data);
  console.log(data.toString());
})

//fs 모듈을 불러온 뒤 읽을 파일의 경로를 지정한다
//readFile의 결과물은 버퍼라는 형식으로 제공된다
//지금은 단순히 버퍼를 메모리 데이터라고 생각하면 된다
//버퍼는 사람이 읽을 수 있는 형식이 아니므로 toString()을 사용해 문자열로 변환하면 읽을 수 있다