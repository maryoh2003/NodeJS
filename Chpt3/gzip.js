//파일을 읽은 후 gzip 방식으로 압축하는 코드이다
const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

//노드에서는 파일을 압축하는 zlib이라는 모듈도 제공한다
//zlib의 createGzip()이라는 메서드가 스트림을 지원하므로 readStream과 writeStream 중간에서 파이핑을 할 수 있다
//버퍼 데이터가 전달되다가 gzip 압축을 거친 후 파일로 쓰여진다