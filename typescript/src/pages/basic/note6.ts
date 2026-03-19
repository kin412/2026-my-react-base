//제네릭
//사용 시 타입 강제 가능. 상황에 따라 다른 타입이 담길 수도 있음.

function func<T>(value: T): T {
  return value;
}

let num = func(10);
//num.toUpperCase(); 타입이 정해지지 않으면 에러가 날수도 안날수도 있다. 아니면 좁히기를 해야함
// if (typeof num === "number") {
//   num.toFixed();
// }

let bool = func(true);

let str = func("aaa");

//튜플할당
//let arr = func([1, 2, 3] as [number, number, number]);
//제네릭으로 튜플 할당. 어차피위에서 매개변수 타입도 제네릭해놨으므로 안해도 상관은 없지만 그래도 예시
let arr = func<[number, number, number]>([1, 2, 3]);

////////////////////////////////////////////////
/*
첫번째 사례
*/

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/*
두번째 사례
*/

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "mynameis"]);

/*
세번째 사례
*/

//number타입의 length를 가지는 객체로 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

//let var4 = getLength(10); // number는 length가 없음. 컴파일 에러

//////////////////////////////////////////
//map 메서드

const arr1 = [1, 2, 3];
const newArr = arr1.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr1, (it) => it * 2);
map(["hi", "hello"], (it) => parseInt(it));

/*
forEach
*/

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});

////////////////////////////////////////////////////
//제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["12"],
};

////////////////////////////////////////////////////
/*
인덱스 시그니처
*/

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 324534,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

//////////////////////////////////////////////////////
//제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

////////////////////////////////////////////
//제네릭 인터페이스 활용 예시
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  //profile: Student|Developer;
  profile: T;
}

function goToSchool(user: User<Student>) {
  //제네릭으로 타입가드를 안써도됨
  //   if (user.profile.type !== "student") {
  //     console.log("잘못오셨습니다.");
  //     return;
  //   }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "kin",
  profile: {
    type: "developer",
    skill: "spring",
  },
};

//제네릭을 통한 타입검증에 막힘
//goToSchool(developerUser);

const studentUser: User<Student> = {
  name: "hong",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};

/////////////////////////////////////////////////////////////
//제네릭 클래스

class NumberList<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new NumberList(["hi", "hu", "hea"]);
stringList.pop();
stringList.push("hiho");
stringList.print();

import { rejects } from "node:assert";
//////////////////////////////////////////////////
//프로미스
import { resolve } from "node:dns";

//promise에 제네릭을 선언하면 저장되는 result값의 타입을 지정할 수 있음.
//reject는 지정불가 (parameter) reject: (reason?: any) => void

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject("failllllll");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/*
프로미스를 반환하는 함수의 타입을 정의
*/

interface Post {
  id: number;
  title: string;
  content: string;
}

//둘중 하나만 제네릭을 하면 해결됨. 하지만 보통 선언부에 선언하는게 가독성이 더좋음. 바로위에 보이니까
function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
