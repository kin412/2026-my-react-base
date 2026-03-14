//return 바깥에서 쓰인 자바스크립트 변수를 return 안에서 쓰려면 {} 중괄호로 감싸줘야함
const ForEx = () => {
  //for문으로
  const arr = [];

  for (let index = 0; index < 7; index++) {
    arr.push(index + "|");
  }

  return <div>{arr}</div>;
};

const ForEx2 = () => {
  //map으로. 리액트에선 이방법을 권장
  const arr2 = [0, 1, 2];
  const arr3 = arr2.map((num) => {
    return num + 1 + "||||";
  });

  return <>{arr3}</>;
};

const Component1 = () => {
  return <div>Component111111</div>;
};

export const Component1_1 = () => {
  return <div>coponent1_1</div>;
};

export const Component1_2 = () => <div>coponent1_2</div>;

export const Component1_3 = () => {
  return (
    <div>
      <div>coponent1_3 start</div>
      {/* //return 바깥에서 쓰인 자바스크립트 변수를 return 안에서 쓰려면 {} 중괄호로 감싸줘야함 */}
      {/* return안에서는 연산을 할수 없음. 억지로 할래야 할수 있지만 비추천함. 
       연산은 return 밖에서 한후에 return에서는 보여주기만.*/}
      {ForEx()}
      {ForEx2()}
      <div>coponent1_3 end</div>
    </div>
  );
};

export default Component1;
