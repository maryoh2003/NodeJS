const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('----------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));

//url 모듈 안에 URL 생성자가 있다. 이 생성자에 주소를 넣어서 객체로 만들면 주소가 부분별로 정리된다
//이 방식이 WHATWG의 url이다. WHATWG에만 있는 username, password, origin, searchParams 속성이 존재한다