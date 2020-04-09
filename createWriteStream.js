const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', ()=>{
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();

//createWriteStream()으로 쓰기 스트림을 만들어 준다(첫 번째 인자로는 출력 파일명, 두 번째 인자는 옵션인데 여기서는 사용하지 않았다)
//finish 이벤트 리스너도 붙여줬는데, 파일 쓰기가 종료되면 콜백 함수가 호출된다
//writeStream에서 제공하는 write() 메서드로 넣을 데이터를 쓴다
//데이터를 다 썼다면 end() 메서드로 종료를 알려주는데, 이때 finish 이벤트가 발생한다