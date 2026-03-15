import "./App.css";
import Home from "./pages/basicTest/Home";
import BasicTestMain from "./pages/basicTest/BasicTestMain";
import CounterMain from "./pages/CounterApp/CounterMain";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      나의 첫 리액트 프로젝트
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic/:id" element={<BasicTestMain />} />
        <Route path="/counter" element={<CounterMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
