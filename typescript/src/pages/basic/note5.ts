//타입스크립트의 클래스
const employee = {
  name: "kin",
  age: 35,
  position: "developer",
  work() {
    console.log("일중");
  },
};

class Employee {
  //필드
  //name?: string;
  //name: string = "";
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

class ExcutiveOfficer extends Employee {
  //필드
  officerNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officerNumber: number,
  ) {
    super(name, age, position);
    this.officerNumber = officerNumber;
  }
}

const employeeB = new Employee("kin", 35, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

//////////////////////////////////////////////////////////////
//접근제어자 access modifier => public private protected

class Employee {
  //필드
  //name?: string;
  //name: string = "";
  //private name: string; //클래스 내에서만 액세스 가능
  //protected name: string; //상속 받은 자식까지는 접근가능
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    //필드외에곳에서 접근제어자를 쓰면 필드의 접근제어자를 지워줘야함
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

class ExcutiveOfficer22 extends Employee {
  //필드
  officerNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officerNumber: number,
  ) {
    super(name, age, position);
    this.officerNumber = officerNumber;
  }

  func() {
    this.name; //private는 접근불가. protected는 상속받은 자식에서는 접근가능
  }
}

const employee22 = new Employee("kin", 35, "developer");
employee.name = "hong";
employee.age = 30;
employee.position = "디자이너";

/////////////////////////////////////////////////////////////////
//인터페이스와 클래스
//인터페이스는 클래스로 치면 public 필드만 가능
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  //name: string;
  //moveSpeed: number;

  constructor(
    public name: string,
    public moveSpeed: number,
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
