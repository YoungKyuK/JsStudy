
// let a = NaN;     // Truthy : 문자열, Infinity, [], 등등
//                  // Falsy : 빈 문자열, null, undefined, 0 , -0, Nan

// if(a){
//     console.log("true");
// } else {
//     console.log("false");
// }

const getName = (person) => {
    if(!person){
        return "객체가 아닙니다";
    }
    return person.name;
};

let person;
const name = getName(person);
console.log(name);

