/*
interface와 type의 차이
interface는 선언 병합이 가능. 주로 객체에 한정됨.
type은 객체,원시값, 유니온, 인터섹션, 튜플등 가능

일반적인 객체 구조 정의시에는 우선 interface로.
유니온이나 인터섹션, 기본타입의 별칭등이 필요할땐 무조건 type
*/

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

//interface의 선언 병합- 프로퍼티가 합쳐짐
interface Person {
  //name: "kin"; //병합 시 같은 이름으로 합치려면 타입도 같아야함. 선언 병합시는 서브타입도 안됨.
  addProp: string;
}

//인터페이스는 type 같은 유니온이나 인터섹션이 안됨
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "kin",
  //age:30,
  sayHi: function () {
    console.log("Hi");
  },
  //선언 병합의 사용
  addProp: "ddddd",
};

//person.name = "hong";

person.sayHi();
person.sayHi(1, 2);

//확장 - extends
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 이런식의 상속시 재정의는 원본타입의 서브타입이어야만(string의 서브타입 string 리터럴) 가능. 위의 선언 병합에서는 불가능
  //name: "jindo";
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  //name: string;
  //color: string;
  isScratch: boolean;
}

//다중 확장 - 걍 상속임
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

/*
모듈 보강
*/

interface Lib {
  a: number;
  b: number;
}
//위의 인터페이스 밖에 없을때 아래의 lib객체를 만들어야할경우 내 ts에서 아래와 같이 보강한다.
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
