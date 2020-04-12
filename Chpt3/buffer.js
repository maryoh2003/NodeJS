const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length():', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄엄 ')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);

/*
* from(문자열): 문자열을 버퍼로 바꿀 수 있다. length 속성은 버퍼의 크기를 알려준다(바이트 단위)
* toString(버퍼): 버퍼를 다시 문자열로 바꿀 수 있다. 이때 base64나 hex를 인자로 넣으면 해당 인코딩으로 변환할 수 있다
* concat(배열): 배열 안에 든 버퍼들을 하나도 합친다
* alloc(바이트): 빈 버퍼를 생성한다. 바이트를 인자로 지정해주면 해당 크기의 버퍼가 생성된다
* 버퍼의 크기를 작게 만들어서 여러 번에 나눠서 보내는 방식이 등장했다
* 예를 들면 버퍼 1MB를 만든 후 100MB 파일을 백 번에 걸쳐 보내는 것을 메모리 1MB로 100MB 파일을 전송할 수 있다. 이를 편리하게 만든 것이 스트림이다.
*/