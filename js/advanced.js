//단락 평가 - and, or 연산시 하나에 의해 확정이 되면 뒤연산을 하지않음.
// and - 첫번째 피연산자가 falsy한 값 인 경우
// or - 첫번째 피연산자가 truthy한 값 인 경우
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "kin" });

// 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 객체의 구조 분해 할당
let person = {
  name: "kin",
  age: 32,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);

// 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 이름 매칭이기 때문에 순서는 상관없음
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);

//2.1 Object.keys 사용
//-> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

//2.2 Object.values
//-> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

//for of는 배열 순회
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

//2.3 for in - for in은 객체 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
