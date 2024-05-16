import React, { useState } from "react";

const Test = () => {
  const [count, SetCount] = useState(0);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => SetCount(count + 1)}> + </button>
      <button onClick={() => SetCount(count - 1)}>-</button>
    </div>
  );
};

export default Test;
