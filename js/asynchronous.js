function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b; // 3
    callback(sum);
  }, 5000);
}

add(1, 2, (value) => {
  console.log(value);
});

//음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
  console.log("동기는 그대로 실행됨");
  console.log("비동기 처리를 브라우저에게 넘겼기때문.");
  console.log("브라우저가 비동기 처리를 끝내면 콜백큐에 실행할 함수를 줄세움");
  console.log(
    "그럼 자바스크립트가 콜스택으로 콜백큐에 순서대로 쌓인 것들을 실행함.",
  );
  console.log(
    "그래서 이위의 console.log가 먼저 다찍히고 그다음에 떡볶이가 찍히는것.",
  );
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
  console.log(
    "settimeout이 비동기 함수지, 이함수 cooldownFood() 도 동기적 함수임.",
  );
  console.log(
    "orderFood의 settimeout이 끝나면 브라우저가 콜백인 cooldownFood()를 콜백큐에 줄세우고 ",
  );
  console.log(
    "콜스택이 cooldownFood() 실행하는 순간, 다시 settimeout은 비동기니까 브라우저한테 실행을 맡기고",
  );
  console.log(
    "콜스택이 이 위의 로그들이 먼저실행해서 찍힌다. 그리고 2초후에 과정 반복",
  );
}

function freezFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food); // 1. 3초후 떡볶이

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); //2. 2초후 식은 떡볶이

    freezFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); //3. 1.5초후 냉동된 식은 떡볶이
    });
  });
});
