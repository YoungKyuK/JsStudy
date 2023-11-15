// import './App.css';
import MyHeader from './MyHeader';
import Counter from './Counter';

import React from "react";
import Container from './Container';


// 최상위 부모 컴포넌트가 App이다. 
function App() {

  const conterProps = {
    a : 1,
    b : 2 ,
    c : 3, 
    d : 4,
    e : 5,
   
  }

  return (
    // <div className="App"> // 최상위 컴포넌트가 없어도 react.fragment로 대체 할 수 있다. (빈칸으로 냅둬도 인식 가능) 
    // 부모처럼 감싸지지 않고 따로따로 분리할 때 사용
    // {number}는 : {number %2 === 0 ? "짝수" : "홀수"}</b> 
    /* 조건부 렌더링!! */
    // Component에 전달되는 Data : Props라고 한다.
    
    // 객체를 펼쳐서 전달하는 spread 연산자를 사용해야한다. {...변수}
    <Container>   
     <div>
        <MyHeader />
        <Counter {...conterProps} />   
        
    </div>
    </Container>

    
  );
}

// 1개만 내보낼수 있다.
export default App;
