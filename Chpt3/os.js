const os = require('os');

console.log('운영체제 정보------------------');
console.log('os.arch():', os.arch());
console.log('os.platform:', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());
console.log('경로--------------------------');
console.log('os.homeidr():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보----------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보--------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());

/*
  * os.arch(): process.arch와 동일하다
  * os.platform(): process.platform과 동일하다
  * os.type(): 운영체제의 종류를 보여준다
  * os.uptime(): 운영체제 부팅 이후 흐른 시간(초)을 보여준다. process.uptime()은 노드의 실행 시간이었다
  * os.hostname(): 컴퓨터의 이름을 보여준다
  * os.release(): 운영체제의 버전을 보여준다
  * os.homedir(): 홈 디렉터리 경로를 보여준다
  * os.tmpdir(): 임시 파일 저장 경로를 보여준다
  * os.cpus(): 컴퓨터의 코어 정보를 보여준다
  * os.freemem(): 사용 가능한 메모리(RAM)를 보여준다
  * os.totalmem(): 전체 메모리 용량을 보여준다
*/
