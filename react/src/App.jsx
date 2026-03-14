import "./App.css";
import BasicTestMain from "./pages/basicTest/BasicTestMain";
import CounterMain from "./pages/CounterApp/CounterMain";

function App() {
  return (
    <>
      {/* 나의 첫 리액트 프로젝트
      <BasicTestMain /> */}

      {/* 현재값 증감 state 실습 */}
      <CounterMain />
    </>
  );
}

export default App;
