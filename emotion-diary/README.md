
React Router

우선 라우팅의 개념을 간단하게 알아보면 사용자가 요청한 링크주소
즉, URL에 맞는 페이지를 찾아서 보여주는 것이라고 할 수 있습니다.
MPA 방식에서는 여러페이지를 분리해두고 페이지간의 이동으로 이 라우트 시스템을 구축을 하지만,
그러나 SPA 방식의 리액트에서 라우트 시스템을 구축하기위해 React Router를 사용을 하는 것 입니다.

React Router 이 라이브러리는 리액트의 라우팅 관련 라이브러리들 중에서 가장 오래됐고, 가장 많이 사용되고 있습니다.
이 라이브러리는 컴포넌트 기반으로 라우팅 시스템을 설정할 수 있습니다.
신규페이지를 불러오지 않는 SPA에서 각각의 URL에 따라 선택된 페이지를 렌더링 해주는 라이브러리 라고 볼 수 있습니다.

1. 설치
npm
      <br /> npm install react-router-dom@6 : 6 버전 중 가장 최신버전 설치

yarn
      yarn add react-router-dom <br />

3. 적용해보기

2-1. 최상단 <BrowserRouter>태그로 감싸기
react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 됩니다.

    // index.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import { BrowserRouter } from 'react-router-dom';
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

2-2. Routes, Route 컴포넌트 사용하기
<Routes>컴포넌트는 여러 Route를 감싸서 그 중에서 해당되는 Route를 렌더링 해주는 역할을 합니다.
그리고 <Route>는 path 속성에는 경로를 element 속성에는 보여주고 싶은 컴포넌트를 넣어주면 됩니다.

    import './App.css';
    import { BrowserRouter, Route, Routes } from 'react-router-dom';
    
    import RouteTest from './components/RouteTest';
    
    import Home from './pages/Home';
    import New from './pages/New';
    import Edit from './pages/Edit';
    import Diary from './pages/Diary';
    
    
    function App() {
      return (
        <BrowserRouter>
          <div className="App">
            <h2>App.js</h2>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/new' element={<New/>} />
              <Route path='/edit' element={<Edit/>} />
              <Route path='/diary' element={<Diary/>} />
            </Routes>
            <RouteTest />
          </div>
        </BrowserRouter>
      );
    }
    
    export default App;

2-3.Link를 이용한 이동
html 페이지에서는 링크를 넣어줄 때 a 태그를 사용하지만,
리액트 라우터를 사용하는 프로젝트에서는 a 태그를 바로 사용하면 안됩니다.
왜냐하면 a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오게 되기 때문입니다.
따라서 Link를 사용해야합니다.
Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고
History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있습니다.

      import { Link } from "react-router-dom";

      const RouteTest = () => {
          return (
              <>
                  <Link to={'/'}>Home</Link>
                  <br />
                  <Link to={'/diary'}>DIARY</Link>
                  <br />
                  <Link to={'/new'}>NEW</Link>
                  <br />
                  <Link to={'/Edit'}>EDIT</Link>
              </>
          );
      };
      
      export default RouteTest;

