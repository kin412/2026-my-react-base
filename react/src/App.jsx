import "./App.css";
import BasicTestMain from "./pages/basicTest/BasicTestMain";
import Login from "./pages/login/Login"; // 만든 페이지를 가져옵니다.

function App() {
  return (
    <>
      나의 첫 리액트 프로젝트
      {/* 가져온 컴포넌트를 사용합니다. */}
      <BasicTestMain />
    </>
  );
}

export default App;
