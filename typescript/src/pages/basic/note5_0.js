//자바스크립트의 클래스
let studentA = {
  name: "kin",
  age: 35,
  study() {
    console.log("study!");
  },
};

class Student {
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log(`${this.name}님 공부중입니다.`);
  }
}

class StudentDev extends Student {
  favoritSkill;

  constructor(name, grade, age, favoritSkill) {
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    //상속 받은건 super로 처리해주면 편함. 부모의 생성자 호출 이니까
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함`);
  }
}

//클래스를 이용해 만든 객체 -> 인스턴스
let studentB = new Student("kin", "A", 35);
studentB.study();

let studentDev = new StudentDev("kin", "A", 35, "spring");
studentDev.study();
studentDev.programming();
