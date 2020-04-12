// const odd = '홀수입니다';
// const even = '짝수입니다';

// module.exports={
//   odd,
//   even,
// }

//위는 아래와 동일하다

exports.odd='홀수입니다';
exports.even='짝수입니다';
// console.log(module.exports === exports) 를 하면 true가 나온다
// exports를 사용할 때는 객체만 사용할 수 있으므로 func.js와 같이 module.exports에 함수를 대입한 경우에는 exports로 바꿀 수 없다

//다른 파일에서 이 파일을 불러오면 module.exports에 대입된 값을 사용할 수 있다
