import { useState } from "react";

const [counter, setCounter] = useState(0);
console.log(counter); // 0
setCounter(1); // 1 and reflow
console.log(counter); // 1

export default example;
