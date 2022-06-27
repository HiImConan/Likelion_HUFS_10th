// switch & case, array for condition check

function isAnimal(name) {
  /*
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
  */
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(name);
}

console.log(isAnimal("개")); // true
console.log(isAnimal("노트북")); // false

// 조건에 따라 다른 결과물을 반환해야할 때
// 가장 구린 방법
function getSound(animal) {
  if (animal === "개") return "멍멍!";
  if (animal === "고양이") return "야옹~";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구 구 구";
  return "...?";
}
// switch & case 사용. 덜 구림
function getSound(animal) {
  switch (animal) {
    case "개":
      return "멍멍!";
    case "고양이":
      return "야옹~";
    case "참새":
      return "짹짹";
    case "비둘기":
      return "구구 구 구";
    default:
      return "...?";
  }
}
// 객체를 사용하는 방법. 값에 따라 실행해야 하는 코드가 단순할 경우 용이함.
function getSound(animal) {
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~",
    참새: "짹짹",
    비둘기: "구구 구 구",
  };
  return sounds[animal] || "...?";
}

console.log(getSound("개")); // 멍멍!
console.log(getSound("비둘기")); // 구구 구 구

// 값에 따라 실행해야 하는 코드가 다를 경우 - 객체 안에 함수를 넣어주면 됨.
function makeSound(animal) {
  const tasks = {
    개() {
      console.log("멍멍");
    },
    고양이() {
      console.log("고양이");
    },
    비둘기() {
      console.log("구구 구 구");
    },
  };
  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  tasks[animal]();
}

getSound("개");
getSound("비둘기");
