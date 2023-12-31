import React, { useState, useEffect } from "react";


const CounterA = React.memo(({count}) => {

    useEffect( ()=>{
        console.log(`CounterA Update - count ${count}`);
    })
    return <div>{count}</div>
});

// 객체를 비교할 때는 얕은비교( 객체의 주소에 의한 비교 )로 해서 CounterB는 리렌더링 된다.
const CounterB = ({obj}) => {

    useEffect( ()=> {
        console.log(`CounterB Update - count ${obj.count}`);
    })
    return <div>{obj.count}</div>
};

const areEqual = (prevProps, nextProps) => {
    // return true // 이전 프롭스와 현재 프롭스가 같다 -> 리렌더링을 일으키지 않는다.
    // return false // 이전과 현재가 다르다 -> 리렌더링을 일으킨다.
    return prevProps.obj.count === nextProps.obj.count;
};

// CounterB는 areEqual 함수에 따라 리렌더링이 결정된다.
const MemoizedCounterB = React.memo(CounterB, areEqual);


const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1
    });

   return <div style={ {padding : 50 }}>
    <div>
       <h2>Counter A</h2>
       <CounterA count={count}/>
       <button onClick={() =>setCount(count)}>A button</button>
    </div>

    <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj}/>
        <button onClick={() =>setObj({
            count: obj.count
        })}>B button</button>
    </div>

   </div>
};


// component 재사용

export default OptimizeTest;