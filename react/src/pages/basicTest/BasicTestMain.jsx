import DefaultCom1, { // export default는 한개밖에 안되는 유일한 것이니 이름을 다르게 받을수 있음.
  Component1_1, // default가 아닌 것들은 이름을 다르게 받을수 없음.
  Component1_2, // 구조 분해 할당
  Component1_3,
} from "./Component1";
import Component2 from "./Component2";

/*
function BasicTestMain() {
  return <div>테스트메인</div>;
}
*/
const BasicTestMain = () => {
  return (
    <div>
      테스트메인
      <DefaultCom1 />
      <Component1_1 />
      <Component1_2 />
      <Component1_3 />
      <Component2 />
    </div>
  );
};

export default BasicTestMain;
