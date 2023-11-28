#React useState

응용프로그램에게 반응성을 추가하는 것이 state입니다.

state가 없다면, 우리 UI는 절대 변하지 않을 것입니다.

state를 사용하려면 import React, {useState} from "react"가 필요합니다.

# 1. const [count,setCount] = useState(0) 처음보는 식이 있습니다.

count([0])은 상태의 값으로 사용하는 변수이며, setCount([1])는 [0]의 상태를 변화시키는 상태변화 함수입니다.

그리고 useState()는 [0]의 초기값을 설정하는 함수입니다.

이런 식은 처음보는 식인데, 처음에는 누구에게나 생소하며 자주보고 자주 쓰다보면 익숙해진다고 합니다.

#2. onIncrease와 onDecrease를 화살표 함수를 이용하여 만들어줍니다. 이때, 1에서 선언한 setCount를 이용하여 count상태값을 변화시킵니다.

#3. <button onClick={onIncrease}> 이처럼 jsx에서는 onClick="onIncrease"따옴표를 이용하지 않고 중괄호를 이용합니다.

        import React, { useState } from "react";
        
          const Counter = () => {
            const [count, setCount] = useState(0);
            // [0]상태의 값으로 사용 [1] ; [0]의 상태를 변화시키는 상태변화 함수
            // useState() ; [0]의 초기값 설정
        
          const onIncrease = () => {
            setCount(count + 1);
          };
          const onDecrease = () => {
            setCount(count - 1);
          };
        
          return (
            <div>
              <h2>{count}</h2>
              <button onClick={onIncrease}>+</button>
              <button onClick={onDecrease}>-</button>
            </div>
          );
        };
        
        export default Counter;
 
        setInput((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value };
        });
   

#상태 업데이트가 이전 상태에 의존하고 있다면 이렇게 써야 합니다.

state변경함수는 인수로 이전 state값을 반환합니다.
