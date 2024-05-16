import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

// useRef는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줍니다.
// 등록 버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 코드를 작성해보겠습니다.
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // useCalllback의 첫번째 파라미터에는 생성하고 싶은 함수를 넣고, 두번째 파라미터에는 배열을 넣으면 됩니다.
  // 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 합니다.

  // onChange처럼 비어 있는 배열을 넣게되면, 컴포넌트가 렌더링될 때 단 한번만 함수가 생성되며,
  // onInsert처럼 배열 안에 number와 list를 넣게되면 인풋 내용이 바뀌거나, 새로운 항목이 추가될 때마다 함수가 생성됩니다.

  // 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터 안에 포함시켜 주어야 합니다.
  // 예를 들어 onChange의 경우 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어 있어도 상관없지만,
  // onInsert는 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어 주어야 합니다.

  // useCallback은 결국 useMemo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 Hook입니다.
  // 숫자, 문자열, 객체처럼 일반값을 재사용하려면 UseMemo를 사용하고.
  // 함수를 재사용하려면 useCallback을 사용하세요.

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        ;
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
