// const cookie = {
//     base : "cookie",
//     madeIn : "korea"
// };

// const chocochipCookie = {
//     ...cookie,  // 객체의 값을 새로운 객체에 펼쳐주는 역할( 스프레드 )
//     toping : "chocochip"
// };

// const blueberryCookie = {
//     ...cookie,
//     toping : "blueberry"
// };

// const strawberryCookie = {
//     ...cookie,
//     toping : "strawberry"
// };

// console.log(chocochipCookie);
// console.log(blueberryCookie);
// console.log(strawberryCookie);

const noTopingCookies = ["촉촉한쿠키","안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies,"함정쿠키", ...topingCookies]; // 배열의 원소를 펼칠 수 있다.
console.log(allCookies);