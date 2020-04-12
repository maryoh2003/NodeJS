const fs = require('fs');

console.log('시작');
fs.readFile('./readme.txt', (err, data)=>{
  if(err){
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data)=>{
  if(err){
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data)=>{
  if(err){
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');

/*
  동기와 비동기, 블로킹과 논블로킹
  -노드에서는 동기와 비동기, 블로킹과 논블로킹이라는 네 용어가 혼용된다. 용어가 다른만큼 의미도 차이가 있다
  * 동기와 비동기: 함수가 바로 return 되는지 여부
  * 블로킹과 논블로킹: 백그라운드 작업 완료 여부
  노드에서는 동기-블로킹 방식과 비동기-논블로킹 방식이 대부분이다. 동기-논블로킹이나 비동기-블로킹은 없다고 봐도 된다
  동기-블로킹 방식에서는 백그라운드 작업 완료 여부를 계속 확인하며, 호출한 함수가 바로 return되지 않고 백그라운드 작업이 끝나야 return 된다
  비동기-논블로킹 방식에서는 호출한 함수가 바로 return되어 다음 작업으로 넘어가고, 백그라운드 작업 완료 여부는 신경 쓰지 않고 나중에 백그라운드가 알림을
  줄 때 처리한다
*/