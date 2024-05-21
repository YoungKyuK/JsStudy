import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  const [color, SetColor] = useState("black");

  // 배열이나 객체를 업데이트 할 때는 사본을 만들고, 그 사본에 값을 업데이트한 후, 그 사본의 상태를
  // setState 혹은 setter 함수를 통해 업데이트합니다.

  // 객체 다루기
  //   const object = { a: 1, b: 2, c: 3 };
  //   const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기

  // 배열 다루기
  //   const array = [
  //     { id: 1, value: true },
  //     { id: 2, value: true },
  //     { id: 3, value: false }
  //   ];

  //   let nextArray = array.concat({ id: 4 }); // 새 항목 추가
  //   nextArray.filter((item) => item.id !== 2); // id가 2인 항목제거
  //   nextArray.map(item.id === 1 ? { ...item, value: false } : item); // id가 1인 항목의 value값을 false로 설정

  // prop도 무조건 값이 고정적이지 않다.
  // 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때
  // 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있습니다.

  // DOM 요소에만 이벤트를 설정할 수 있습니다
  // 즉 div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다.



  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => SetColor("red")}>
        빨간색
      </button>

      <button style={{ color: "green" }} onClick={() => SetColor("green")}>
        초록색
      </button>

      <button style={{ color: "blue" }} onClick={() => SetColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
