# JsStudy

#Promise와 Async&Await

Promise란? 비동기 처리에 활용되는 객체

- 원할한 데이터 통신을 위해 활용 ; 서버에 데이터를 요청했을 때, 데이터를 모두 받아오기전에 웹에 출력하는 오류 방지

구조 : ex) new Promise((resolve, reject)  => {}) ; 대기 상태인 Promise객체를 생성하며 콜백 함수 선언

then()을 활용해 결과 값을 받을 수 있음

#호출 성공인 resolve와 then
ex)
function getData(){
    return new Promise( (resolve, reject) => {
      let data = 10;
      resolve(data);
    })
  }
getData().then((resolvedData) => console.log(resolvedData));

#호출 실패인 reject와 catch
ex)
function getData() {
  return new Promise((resolve, reject) => {
    reject(new Error("This is rejected!"));
  });
}
getData().catch((err) => console.log(err));

#Promise의 객체 연결
ex)
function increment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  })
    .then((res) => {
      console.log(res);
      return ++res;
    })
    .then((res) => {
      console.log(res);
      return ++res;
    });
}
increment();

#Async & Await : 비동기 처리를 할 때 사용하는 Promise의 단점을 보완하기 위해 ES7에서 추가된 키워드

- 비동기 코드를 마치 동기 코드처럼 보이게 작성할 수 있음

함수명 앞에 async를 붙히면 됨 ex) async function() { return "id" }
 

#async와 await를 활용한 함수
ex)
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync1() {
  await delay(3000);
  return "hello async";
}
async function main() {
  const res = await helloAsync1();
  console.log(res);
}
main();

- await이 붙은 함수는 동기적으로 처리함 ; 해당 함수가 실행되기 전까지 아래 함수를 실행하지 않음

- await은 async붙은 함수에서만 사용 가능


