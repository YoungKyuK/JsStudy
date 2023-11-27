// import React, {useEffect, useState} from 'react';


// const UnmountTest = () => {

//     useEffect( () => {
//         console.log("mount!");

//         return () =>{
//             //Unmount 시점에 실행되게 됨
//             console.log("unmount!");
//         }
//     }, [])

//     return <div>Unmount Testing Component</div>
// }

// const Lifecycle = () => {

//     // const [count, setCount] = useState(0);
//     // const [text, setText] = useState("");

//     // useEffect(()=>{
//     //     console.log("Mount!");
//     // },[]);

//     // useEffect(( ) => {
//     //     console.log("update");
//     // });

//     // useEffect(()=>{
//     //     console.log(`count is update : ${count}`);
//     //         if(count > 5){
//     //             alert("count가 5를 넘었습니다. 따라서 1로 초기화를 진행합니다.");
//     //             setCount(1);
//     //         }
//     // },[count]);

//     // useEffect( () => {
//     //     console.log(`text in update : ${text}`);
//     // },[text])

//     const [isVisible, setIsVisble] = useState(false);
//     const toggle = () => setIsVisble(!isVisible);

//     return (
//     <div style={ {padding : 20 }}>
//         {/* <div>
//             {count}
//             <button onClick={() => setCount(count+1)}>+</button>
//         </div>
//         <input value={text} onChange={(e) => setText(e.target.value)}/> */}
//         <button onClick={toggle}>ON/OFF</button>
//         {isVisible && < UnmountTest/>}
//     </div>
//     );
// };


// export default Lifecycle;