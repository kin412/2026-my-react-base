import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>홈입니다.</div>
      <div>
        <Link to="/basic/999999?qs=react&page=412">BasicTestMain</Link>
      </div>
      <div>
        <Link to="/counter">CounterMain</Link>
      </div>
    </div>
  );
};

export default Home;
