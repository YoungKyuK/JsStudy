

let person = {
    name : "김영규",
    age  : 30,
    tall : 178
};
                    // 함수를 통해 key값(value도 가능)의 배열을 반환받음
const personKeys = Object.keys(person);

for ( let i = 0; i<personKeys.length; i++){
    
    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}