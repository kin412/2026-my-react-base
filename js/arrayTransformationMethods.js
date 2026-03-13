//5가지 배열 변형 메서드
//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
  { name: "kin", hobby: "테니스" },
  { name: "bak", hobby: "테니스" },
  { name: "lee", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

console.log("=====================");

//2.map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

console.log(mapResult);

console.log("=====================");

const mapResult2 = arr1.map((item) => item.name);

console.log(mapResult2);

console.log("=====================");

//3. sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort(); // 배열에 숫자로 되어있으면 정렬이 제대로되지 않음. 사전순으로 정렬하는거라.

// arr3.sort((a,b)=>{ //숫자를 정렬하려면 이와같은 콜백함수를 넣어줘야함.
//     if(a > b){
//         //b가 a 앞에 와라
//         return 1;
//     }else if(a < b){
//         //a가 b 앞에 와라
//         return -1;
//     }else{
//         //자리 바꾸지마라
//         return 0;
//     }
// });

console.log(arr3);

console.log("=====================");

//4. toSorted
//정렬된 새로운 배열을 반환하는 매서드. 최근에 추가된 최신 함수
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

console.log("=====================");

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "asdad"];
const join = arr6.join("@"); //인수로 구분자를 줄수있음. default는 ,
console.log(join);
