import React, { useState } from "react";
import Average from "./Average";

//  state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.
// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
// 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있습니다.

// ref를 사용할 때 : 'DOM을 꼭 직접적으로 건드려야 할 때 사용한다.'
const App = () => {
  return <Average />;
};
export default App;
