const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data)=>{
  if(err){
    throw err;
  }
  console.log('1번', data.toString());
  fs.readFile('./readme2.txt', (err, data)=>{
    if(err){
      throw err;
    }
    console.log('2번', data.toString());
    fs.readFile('./readme2.txt', (err, data)=>{
      if(err){
        throw err;
      }
      console.log('3번', data.toString());
    })
  })
})
console.log('끝');


//이전 readFile()의 콜백에 다음 readFile()을 넣어주면 된다
//소위 말하는 콜백 지옥이 펼쳐지지만 적어도 순서가 어긋나는 일은 없다
//콜백 지옥은 Promise나 async/await으로 어느정도 해결할 수 있다