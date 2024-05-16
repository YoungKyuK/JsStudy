import React, { useState } from "react";

// 자바스크립트 배열의 map() 함수
// 자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링 할 수 있습니다.
// map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후
// 그 결과로 새로운 배열을 생성합니다.

// 문법 arr.map(callback, [thisArg])
// callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지입니다.
// - currentValue: 현재 처리하고 있는 요소, - index: 현재 처리하고 있는 요소의 index 값, - array: 현재 처리하고 있는 원본 배열
// thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스

// key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 됩니다.
// key 값은 언제나 유일.. 따라서 데이터가 가진 고유값을 key 값으로 설정해야 합니다.
// 게시판의 게시물을 렌더링 한다면 게시물 번호를 key값으로 설정해야 합니다.
// ex) const articleList = articles.map(article =>  <Article> title={article.title} />);
// 고유번호가 없을 때는 map 함수에 전달되는 콜백 함수의 인수인 index값을 사용하면 된다.
// index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링을 하지 못합니다.

// concat은 새로운 배열을 만들어 준다, push함수는 기존 배열 자체를 변경해준다.

//상태 안에서 배열을 변형할 때는 배열에 직접 접근하여 수정하는 것이 아니라 
//concat, filter 등의 배열 내장 함수를 사용하여 새로운 배열을 만든 후, 이를 새로운 상태로 설정해 주어야 한다는 점을 명심하세요. 

const IterationSample = () => {
  
  const [names, setNames] = useState([
    { id: 1, text: '눈사람'},
    { id: 2, text: '얼음'},
    { id: 3, text: '눈'},
    { id: 4, text: '바람'}
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text : inputText
    });

    setNextId(nextId + 1); //nextId 값에 1을 더해준다.
    setNames(nextNames) // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  };

  const onRemove = id => {
    const nextNames = names.filter( name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map( name => ( 
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
    ));
  return (
  <>
    <input value={inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    <ul>{namesList}</ul>
  </>
  );
};

export default IterationSample;
