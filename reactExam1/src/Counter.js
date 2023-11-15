import React,{useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {


    // 0에서 출발
    // 1씩 증가하고
    // 1씩 감소하는
    // count 상태(State)
  
    // 상태가 변화하면 화면을 다시 그린다 ( Rerendering )

    const [ count, setCount ] = useState(initialValue);

    const onIncrease = () => {
        setCount(count + 1 );
    };

    const onDecrease = () => {
        setCount( count - 1);
    }

    return (
        <div>
            <h2>{count}</h2>  
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button> <br /> 
            <OddEvenResult count={count} />          
        </div>
    );
};

// initialValue을 App Component에서 내려준적이 없는데도, defaultProps를 설정해주면
// 에러가 안 난다. 전달받지 못한 값을 설정해줘서 에러방지
Counter.defaultProps = {
    initialValue : 0,
}

export default Counter;