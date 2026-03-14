import Component1 from "./Component1";
import DefaultCom1, { // export default는 한개밖에 안되는 유일한 것이니 이름을 다르게 받을수 있음.
  Component1_1, // default가 아닌 것들은 이름을 다르게 받을수 없음.
  Component1_2, // 구조 분해 할당
  Component1_3,
} from "./Component1";
import Component2 from "./Component2";
import StatePropComponent from "./StatePropComponent";

/* state도 훅이다.
훅들은 기본적으로 상태저장소를 가지고 있음.
그래서 리렌더링이 되더라도 값들이 유지됨.
그렇지만 모든 훅이 리렌더링을 실행하는 것은아님을 알아야함
state
const [count, setCount] = useState(초기 count값);
setCount실행 시 해당 컴포넌트 및 해당 컴포넌트의 자식 컴포넌트를 리렌더링 시키고 count 값을 유지함.
그러므로 위치가 중요함.
원시타입은 값이 바뀌면 주소도 바뀌지만 객체나 배열은 내부 내용물만 바뀌면 주소(참조값)은 그대로 이므로
바뀌지않았다고 판단해 리렌더링을 하지않음. 
이점에 유의하여 객체나 배열은 ... 스프레드 연산자로 기존의 값들과 신규 값들을 새로 만들어서 저장해야함.
*/
import { useState } from "react";

/*
function BasicTestMain() {
  return <div>테스트메인</div>;
}
*/

// const Counter = () => {
//   const [count, setCount] = useState(7);
//   console.log("나 다시 그려짐!");
//   return (
//     <div>
//       <p> 현재 클릭 횟수 : {count}</p>
//       <button onClick={() => setCount(count + 1)}>클릭</button>
//     </div>
//   );
// };

const BasicTestMain = () => {
  //state
  const [count, setCount] = useState(7);

  return (
    <div>
      테스트메인
      <DefaultCom1 />
      <Component1_1 />
      <Component1_2 />
      <Component1_3 />
      <div>---------------</div>
      <div>---------------</div>
      {/* 객체를 매개변수로 받아서 구조분해할당하는 것은 바닐라 스크립트에서도 가능하다
      다만 화면단의 propertie를 바닐라 스크립트에서 받을수 있게한게 props일뿐이다. */}
      <Component2 p1={10} p2={20} mp1={900} mp2={200} />
      <div>---------------</div>
      <div>---------------</div>
      <div>state</div>
      {/* <Counter /> */}
      <p> 현재 클릭 횟수 : {count}</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <StatePropComponent param={count} />
    </div>
  );
};

export default BasicTestMain;
