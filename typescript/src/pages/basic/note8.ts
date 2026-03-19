//조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/*
제네릭과 조건부 타입
*/

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

//function removeSpaces(text: string | undefined | null) {
//오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im kin!");
result.toUpperCase();

let result2 = removeSpaces(undefined);

////////////////////////////////////////////////////////////
/*
분산적인 조건부 타입
*/

//[]를 씌우면 분산적이지 않게 적용됨. 세개중에 하나만 number가 아니어도 아닌 판정
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/*
실용적인 예제
*/

type Exclude<T, U> = T extends U ? never : T;

//결과 number | never | boolean
//never는 공집합이라 사라짐-> 최종 결과 number | boolean
//특정 타입만 제거할수가 있음. string이 제거됨
type A = Exclude<number | string | boolean, string>;

//결과 string
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

//////////////////////////////////////////////////////////
/*
infer
inference -> 추론하다
*/

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

//string
type A = ReturnType<FuncA>;

//never
type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/*
예제
*/

// 1. T는 프로미스 타입 이어야한다.
// 2. 프로미스타입의 결과값 타입을 반환해야한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
