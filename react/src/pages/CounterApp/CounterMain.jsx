import { useState } from "react";

import View from "./View";
import Controller from "./Controller";

const CounterMain = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>CounterMain</div>
      <View count={count} />
      <Controller count={count} setCount={setCount} />
    </div>
  );
};

export default CounterMain;
