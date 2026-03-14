// const cal = (count, setCount, num) => {
//   setCount(count + num);
// };

const Controller = ({ setCount }) => {
  // 컴포넌트 안에 두면 setCount를 직접 참조할 수 있어 코드가 짧아집니다.
  //   const cal = (num) => {
  //     //setCount(count + num);
  //     //setCount의 함수형 업데이트. prev는 리액트가 기억하는 최신 count 값입니다.
  //     setCount((prev) => prev + num);
  //   };

  const btnVal = [-100, -10, -1, 1, 10, 100];

  return (
    <div>
      {/* <button onClick={() => cal(-100)}>-100</button>
      <button onClick={() => cal(-10)}>-10</button>
      <button onClick={() => cal(-1)}>-1</button>
      <button onClick={() => cal(+1)}>+1</button>
      <button onClick={() => cal(+10)}>+10</button>
      <button onClick={() => cal(+100)}>+100</button> */}

      {btnVal.map((num) => (
        <button key={num} onClick={() => setCount((prev) => prev + num)}>
          {num > 0 ? `+${num}` : num}
        </button>
      ))}
    </div>
  );
};

export default Controller;
