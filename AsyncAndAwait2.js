
function delay(ms){
    return new Promise( (resolve) => {
        setTimeout(resolve,ms);
    })
}

async function helloAsync(){
    // return delay(3000).then(()=>{
    //     return "hello Async";
    // });  이 코드를 await로 바꿔버리면 이렇게 된다.
    await delay(3000);   // await 줄에는 동기적으로 한 것 처럼 변한다.
    return "hello async";    
}

async function main (){
   const res = await helloAsync();
   console.log(res);
};

main();




