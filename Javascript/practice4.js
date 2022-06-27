// function parameter

function calculateCircleArea(r) {
  const radius = r || 1; // ES5 문법 기준 default parameter 선언 방식
  return Math.PI * radius * radius;
}

// ES6부터는 파라마티를 넘겨줄 때 동시에 default값 설정 가능.
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}

// arrow function을 사용하면 {return}까지 줄여줄 수 있음.
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
