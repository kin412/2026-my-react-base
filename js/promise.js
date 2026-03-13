function add10(num) {
  //비동기 작업을 실제 진행할 콜백함수를 인자로 넣어줌.
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor

    //promise객체의 상태를 성공했다. - fulfilled로 변경함.
    //매개변수는 promiseResult
    //resolve("안녕22");

    //promis객체의 상태를 실패했다. - rejected로 변경함.
    //매개변수는 promiseResult
    //reject("왜 실패했는지 이유....");

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); //promiseResult에 값저장
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });

  return newP;
}).then((result) => {
  console.log(result);
});
