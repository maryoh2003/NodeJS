const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i< numCPUs; i+=1){
    cluster.fork();
  }
  //워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal)=>{
    console.log(`${worker.process.pid}번 워커가 종료되었습니다`);
    cluster.fork();   //워커가 죽을 때마다 새로운 워커 하나가 생성됨
  });
} else{
  //워커들이 포트에서 대기
  http.createServer((req, res)=>{
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello Cluster!</p>');
    setTimeout(()=>{    //요청이 들어올 때마다 1초 후에 서버가 종료되도록 했다
      process.exit(1);   
    }, 1000);
  }).listen(8085);

  console.log(`${process.pid}번 워커 실행`)
}

//클러스터에는 마스터 프로세스와 워커 프로세스가 있다
//마스터 프로세스는 CPU 개수만큼 워커 프로세스를 만들고, 8085번 포트에서 대기한다
//요청이 들어오면 만들어진 워커 프로세스에 요청을 분배한다

//워커 프로세스가 실질적인 일을 하는 프로세스이다