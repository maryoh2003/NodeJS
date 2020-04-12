const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringfy():', querystring.stringify(query));

/*
* querystring.parse(쿼리): url의 query부분을 자바스크립트 객체로 분해해준다
* querystring.stringfy(객체): 분해된 query 객체를 문자열로 다시 조립해준다

crypto 

* 다양한 방식의 암호화를 도와주는 모듈이다

단방향 암호화
* 단방향 암호화란 복호화할 수 없는 암호화 방식을 말한다
* 복호화는 암호화된 문자열을 원래 문자열로 되돌려놓는 것을 말한다
* 먼저 고객의 비밀번호를 암호화해서 데이터베이스에 저장한다
* 그리고 로그인할 때마다 입력받은 비밀번호를 암호화해서 데이터베이스에 저장한다
* 로그인할 때마다 입력받은 비밀번호를 같은 암호화 알고리즘으로 암호화한 후, 데이터베이스의 비밀번호와 비교하면 된다
* 원래 비밀번호는 어디에도 저장되지 않고 암호화된 문자열로만 비교하는 것이다
* 단방향 암호화 알고리즘은 주로 해시 기법을 사용한다
* 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식이다
* 입력 문자열의 길이는 다르지만, 출력 문자열의 길이는 고정되어 있는 식으로 말이다

* createHash(알고리즘): 사용할 해시 알고리즘을 넣어준다. md5, sha256, sha512 등이 가능하지만, md5와 sha1은 이미 취약점이 발견되었다. 현재는 sha512 정도로 충분하지만, 나중에 sha512마저도 취약해지면 더 강화된 알고리즘으로 바꿔야 한다
* update(문자열): 변환할 문자열을 넣어준다
* digest(인코딩): 인코딩할 알고리즘을 넣어준다. base64, hes, latin1이 주로 사용되는데 그중 base64가 결과 문자열이 가장 짧아 애용된다. 결과물로 변환된 문자열을 반환한다
*/

/*
양방향 암호화

* 암호화된 문자열을 복호화할 수 있다
* 암호를 복호화하려면 암호화할 때 사용한 키와 같은 키를 사용해야 한다
*/


