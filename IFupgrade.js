
// function isKoreanFood(food){
//     // if (food === '불고기' || food === '비빔밥' || food === '떡볶이'){
//     //     return true;
//     // }
//     // return false;  // 조건식이 너무 많아지면 쓰기 힘들다 그래서 includes 메서드를 사용한다.

//     if( ['불고기', '비빔밥', '떡볶이'].includes(food)){
//         return true;
//     }
//     return false;
// }

// const food1 = isKoreanFood("불고기");
// const food2 = isKoreanFood("파스타");
// console.log(food1);
// console.log(food2);

// const getMeal = (mealType) => {
//     if(mealType ==='한식')return "불고기";
//     if(mealType ==='양식')return "파스타";
//     if(mealType ==='중식')return "멘보샤";
//     if(mealType ==='일식')return "스시";
//     return "굶기";
// } 

// console.log(getMeal("한식"));
// console.log(getMeal("일식"));
// console.log(getMeal());

const meal = {
    한식 : "불고기",
    일식 : "스시",
    양식 : "스테이크",
    인도식 : "카레"   
};

const getMeal = (mealType) => {
    return meal[mealType] || "굶기"; // 객체를 사용할때는 []표기법으로 사용한다.
};

console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal());
