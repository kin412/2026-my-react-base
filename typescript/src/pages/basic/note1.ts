// ts파일은 원래 util이나 lib 하위경로에 있어야하지만 공부 편의상 pages 경로아래 에둠

let numArr: number[] = [1, 2, 3];

//제네릭
let strArr: Array<string> = ["hi", "hello", "안녕"];

let mutiArr: (number | string)[] = [1, 2, "gggg", 3, "aaaaa", 4];

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 6, 7],
];

//튜플 - js엔 없고 타입 스크립트에만 있음. 길이와 타입이 고정된 배열
//길이는 딱 두칸이고 첫칸에는 number가, 두번째 칸에는 string이 와야함
let tup1: [number, string] = [1, "hi"];
//배열메서드 사용 시, 튜플의 길이 제한이 발동하지 않음.
//tup1.push(1);
//tup1.pop();

let user: {
  id: string;
  name: string;
} = {
  id: "kin1234",
  name: "kim",
};

user.id;

type TUser = {
  id: string;
  name: string;
  age: number;
};

//변수와 같이 동일한 스코프내에선 동일한 이름으로 생성 불가
//type User = {};
//아래는 스코프가 함수안쪽이므로 가능
function func() {
  // 바깥의 User를 미리 다른 이름으로 정의 해야 쓸수 있음.
  type ExternalUser = TUser;

  //내부에서 재정의 - 내부에서는 이형식으로 쓰이게됨.
  type TUser = {};
}

let tuser1: TUser = {
  id: "kin",
  name: "kim",
  age: 35,
};

//인덱스 시그니처
type CountryCodes = {
  //key의 이름이 뭔지는 모르겠지만 string형 이어야함.
  [key: string]: string;
  // 위에서 모든 문자열을 키로 잡고 있으므로 동시에 있으면 효과없음. 만약 위가 없다면
  // 아래의 korea라는 이름의 멤버가 string타입 값을 가지고 있어야한다
  //korea: string;
};

let cc: CountryCodes = {
  //이게 아예 비어있으면 에러가 아님. 인덱스 시그니처는 위반만 안하면 문제가 없음.
  us: "대한민국",
  // 키는 숫자를 적어도 내부적으로 '123'으로 인식함. 따라어 이 123은 숫자가 아닌 문자열임
  // 숫자로 인식하게 하려면 여기서는 할수없고 위의 인덱스 시그니처를 [key: number]: string; 로 변경해야함
  // 변경하게 될경우 위의 us는 문자열이므로 에러
  123: "일이삼",
};

//enum타입

enum Language {
  korean = "ko",
  english = "en",
}

// 위를 자바스크립트 객체로 바꾸면?
const jsObject = {
  korea: "ko",
  english: "en",
};

const user10 = {
  name: "kin",
  language: Language.korean,
  lang2: jsObject.korea,
};

//any - 특정 변수의 타입을 확실히 모를때 사용. 모든 타입 허용
let anyVar: any = 10;
anyVar = "aaa";
anyVar = true;

//toUpperCase는 string용 함순데 anyVar에 string형이 들어오면 문제가 없겠지만
//다른 타입이 들어오면 문제가됨. 이래서 any는 남발하면 안됨
anyVar.toUpperCase();

//unkwoun - 알수 없는 타입. 모든 타입의 값을 담을 수 있지만. 이 타입을 활용하려면 정제해서 사용해야함
//지금은 뭔지 모르겠는데, 나중에 내가 타입좁히기나 단언으로 정제해서 쓸게
//실무에서 api응답이 무슨타입인지 정확히 모르겠을때
let unknownVar: unknown;
unknownVar = "aaa";
unknownVar = 1;
unknownVar = () => {};

let numBase;
//정제해야만 넣을 수 있음.
//if문 조건의 typeof는 타입을 비교하기 때문에 "number"는 문자열이 아니라 number 타입을 뜻함.
if (typeof unknownVar === "number") {
  numBase = unknownVar;
}

//혹은 타입단언 as로  확신할때 사용
//이렇게 하면 unknownVar를 number로 확정짓기때문에 가능함.
//다만 단언시는 다른값이 들어오면 에러이기때문에 좋지않음 위처럼 타입좁히기가 훨씬안전함
numBase = unknownVar as number;

// void -> 아무것도 없음

const asd = (): void => {
  let asddd: string = "asdad";
  //void 이기때문에 return이 있으면 안됨
  //return "asdad";
};

function func1(): void {
  console.log("777");
}

//void 타입 변수에는 아무것도 담을수 없음
let aa: void;
//에러
//aa = 123;

//never - 존재하지 않는, 불가능한 타입
//의도적으로 에러를 던지는 함수, 무한루프 함수 등은 nerver. 여긴오면 안됨을 의미
// '전화번호'나 '이메일' 중 하나는 반드시 있어야 하지만, 둘 다 없을 순 없는 경우
type Contact =
  | { type: "phone"; phone: string; email?: never }
  | { type: "email"; email: string; phone?: never };

//mapped types 에서 허용되지 않는 조합을 막을때
const c1: Contact = { type: "phone", phone: "010..." }; // ✅ OK
const c2: Contact = { type: "phone", phone: "010...", email: "test@..." }; // ❌ 에러! email은 never여야 함

//조건부 타입에서 필터링 할때 - 이 조건에 맞지 않는 타입은 제거해라
// T에서 string 타입인 것만 추출하고 싶을 때
type OnlyString<T> = T extends string ? T : never;

type Result = OnlyString<string | number | boolean>;
// 결과: string | never | never => 결국 'string'만 남음
