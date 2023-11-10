
// Pending(대기 상태) , Fulfilled(성공), Rejected(실패)
// Pending -> resolve(해결),  Pending -> reject (거부)

// function isPositive( number, resolve, reject ){
//     setTimeout(() => {
//         if(typeof number === 'number'){
//             // 성공 -> resolve
//             resolve(number >=0? "양수" : "음수");
//         } else {
//             // 실패 -> reject
//             reject("주어진 값이 숫자형 값이 아닙니다.");
//         }
//     }, 2000);
// }

// isPositive(10, (res)=>{
//     console.log("성공적으로 수행됨 :", res);
// } , (err)=>{
//     console.log("실패하였음 :", err);
// });

// function isPositiveP(number){
//     const executor = (resolve, reject) => { // executor : 실행자라는 뜻
//         setTimeout( ()=> {
//             if(typeof number === 'number'){
//                 // 성공 -> resolve
//                 console.log(number);
//                 resolve(number >=0? "양수" : "음수");
//             } else {
//                 // 실패 -> reject
//                 reject("주어진 값이 숫자형 값이 아닙니다.");
//             }
//         }, 2000)
//     }

//     const asyncTask = new Promise(executor);
//     return asyncTask;
// }

// const res = isPositiveP(101);

// res.then((res)=> {
//     console.log("작업 성공 :", res)})
// .catch((err)=>{
//     console.log("작업 실패 :" , err)})


function taskA(a,b ,cb){
    setTimeout(() => {
        const res = a+b;
        cb(res);
    }, 3000);
}

function taskB(a,cb){
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a,cb){
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

taskA(3,4)
