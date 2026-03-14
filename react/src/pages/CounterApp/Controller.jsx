const cal = (count, setCount, num) => {
  setCount(count + num);
};

const Controller = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => cal(count, setCount, -100)}>-100</button>
      <button onClick={() => cal(count, setCount, -10)}>-10</button>
      <button onClick={() => cal(count, setCount, -1)}>-1</button>
      <button onClick={() => cal(count, setCount, +1)}>+1</button>
      <button onClick={() => cal(count, setCount, +10)}>+10</button>
      <button onClick={() => cal(count, setCount, +100)}>+100</button>
    </div>
  );
};

export default Controller;
