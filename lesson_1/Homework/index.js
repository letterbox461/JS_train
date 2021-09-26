//Вывести в терминал строку “Hello World!”
console.log("hello world");
//Создать переменную для каждого типа данных
let varNumber = 1;
const varString = "String";
let varBoolean = true;
let varNull = null;
let varUndefined;
const varObject1 = { name: "Ivan", age: 25 };
let varObject2 = { user: "admin", isAdmin: true };
var varObject3 = { dogName: "Muhtar", dogBreed: "Pitbull" };
let varBigint = BigInt(Number.MAX_SAFE_INTEGER + 1);
let varSymbol = Symbol("text");
//Вывести в консоль редактора кода созданные переменные
console.log(varNumber);
console.log(varString);
console.log(varBoolean);
console.log(varNull);
console.log(varUndefined);
console.log(varObject1);
console.log(varBigint);
console.log(varSymbol);
//Вывести ее тип через оператор typeof и функцию typeof
console.log(
  typeof varNumber +
    "; " +
    typeof varString +
    "; " +
    typeof varBoolean +
    "; " +
    typeof varNull +
    "; " +
    typeof varUndefined +
    "; " +
    typeof varObject1 +
    "; " +
    typeof varBigint +
    "; " +
    typeof varSymbol
);
console.log(
  typeof varNumber +
    "; " +
    typeof varString +
    "; " +
    typeof varBoolean +
    "; " +
    typeof varNull +
    "; " +
    typeof varUndefined +
    "; " +
    typeof varObject1 +
    "; " +
    typeof varBigint +
    "; " +
    typeof varSymbol
);
//Попробовать изменить переменную объявленную через const
try {
  varString = "String2";
  console.log(varString);
} catch (e) {
  console.error(e);
}
//Попробовать изменить переменную с типом object объявленную через const
try {
  varObject1.name = "Stepan";
  console.log(varObject1.name);
} catch (e) {
  console.error(e);
}

try {
  varObject1 = varObject2;
} catch (e) {
  console.error(e);
}

//Попробовать изменить переменную с типом object объявленную через let
try {
  varObject2.isAdmin = false;
  console.log(varObject2);
} catch (e) {
  console.error(e);
}
//Попробовать изменить переменную с типом object объявленную через var
try {
  varObject3.dogBreed = "Shepherd";
  varObject3.dogName = "Rex";
  console.log(varObject3);
} catch (e) {
  console.error(e);
}
