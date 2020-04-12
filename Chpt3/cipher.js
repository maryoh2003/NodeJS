const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);

/*
* crypto.createCipher(알고리즘, 키): 암호화 알고리즘과 키를 넣어준다. 암호화 알고리즘은 aes-256-cbc를 사용한다. 다른 알고리즘을 사용해도 된다.
사용 가능한 알고리즘 목록은 crypto.getCiphers()를 하면 볼 수 있다
* cipher.update(문자열, 인코딩, 출력 인코딩): 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어준다. 보통 문자열은 utf8 인코딩을, 암호는 base64
를 많이 사용한다
* cipher.final(출력 인코딩): 출력 결과물의 인코딩을 넣어주면 암호화가 완료된다
* crypto.createDecipher(알고리즘, 키): 복호화할 때 사용한다. 암호화할 때 사용했던 알고리즘과 키를 그대로 넣어주어야 한다
* decipher.update(문자열, 인코딩, 출력 인코딩): 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣어준다. createCipher의 update()에서 인코딩과 출력 인코딩의 순서를 바꿔서 넣어줘야 한다
* decipher.final(출력 인코딩): 복호화 결과물의 인코딩을 넣어준다
*/
                                                                                                                    