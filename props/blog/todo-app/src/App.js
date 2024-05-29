import React, { useReducer, useCallback, useRef } from 'react';
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

// useReducer action, dispatch 사용
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // { type: 'REMOVE', id: 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
// useReducer를 사용할 때는 원래 두 번째 파라미터에 초기 상태를 넣어 주어야 합니다. 지금은 그 대신 두 번째 파라미터에 undefined를 넣고,
// 세 번째 파라미터에 초기 상태를 만들어 주는 함수인 createBulkTodos를 넣어 주었는데요.
//  이렇게 하면 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수가 호출됩니다.
// useReducer는 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점이 있다.

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

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

    dispatch({ type: 'INSERT', todo });
    // setTodos((todos) => todos.concat(todo)); useState로 함수형 업데이트할 때 사용
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
