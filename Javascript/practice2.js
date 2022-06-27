// Truthy and Falsy

function print(person) {
  console.log(person.name);
}

const person = {
  name: "John",
};

// print()에 매개변수가 제대로 지정되지 않았을 경우 -> undefined 속에서 name 속성을 찾으려 하므로 TypeError 반환
print(person);
// print();
// print(null);

// if (person === undefined || person === null) 을 if (!person) 하나로 줄일 수 있다.
function print(person) {
  if (!person) {
    console.log("person이 없네요");
    return;
  }
  console.log(person.name);
}

// Falsy한 값들. 이 값들을 제외한 모든 값들은 모두 Truthy함(빈 배열 포함)
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);

// {const truthy = value ? true : false;} === {const truthy = !!value;}
