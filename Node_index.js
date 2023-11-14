// node.js란 ? 자바스크립트를 웹 브라우저가 아닌 다른곳에서도 쓸 수 있게 만드는 실행환경



// Calc 모듈 불러옴 ( require : node.js의 내장함수 )
const calc = require("./Calc");

console.log(calc.add(1,2));
console.log(calc.add(4,5));
console.log(calc.sub(10,2));