const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
  if(str.length%2){
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

//모듈로부터 값ㅇ르 불러올 때 변수 이름을 다르게 지정할 수도 있다