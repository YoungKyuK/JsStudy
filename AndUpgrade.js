//let arr = ["one" , "two" , "three" ];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
//let [one, two, three] = arr; // 위에꺼를 한 줄로 표현 ( []로 배열의 기본변수 비구조화 할당 )

// let [one, two, three , four = "four"] = ["one" , "two", "three"]; // 배열의 선언분리 비구조화 할당이란 방법도 있다.

// console.log(one, two, three, four);

// 스왑도 가능하다
let a = 10;
let b = 20;
[a,b] = [b,a]; // a에는 b가 할당, b에는 a가 할당
console.log( a,b);

let object = {
    one : "one",
    two : "two",
    three : "three",
    name : "홍길동"
};
                                        // 기본값 할당가능
let { name , one:oneOne , two ,three, abc="four"}  = object; // 순서가 아니라 key값을 기준으로 할당한다!!
console.log( oneOne, two, three, name , abc );