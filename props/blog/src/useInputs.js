// 추가로 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있습니다.
// 여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미합니다.

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
