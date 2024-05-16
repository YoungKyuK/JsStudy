import React, { useReducer } from "react";
import useInputs from "./useInputs";

// useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.

// useEffect에서 설정한 함수를 컴포넌트가 화면에 맨처음 렌더링될 때만 실행하고,
// 업데이트 될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어주면 됩니다.

// uesEffect의 두번째 파라미터로 전달 되는 배열 안에 검사하고 싶은 값을 넣어주면, props 안에 있는 value값이 바뀔 때만 수행한다.
// 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup)함수를 반환해주어야 한다.

// useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 값으로 업데이트 해주고 싶을 때 사용하는 Hook입니다.
// 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환하는 함수입니다.
// 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 합니다.

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

// const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     name: "",
//     nickname: "",
//   });
//   const { name, nickname } = state;
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

const Info = () => {
  const [state, onChange] = useInputs({
    nmae: "",
    nickname: "",
  });

  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
