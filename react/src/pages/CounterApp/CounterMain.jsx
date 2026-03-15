import { useState } from "react";

import View from "./View";
import Controller from "./Controller";
import { Link } from "react-router-dom";

const CounterMain = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>CounterMain</div>
      <div>
        <Link to="/">홈으로</Link>
      </div>
      <View count={count} />
      <Controller setCount={setCount} />
    </div>
  );
};

export default CounterMain;
