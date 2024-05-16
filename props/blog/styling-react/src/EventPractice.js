import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기 ( 바뀔 내용 입력 )
    };
    setForm(nextForm); // setter 세팅
  };

  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />

      <input
        type="text"
        name="message"
        placeholder="입력"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
