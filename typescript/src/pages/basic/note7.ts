//인덱스드 액세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

//function printAuthorInfo(author: { id: number; name: string; age: number }) {
//주의: post안의 author는 문자열이 아니라 타입임을 기억할것.
//Post["author"]["id"] 이런 중첩사용으로 특정 프로퍼티만 추출할수도 있음
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

//배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

//배열
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

////////////////////////////////////////////////////////////////
//keyof 연산자 - 해당 객체의 모든 프로퍼티의 키를 유니온 타입으로 추출 "name"|"age"
//typeof - 타입을 정의할때 사용하면 타입을 뽑아낼수 있음.
// interface Person {
//   name: string;
//   age: number;
// }

//const person: Person = {
const person = {
  name: "kin",
  age: 35,
};

type Person = typeof person;

//function getPropertyKey(person: Person, key: "name" | "age") {
// keyof 는 해당 객체의 모든 프로퍼티의 키를 유니온 타입으로 추출 "name" | "age"
// 주의 keyof는 무조건 타입에만 쓸수 있음
//function getPropertyKey(person: Person, key: keyof Person) {
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

getPropertyKey(person, "name");

////////////////////////////////////////////////////////////////////
//mapped type - 실무에서 많이쓰임. 인터페이스에선 쓸수 없음.

interface User {
  id: number;
  name: string;
  age: number;
}

//한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //...기능
  return {
    id: 1,
    name: "kin",
    age: 35,
  };
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // 맵드타입은 ?를 추가함으로써 다 선택적 프로퍼티가 됨
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  //..수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "kin",
  age: 35,
});

////////////////////////////////////////////////////////////////////
/*
템플릿 리터럴 타입 - 많이 사용 되지는 않음
*/

type Color = "red" | "black" | "blue";

type Animal = "dog" | "cat" | "chicken";

// 조합된 모든 경우가 만들어짐
type ColoredAnimal = `${Color}-${Animal}`;
