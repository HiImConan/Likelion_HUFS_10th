// 단축 평가 (short-circuit evaluation) 논리 계산법

const dog = {
  name: "멍멍이",
};

function getName(animal) {
  const name = animal && animal.name; // if else로 매개변수가 유효한지 판별할 수 있는 코드를 한 줄로 줄일 수 있음.
  return name || "이름이 없는 동물입니다."; // 마찬가지로 if else로 name이 유효한 값인지 판별하는 코드를 ||로 압축할 수 있음.
}

const name = getName(dog); // getName 파라미터가 없다면?

// 여러가지 논리 연산자 계산 결과.
// A && B : A가 true이면 B 반환, A가 false이면 A 반환
// A || B : A가 true이면 A 반환, A가 false이면 B 반환(B가 참이건 거짓이건간에)

console.log(true && "hello"); // hello
console.log(false && "hello"); // false
console.log("hello" && "bye"); // bye
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // hello
console.log(1 && 1); // 1
