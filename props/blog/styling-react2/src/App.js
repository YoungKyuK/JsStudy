import React, { Component } from "react";
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
// <div>로 감싸는 이유 : 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다.
// 꼭 div로 감싸지 않아도 됨 ex) <Fragment>, <>

// JSX가 단순히 DOM 요소를 렌더링하는 기능밖에 없었다면 아쉬웠을 것이다.
// JSX 안에서는 자바스크립트 표현식을 쓸 수 있습니다.

// AND 연산자를 이용해서 AND는 둘다 만족해야 하므로, 첫번째만 보고 틀리면 바로 NULL 처리
// ex) return <div>{name === "리액트" && <h1>리액트입니다.</h1>};</div>;
// 주의할 점은 falsy한 값인 0은 예외적으로 화면에 출력이 된다.

// 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 됩니다.

// 인라인 스타일링
// 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 합니다.

// name을 App.js에서 정의해도된다.
// ex) return <MyComponent name="React"></MyComponent>;

// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. const { state, setState} = useState(현재값);

// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
// 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있습니다.

// props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 한다.
// ex) App component에서 MyComponent를 사용할 때, props를 바꾸어 주어야 값이 변경된다.
// 반면 MyComponent에서는 전달받은 name 값을 직접 바꿀 수 없다.

// HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법이 있습니다.
// 바로 ref(reference의 줄임말) 개념입니다.
// react의 id값 ref
// 사용하는 이유? "DOM을 꼭 직접적으로 건드려야 할 때" 사용한다.

// 컴포넌트 업데이트 하는 경우 4가지
// 1. props가 바뀔 때, 2. state가 바뀔 때, 3. 부모 컴포넌트가 리렌더링될 때, 4. this.forceUpdate로 강제로 렌더링을 트리거할 때

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
 
class App extends Component {
  state = {
    color: '#000000'
  }
 
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
        <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}
 
export default App;
