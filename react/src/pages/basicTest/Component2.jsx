import util_plus, { util_minus } from "./util";

const Component2 = (props) => {
  const plusResult = propTestPlus(props);
  const minusResult = propTestMinus(props);

  console.log(`plusResult : ${plusResult}`);
  console.log(`minusResult : ${minusResult}`);

  return (
    <div>
      <div>Component22222 </div>
      <div>plusResult : ${plusResult}</div>
      <div>minusResult : ${minusResult}</div>
    </div>
  );
};

const propTestPlus = (props) => {
  const plus = util_plus(props.p1, props.p2);
  return plus;
};

const propTestMinus = ({ mp1, mp2 }) => {
  const minus = util_minus(mp1, mp2);
  return minus;
};

export default Component2;
