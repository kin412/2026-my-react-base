/*
함수 타입 정의
어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 정의
*/

function func1(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

// ?를 쓰면 없어도 됨.
function introduce(name = "kin", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall}`);
  }
}

//introduce(1);
introduce("kin", 35, 175);
introduce("kin", 35);

//...rest[number, number, number]
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

//함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add22: (a: number, b: number) => number = (a: number | string, b) =>
  a + b;
const sub: Operation = (a, b) => a - b;

const aaaaaaa = add22(10, 20);

//호출 시그니처(콜 시그니처)
//객체(타입,인터페이스)자체가 함수로 기능하게 만들면서, 동시에 다른 프로퍼티도 가질수 있게 해준다.
//함수 프로퍼티는 오버로딩도 안되고 실행하려면 객체(타입,인터페이스 구현체).함수() 로 실행해야한다.
//호출 시그니처는 오버로딩이 가능하고 객체(타입,클래스 구현체)() 로 실행가능하다.
//호출 시그니처를 오버로딩으로 만들어도 결국 컴파일되어 자바스크립트가 된다면
//자바스크립트는 이름이 같은 함수를 여러개 가질수 없으므로 구현내용은 같아야한다.

type Operation2 = {
  //함수 프로퍼티
  sayHi: (name: string) => void;

  //호출 시그니처
  (a: number, b: number): number;
  //호출 시그니처는 오버로딩이 가능
  (a: string, b: boolean, c: number): number;
};

//호출시그니처 정의 - 오버로딩이 없는 경우는 이렇게 할수 있음.
// const cal1: Operation2 = (a: number, b: number): number => {
//   return a + b;
// };

//호출시그니처 정의 - 오버로딩이 있는 경우는 결국 자바스크립트 컴파일 시 하나가 되므로 모든 경우를 아우를수 있게 만들어야함.
const cal2: Operation2 = (a: number | string, b: any, c?: any): number => {
  return a + b;
};

//함수 프로퍼티 정의
cal2.sayHi = (name: string) => {
  console.log(name);
};

//호출시그니처 사용
cal2(1, 2);

//함수프로퍼티 사용
cal2.sayHi("kin");

/*
함수타입의 호환성
1. 반환 값의 타입이 호환이 되는가?
2. 매개변수의 타입이 호환이 되는가?
둘다 호환이 되어야 호환된다고 할수 있음.
*/

//기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a2: A = () => 10;
let b2: B = () => 10;

a2 = b2;
//b = a; // 반환값이 다운캐스팅이라 안됨

//기준2. 매개변수가 호환되는가
//2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c2: C = (value) => {};
let d2: D = (value) => {};

// 매개변수 시에는 또 업캐스팅이 안됨. 뭐이런 ㅋㅋ
//c2 = d2;
d2 = c2;

/* 함수의 호환성 - 매개변수 반공변성 예제
// 1. 이미 작성된 함수 (내부에서 자식의 특수 기능 d.bark()를 사용함)
const dogHandler = (d: Dog) => {
    d.bark(); // 🐕 이미 코드에 박혀 있음!
};

// 2. 이 함수를 부모 타입(Animal) 자리에 대입함 (만약 허용된다면). 3번이 안되기때문에 여기서 컴파일 에러가뜸
let animalHandler: (a: Animal) => void = dogHandler;

// 3. 누군가 이 함수를 호출함 (부모 타입이니까 고양이를 넣음)
animalHandler(new Cat());
*/

/*
함수 오버로딩
하나의 함수를 매개변수의 개수나 타입에 따라
여러가지 버전으로 만드는 문법
-> 하나의 함수 func
-> 모든 매개변수의 타입 number
-> ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값을 출력
-> ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
*/

//버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//func(); //오버로드 시그니쳐가 없기때문에 에러
func(1);
//func(1, 2);
func(1, 2, 3);

/*
사용자 정의 타입가드
*/

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

//animal is Dog 이걸 붙이면 리턴값이 boolean타입이 됨.
//반환값이 그냥 boolean이면 그냥 참 거짓으로 끝나고말지만
//사용자 정의 타입가드를 썼다면 참이뜨는 순간 animal의타입은 Dog가 됨.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  //if ("isBark" in animal) {
  if (isDog(animal)) {
    //강아지
    animal;
    //in - isScratch가 animal에 있으면 true, 없으면 false
  } else if ("isScratch" in animal) {
    //고양이
    animal;
  }
}
