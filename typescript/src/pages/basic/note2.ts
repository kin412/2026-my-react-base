//unknown - 모든 타입의 슈퍼타입. 업캐스팅이 항상가능. 다운캐스팅은 안됨.
//any - unknown을 슈퍼타입으로 가지는 모든 타입의 슈퍼타입. 다운캐스팅도 가능하기때문에 위험함
//자식 타입은 부모타입과 같거나 부모타입보다 프로퍼티를 더 가졌을 수 있다.
//따라서 부모타입에 자식타입을 넣는 업캐스팅은 어쨌든 부모타입의 모든 정보는 자식타입이 가지고 있으니 가능.
// 자식타입에 부모타입을 넣는 다운캐스팅은 자식타입의 정보중에 부모타입에 없는 정보가 있을 수 있음.
// 다운 캐스팅을 unknown은 막아주지만, any는 막아주지 않음.
// 그럼 다운 캐스팅 시 부모타입으로 넣어주지않는 속성을 호출하거나 참조 시 런타임 에러가남.
// 모든 개는 동물이지만, 모든 동물이 개는 아니다.

//업캐스팅 가능
let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;

//다운캐스팅 불가
let d: unknown;
let e: number = d;

//가능하나 위험
let f: any;
let g: number = d;

//never는 컴파일 시점에 타입에따른 오류를 잡아내기 좋음

//객체타입 간의 호환성
//공통적인 프로퍼티를 가지고 있을때 부모자식 관계로 묶을수 있고, 공통된 것만 가지고 있는 쪽이 부모타입이다.
//animal이 부모(슈퍼)타입, Dog가 자식(서브)타입
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let ani: Animal = {
  name: "할미새사촌",
  color: "white",
};

let jindo: Dog = {
  name: "백구",
  color: "white",
  breed: "김영감댁",
};

//업캐스팅은 가능
ani = jindo;
//다운캐스팅은 불가
jindo = ani;

//초과 프로퍼티 검사
// 객체 초기화 시(값 할당시) 객체 리터럴을 사용하면 초과한 프로퍼티가 있을 시 막는 검사.
// 업캐스팅은 가능하지만 초기화는 안됨.

let ani: Animal = {
  name: "닥스훈트",
  color: "black",
  //breed: "우리집", // Animal에 breed 속성이 없으므로 에러
};

//대수타입 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
//합집합 타입과 교집합 타입이 존재

//합집합 - Union 타입
//u는 string, number 다 넣을 수 있음.
let u: string | number | boolean;
u = 1;
u = "adsad";
u = true;

let arr: (number | string | boolean)[] = ["asdda", 123, false];

type DDD = {
  name: string;
  color: string;
};

type PPP = {
  name: string;
  language: string;
};

type Union1 = DDD | PPP;

let union1: Union1 = {
  name: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

//둘중에 하나라도 포함하던가 둘다 포함하던가 이기때문에
// name만 있는건 안됨. 둘중하나에도 포함되지 않기때문에
// let union4: Union1 = {
//   name: "",
// };

//교집합 타입 - intersection 타입
//교집합 타입은 원시타입의 경우 겹치는게 없으므로 그냥 never 타입이 나와서 잘쓰지 않음
//주로 객체에서 씀

type DDD2 = {
  name: string;
  color: string;
};

type PPP2 = {
  name: string;
  language: string;
};

type Intersection = DDD2 & PPP2;

//프로퍼티를 모두 포함한것 만이 교집합임. name하나는 양쪽 어느쪽에도 속할수 없으므로 에러. 모두포함한것에서 하나로 빠지면 에러.
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

//타입 추론 - 변수의 초기값으로 추론
let aa = 10; //number

let cc = {
  id: 1,
  name: "kin",
  profile: {
    nickname: "naver",
  },
  urls: ["https://google.com"],
};

let { id, name, profile } = cc; //구조 분해 할당

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

//암묵적 any타입. 초기값을 주지않으면 any타입임.
//넣은 값에 따라 그때그때 달라지므로 코드읽기가 쉽지않아서 추천하지 않음
let dd;
dd = 10; // 10을 주는 순간 any가 타입을 추론해 number형이 됨.
dd = "asdsad"; // 또 추론해 string형이 됨.

//const는 원시타입의 경우 상수기 때문에 바뀔수 없지만,
// 객체는 새로운 객체를 넣는것만 아니면 내부의 값을바꾸는건 주소가 바뀌지 않으므로 가능
const num = 10;
//num = 2; //에러

//여러값이 가능한 경우 union타입으로 추론함.
let arr = [10, "adad"]; // number|string

//func11은 void, param은 any로 추론됨
function func11(param) {}

//타입 단언 - as를 사용해 타입을 확정하는것. 타입을 바꾸는건 아님.
//컴파일타임에만 확정하기때문에 위험함. 가급적 안쓰는게 좋음.
//단언 사용 규칙 A as B
//A가 B의 슈퍼타입이거나 서브타입이어야함.
//A가 B의 슈퍼타입이면 다운캐스팅인데, 형이 아예 다른경우는 에러일지라도,
//개발자가 책임진다는 전제로 단언을 쓴것이므로 컴파일러는 통과함.

type Person = {
  name: string;
  age: number;
};
//이렇게 하면 사실 빈객체인데 있다고 속인거니까
//타입스크립트에서는 단언이라 컴파일에러없이 넘어가도
//런타임때 빈객체이기때문에 에러
let person = {} as Person;
person.name = "kin";
person.age = 27;

//const 단언
//객체도 상수느낌?으로 바꿔줌. 프로퍼티들에 readonly부여

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
//readonly 이므로 불가능
//cat.color = "blue";

/*
non null 단언
*/

//익명인 경우 author를 안쓸수도 있다는 비즈니스 로직
type Post = {
  title: string;
  author?: string; //선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
  //author: "kin",
};

//옵셔널 체이닝
const len: number = post.author!.length; // ! -> non null 단언 author는 무조건 있어!!

/*
타입 좁히기 - 타입 가드
조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에따라 좁히는 방법
*/

type Person2 = {
  name: string;
  age: number;
};

function funcPP(value: number | string | Date | null | Person2) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    //인스턴스 instanceof 타입 - 순서로 와야함. 뒤에는 인스턴스가 올수 없음.
  } else if (value instanceof Date) {
    console.log(value.getDate());
  } //else if (value instanceof Person2) {} //instanceof는 class에만 사용가능. type이나 interface는 컴파일이후에 사라지므로 불가
  else if (value && "age" in value) {
    //age가 value에 있을때만
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

/*
서로소 유니온 타입
교집합이 없는 타입으로만 만든 유니온 타입
ex) string|number - 겹치는 부분이 없음.
모든 객체가 공유하지만, 값은 제각각인 고유한 라벨(Label)"**을 하나씩 달아주는 것입니다. 
이 라벨이 있으면 TypeScript는 아주 명확하게 타입을 골라낼 수 있습니다.
*/

//tage에 값을 준게 아님. 타입을 준것임!
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User10 = Admin | Member | Guest;

function login(user: User10) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

//비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

//로딩중 -> 콘솔에 로딩중 출력
//실패 -> 실패 : 에러메시지를 출력
//성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};
