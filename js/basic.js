//백틱은 변수의 값을 동적으로 적용가능. = template literal
let myName = "홍길동";
let myLocation = "부산광역시";
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// ?? -> null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log("null 병합 연산자 : ", var4);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log("typeof var7 : ", t1);

printHi(hi, () => console.log("arrow func hi!!"));

//함수 콜백으로 받아서 출력
function printHi(callback1, callback2) {
  console.log("printHi");
  callback1();
  callback2();
}

//함수
function hi() {
  console.log("function hi!!");
}

//화살표 함수
() => console.log("arrow func hi!!");
