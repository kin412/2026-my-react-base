import Component1 from "./Component1";
import DefaultCom1, { // export default는 한개밖에 안되는 유일한 것이니 이름을 다르게 받을수 있음.
  Component1_1, // default가 아닌 것들은 이름을 다르게 받을수 없음.
  Component1_2, // 구조 분해 할당
  Component1_3,
} from "./Component1";
import Component2 from "./Component2";
import StatePropComponent from "./StatePropComponent";
import ReactMemoComponent from "./ReactMemoComponent";

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

useRef
값을 저장하지만 리렌더링을 하지않음. 내부로직용 변수나, dom에 접근해 특정 태그 조작 시 사용

useEffect
  리액트의 본분은 화면을 그리는 것. 그외에 화면 그리는 것과 직접 상관없는 작업들을 side Effect 부수효과
  라고 부르며 이걸 useEffect가 처리. 주로 api호출 이벤트 리스너, 타이머, 외부라이브러리 연동에 쓰임
  타이머나 이벤트 등록시 cleanup 함수 해야 메모리 낭비가 없음.
  
  두번째 인자가 없으면, 리렌더링 될때마다 실행 - 잘안씀

  , [] - 두번째 인자로 빈배열을 넣으면, 컴포넌트가 화면에 처음 보일때 딱 한번 실행.
  api 호출이나 초기설정 시 사용 

  배열에 값을 넣어주면 해당값이 변할때마다 실행

useReducer
상태컨트롤과 리렌더링 한다는 점이 useState와 동일함.
다만 dispatch를 통해 reduce함수를 실행가능하므로
복잡한 처리가 필요하다면 useReducer, 필요없다면 state 를 쓰면 됨.

useMemo
어떤 복잡한 처리를 하는 함수를 바뀌는 것이 없는데도 리렌더링할때마다 실행한다는 것은
메모리 낭비면서 동시에 복잡한 처리에 필요한 시간이 낭비된다는 것임
따라서, 해당 값을 캐싱해서 값이 변경 되었을때만 계산을 하게 만드는 게 memo

React.memo와 useCallback
리액트는 부모가 리렌더링 되면 자식들도 리렌더링 된다.
그럼 자식에 복잡한 연산이 있을경우 다시 실행되므로, 시간과 메모리를 낭비한다.
자식 컴포넌트에 변화가 없다면 해당컴포넌트를 useMemo처럼 캐싱해 두는게 React.memo

근데 문제가 하나있다. React.memo가 캐싱해두는건 좋은데 만약 해당 자식 컴포넌트가
부모 컴포넌트로 부터 객체또는 배열타입 props를 받는다면 React.memo 하나만으로는 해결되지 않는다.
원시타입은 값을 저장해두면 그 값 자체를 비교한다. 그래서 리렌더링 되어도 값이 같다면
부모로부터 다시 props를 받아도 같은 값이기 때문에 React.memo 만으로 리렌더링을 막을 수 있다.
하지만 부모 컴포넌트로부터 객체 또는 배열타입 props를 받는다면
부모 컴포넌트가 리렌더링 될때 해당 객체는 안에 같은 멤버를 가지고 있다 하더라도,
리렌더링되면서 새로운 주소값을 가지게 된다.
새로운 주소값을 가지게 된다는 것은 새로운 객체로 취급된다는 이야기 이며,
결국 자식 컴포넌트는 새로운 props를 받은 것이기 때문에 변화가 생겼으므로 리렌더링된다.

그래서 React.memo을 쓰면서 같이 써야하는 것이 useCallback 이다.
useCallback은 함수를 저장(캐싱)한다. 함수에 들어오는 값이 변하지 않는다면
useCallback은 리렌더링되어도 이를 같은 함수라고 보고, 캐싱된 걸 자식 컴포넌트에게 던지기 때문에
자식 컴포넌트는 리렌더링 후 props로 들어온 함수를 보더라도
React.memo로 전과 같은 함수라 판단하기 때문에 리렌더링이 일어나지 않는다.

custom hook ex) ../hooks/useExHook.js
일반 자바스크립트 함수와 custom hook의 차이는 딱 두가지다.
함수명앞에 use가 붙고, 함수안에서 리액트 기본 내장 훅을 한개이상 사용하면 custom hook이다.
함수와 마찬가지로 훅에 대한 반복되는 작업을 custom hook으로 뺀다. 
custom hook은 안에 여러가지 내장 훅들을 가질 수 있다.
그 내장 훅들 마다 독립적인 상태 저장소를 가지므로,
custom hook은 여러개의 상태 저장소를 가질수 있다.

Context
props는 부모의 데이터를 자식에게 넘길때 유용하다.
하지만 부모가 자식의 자식의 자식의 자식의 자식에게 넘겨야할 데이터가 있을땐 어떻게 해야할까?
props으로 계속 넘겨야할까? 이건 매우 귀찮다 이문제를 props drilling 이라고 한다.
이런 경우 context를 쓰면 드릴링 하지않고 바로 원하는 자식에게 넘길수 있다.

Router
주소에 맞는 컴포넌트를 화면에 갈아끼워줌.
컨트롤러와 비슷함.
단 이녀석은 app.jsx에 딱 한개만 둠.

useNavigate
페이지 이동이다. Link와 다른점은 다음과 같다.
Link - 스프링프로젝트에서 그냥 화면단의 a태그라 보면 된다. 
useNavigate - Link는 클릭해야 하지만, useNavigate는 특정 로직의 끝에서 그 요청으로 바로간다.

useParams
스프링의 @PathVariable

useSearchParams
스프링의 쿼리스트링

*/
import {
  useState,
  useRef,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from "react";
import MiddleComponent from "./MiddleComponent";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

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

//context
export const FirstContext = createContext();

//reducer
const reducerFunc = (state, action) => {
  if (action.type === "INCREMENT") {
    return { reducerCount: state.reducerCount + 1 };
  } else {
    return { reducerCount: state.reducerCount - 1 };
  }
};

const BasicTestMain = () => {
  //state
  const [count, setCount] = useState(7);
  //useRef
  const fontColor = useRef();

  //useRef
  const changeRefColor = () => {
    fontColor.current.style.color = "green";
  };

  //useEffect
  useEffect(() => {
    console.log("화면 초기화 시 딱한번 실행");
  }, []);

  useEffect(() => {
    console.log("useEffect count변할때 실행 타이밍");
  }, [count]);

  //useReducer
  //dispatch를 호출하면 state를 매개변수로 안넣어도 리액트가 자동으로 넣어줌
  const [state, dispatch] = useReducer(reducerFunc, { reducerCount: 0 });

  //useMemo
  const expensiveResult = useMemo(() => {
    console.log("useMemo 엄청나게 복잡한 로직");
    return count * 10;
  }, [count]);

  //useCallback  적용전
  // const useCallbackTest = (text) => {
  //   return { me: text };
  // };

  //useCallback 적용 후
  //부모 컴포넌트로 부터 외부값을 받고, 그걸 감지해야한다면
  //두번째 인자인 빈배열에 해당 변수를 넣어주면 됨.
  const useCallbackTest = useCallback((text) => {
    return { me: text };
  }, []);

  //context
  const [user, setUser] = useState("kin");

  //useNavigate
  const nvg = useNavigate();

  const navi = () => {
    console.log("지루하고 현학적인 로직");
    nvg("/");
  };

  //useParams
  const { id } = useParams();

  //useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();

  const qs = searchParams.get("qs");
  const page = searchParams.get("page");

  const changeQuery = () => {
    // 코드로 쿼리 스트링 변경 (주소창이 /basic?qs=vue&page=2 로 바뀜)
    setSearchParams({ qs: "vue", page: "2" });
  };

  return (
    <div>
      테스트메인
      <div>
        {/* <Link to="/">홈으로</Link> */}
        <button onClick={navi}>홈으로</button>
      </div>
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
      <p ref={fontColor} onClick={changeRefColor}>
        현재 클릭 횟수 : {count}
      </p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <StatePropComponent param={count} />
      <div>---------------</div>
      <div>---------------</div>
      <div>reducer</div>
      <div>현재 reducerCount : {state.reducerCount} </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -1
        </button>
      </div>
      <div>---------------</div>
      <div>---------------</div>
      <div>memo연산 결과 : {expensiveResult}</div>
      <div>---------------</div>
      <div>---------------</div>
      {/* <ReactMemoComponent name={useCallbackTest()} /> */}
      <ReactMemoComponent name={useCallbackTest} />
      <div>---------------</div>
      <div>---------------</div>
      <div>context</div>
      <FirstContext.Provider value={user}>
        {/* 중간단계는 props 전달 안함 */}
        <MiddleComponent />
      </FirstContext.Provider>
      <div>---------------</div>
      <div>---------------</div>
      <div>useParams id= {id}</div>
      <div>---------------</div>
      <div>---------------</div>
      <div>useSearchParams</div>
      <div>qs = {qs}</div>
      <div>page = {page}</div>
      <div>
        <button onClick={changeQuery}>쿼리스트링 변경</button>
      </div>
    </div>
  );
};

export default BasicTestMain;
