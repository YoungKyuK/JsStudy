import React, { useState } from "react";

// 고유한 값이 없을때만 index를 key값으로 사용해야 한다.
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // push 함수는 기존 배열 자체를 변경해주고, concat은 새로운 배열을 만들어 준다.
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); // 순번
    setNames(nextNames); // names값 업데이트
    setInputText(""); // input 입력창 초기화
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id); // id가 아닌것만 출력
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
