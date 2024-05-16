import React, { useReducer } from "react";

// 현재 상태(state), 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환하는 함수
function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 변환
      return state;
  }
}

const Counter = () => {
  // 첫번째 파라미터는 리듀서 함수(reducer)를 넣고, 두번째는 해당 리듀서의 기본값( { value: 0 } )을 넣어줍니다.
  // 여기서 state는 현재 가리키고 있는 상태고, dispatch는 액션을 발생시키는 함수입니다.

  // useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것입니다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
