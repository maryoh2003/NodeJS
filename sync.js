const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');

//async 파일과 비교했을 때, readFile메서드 대신 readFileSync를 사용했다

//sync 메서드를 사용할 때는 이전 작업이 완료되어야 다음 작업을 진행할 수 있다
//즉, 백그라운드가 작업하는 도안 메인 스레드는 아무것도 못하고 대기하고 있어야 하는 것이다
//메인 스레드가 일을 하지 않는 시간이 생기기 때문에 비효율적이다
//writeSync도 있음
//비동기 메서드가 훨씬 효율적이다