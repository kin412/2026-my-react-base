import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>홈입니다.</div>
      <div>
        <Link to="/basic">BasicTestMain</Link>
      </div>
      <div>
        <Link to="/counter">CounterMain</Link>
      </div>
    </div>
  );
};

export default Home;
