
// let a = 3;
// a>= 0 ? console.log("양수") : console.log("음수");

// let a = [1,2];
// const arr =  a>= [].length ?"빈 배열": "안 빈 배열";
// console.log(arr);

// let a = [];

// const result = a ? true : false;
// console.log(result);

// 학점 계산 프로그램
// 90점 이상일 경우 A+
// 50점 이상 B+
// 둘다 아니면 F
// let score = 100;

// score >=90 
// ? console.log("A+") 
// : score >= 50 
// ? console.log("B+") 
// : console.log("F");  // 이중 삼항연산자는 가독성이 떨어지므로 if문으로 하는게 좋다.

let score = 100;

if( score>=90){
    console.log("A+");
} else if( score >=80){
    console.log("B+");   
} else {
    console.log("F");
}