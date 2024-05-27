import React, { useCallback, useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: 1,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 컴포넌트의 리렌더링 발생
  // 1. 자신이 전달받은 props가 변경될 때
  // 2. 자신의 state가 바뀔 떄
  // 3. 부모 컴포넌트가 리렌더링 될 때
  // 4. forceUpdate 함수가 실행될 때

  //  props로 전달해야 할 함수를 만들 때는 useCallback을 사용하여 함수를 감싸는 것을 습관화 해야한다.
  // 고유값으로 사용될 ID
  // ref를 사용하여 변수 담기

  // prop가 바뀌지 않았으면 Virtual DOM에 새로 렌더링 하는것 조차 하지않고, 컴포넌트의 결과물을 재사용 하는 최적화 작업을 한다.
  // 이 작업을 할 때, 함수를 재사용 하는것이 필수인데 그게 useCallback 이다.
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
    console.log(text);
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
