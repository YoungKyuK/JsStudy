

// console.log(false && true); // 앞이 false면 뒤에껀 계산도 안함 둘다 참이어야 함

// console.log( true || false);  // 앞이 true면 뒤에껀 계산도 안함 둘중에 하나만 true면 참

const getName = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다";
};

// const getName = function (person){
//     const name = person && person.name;
//     return name || "객체가 아닙니다";
// }


//let person = {name : "홍길동"};
let person = null;
const name = getName(person);
console.log(name);