const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력됩니다', (err)=>{
  if(err){
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data)=>{
    if(err){
      throw err;
    }
    console.log(data.toString());
  })
})

//writeFile() 메서드에 생성될 파일의 경로와 내용을 입력해준다
//도중에 에러가 발생하지 않았다면 같은 폴더 내에 writeme.txt가 생성되었을 것이다
//그러고 readFile로 그 파일을 읽어보면 된다 