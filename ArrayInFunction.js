
//const arr = [1,2,3,4];
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//arr.forEach((elm) => console.log(elm)); // 화살표 함수를 풀어서 쓰면 아래와 같은 형식
// arr.forEach(function (elm){
//     console.log(elm);
// });

// const arr = [1,2,3,4];
//             // method Array map ( return을 할 수 있음 )
// const newArr = arr.map( (elm) => {
//     return elm * 2;
// });

// console.log(newArr);

//const arr = [1,2,3,4];
//let number = 3;
//console.log(arr.includes(number)); // 3을 포함하고 있냐 (비교연산 ===과 같음)
//console.log(arr.indexOf(number)); // 주어진 배열에서 전달받은 인덱스를 반환 (하나도 없으면 -1 반환)

// const arr = [
//     { color : "red"},
//     { color : "black"},
//     { color : "blue"},
//     { color : "green"},
// ];

//let number = 3;

// findIndex
 //console.log(arr.findIndex(( elm ) => elm.color ==="green")); 아래와 같은 표현
// console.log(
//  arr.findIndex(( elm ) => {
//     return elm.color === "red"; 
//  })
// );

// find 메서드
// const element = arr.find((elm) => {
//     return elm.color === "blue"
// });
// console.log(element);
   

// const arr = [
//     { num : 1 , color : "red"},
//     { num : 2 ,color : "black"},
//     { num : 3 ,color : "blue"},
   
// ];

// //console.log(arr.filter((elm) => elm.color === "blue")); // 모든요소를 배열로 반환
// //console.log(arr.slice(0,2)); // 0번 index부터 2번 전까지 짜른다 

// const arr2 = [
//     { num : 4 ,color : "green"},
//     { num : 5 ,color : "blue"}
// ];

//console.log(arr.concat(arr2)); // 하나의배열로 합쳐서 리턴

//let chars = ["나", "다", "가"];

// let numbers = [0, 3, 2, 10, 30, 20];
// // chars.sort(); // 원본배열로 정렬

// // console.log(chars);

// const compare = (a,b) => {
//     // 1. 같다
//     // 2. 크다
//     // 3. 작다
//     if( a > b){
//     // 2. 크다
//         return 1; // 대입 했을 때 크면 뒤로 가고, 작으면 앞으로 가고, 같으면 그 자리를 지킨다. 그래서 정렬이 된다.
//     }

//     if ( a < b){
//     // 3. 작다
//         return -1;
//     }
//     return 0;
// }

// numbers.sort(compare); // 

// console.log(numbers);


const arr = ["어서오세요" , "반갑습니다" , "안녕히가세요"];

console.log(arr.join("")); // 배열을 합침

