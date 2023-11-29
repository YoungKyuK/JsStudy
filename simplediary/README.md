import React, { useState, useEffect } from "react";

    // Textview는 text가 변하지 않는 한 렌더링 되지 않는다(React.memo);
    const Textview = React.memo(({text}) => {
        useEffect( ()=> {
            console.log(`Update :: Text : ${text}`);
        });
        return <div>{text}</div>
    });
    
    const CountView = React.memo(({count}) => {
        useEffect( ()=> {
            console.log(`Update :: Count : ${count}`);
        });
        return <div>{count}</div>
    });
    
    
    const OptimizeTest = () => {
        const [count, setCount ] = useState(1);
        const [text, setText] = useState("");
    
       return <div style={ {padding : 50 }}>

    <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={ ()=> setCount(count + 1)}>+</button>
    </div>

    <div>
        <h2>text</h2>
        <Textview text={text}/>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
       </div>
    };


// component 재사용

export default OptimizeTest;
