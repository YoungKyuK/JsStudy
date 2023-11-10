
function taskA(a, b, cb){   //cb = Callback 함수
    setTimeout(() => {
        const res = a + b; // 지역 상수 ( 함수에서만 동작가능 )
        cb(res);
    }, 3000)
}

function taskB(a, cb){
    setTimeout( ()=> {
        const res = a * 2;
        cb(res);
    },2000)
}

function taskC(a, cb){
    setTimeout( () => {
        const res = a * -1;
        cb(res);
    },1000);
}

// taskA(3,4, (res) => {
//     console.log("A task result :" , res);
// });

// taskB(7, (res) => {
//     console.log("B task result :" , res);
// })

// taskC(14, (res) => {
//     console.log("C task result :" , res);
// })

taskA(4,5,(a_res) => {   // a_res는 익명함수
    console.log("A task result : " , a_res);
    taskB(a_res, (b_res) => {
        console.log("B task result :" , b_res);
       taskC(b_res, (c_res) => {
            console.log("C task tesult :", c_res);
       });
    });
});

console.log("코드 끝"); 