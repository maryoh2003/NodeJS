const crypto = require('crypto');

crypto.randomBytes(64, (err, buf)=>{  //64바이트 길이의 문자열을 randomBytes()를 사용하여 만들어준다
  const salt = buf.toString('base64');  //만든 문자열이 salt가 된다
  console.log('salt:', salt); 
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key)=>{ //순서대로 비밀번호, salt, 반복 횟수, 출력 바이드, 해시 알고리즘을 인자로 넣어준다
    console.log('password:', key.toString('base64')); //즉, sha512로 변환된 결괏값을 다시 sha512로 변환하는 과정을 10만 번 반복하는 것이다
   });                                                //너무 많이 반복하는 것이 아닌가, 라는 생각이 들 수도 있지만 1초 정도밖에 걸리지 않는다
});

//pbkdf2 = 비밀번호를 암호화하는 알고리즘
//간단하지만 bcrypt나 scrypt보다 취약하므로 나중에 더 나은 보안이 필요하다면 scrypt방식을 사용하면 됨