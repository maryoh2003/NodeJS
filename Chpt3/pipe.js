const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
//액체가 흐르는 관(pipe)처럼 데이터가 흐른다고 해서 지어진 이름이다
//readme4와 똑같은 내용의 writeme3이 생성된다
