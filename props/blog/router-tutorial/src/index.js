import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// React 18부터는 ReactDom.render를 지원하지 않는다. root.render로 바꿔야 함.

// 프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에서 react-router-dom에
// 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 됩니다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
