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
      <div>---------------</div>
      <div>---------------</div>
      {/* 객체를 매개변수로 받아서 구조분해할당하는 것은 바닐라 스크립트에서도 가능하다
      다만 화면단의 propertie를 바닐라 스크립트에서 받을수 있게한게 props일뿐이다. */}
      <Component2 p1={10} p2={20} mp1={900} mp2={200} />
    </div>
  );
};

export default BasicTestMain;
