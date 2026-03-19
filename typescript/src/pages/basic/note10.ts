//유틸리티 타입
//partial<T>
//부분적인, 일부분의 - 특정객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//Partial을 직접 구현한다면?
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안",
};

/*
Required<T>
-> 필수의, 필수적인
-> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
*/

//Required를 직접 구현한다면?
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "타스후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://....",
};

/*
Readonly<T>
-> 읽기전용 수정불가
-> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
*/

//Readonly를 직접구현한다면?
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "sdasdsadsa",
  tags: [],
  content: "",
};

//readonlyPost.content = "";

/*
pick<T,K>
->뽑다, 고르다
-> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
*/

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};

/*
Omit<T,K>
-> 생략하다, 빼다
-> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
*/

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/*
Record<K,V> 많이쓰임
키의 집합과 값의 타입을 지정해서 객체타입을 생성할때 사용
*/

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

/*
Exclude<T,U>
-> 제외하다, 추방하다
-> T에서 U를 제거하는 타입
*/

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

/*
Extract<T,U>
-> T에서 U를 추출하는 타입
*/

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/*
 ReturnType<T>
 -> 함수의 반환값 타입을 추출하는 타입
*/

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
