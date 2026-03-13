// async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  //   return {
  //     name: "kin",
  //     id: "kin412",
  //   };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "kin",
        id: "kin412",
      });
    }, 1500);
  });
}

console.log(getData());

//await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  //   getData().then((result) => {
  //     console.log(result);
  //   });
  const data = await getData();
  console.log("printData in data : " + data);
  console.log("printData in data22222 : ", data);
  console.log(data);
  return data;
}

let a = printData();
console.log("a : " + a);
