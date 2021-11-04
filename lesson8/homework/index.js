// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

let vegetablesLength = vegetables.map((e) => e.length);

console.log(vegetablesLength);

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

numbers = [2, 3, 5, 7, 11, 13, 17];

const currentSums = (numbers) => {
  let newArr = [];

  let sum = numbers.reduce((acum, current) => {
    newArr.push(acum);
    return acum + current;
  });
  newArr.push(sum);
  return newArr;
};

console.log(currentSums(numbers));

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
function sumSeven(numbers) {
  let newArr = [];
  let j = 1;
  numbers.forEach((e) => {
    for (let i = j; i < numbers.length; i++)
      if (e + numbers[i] == 7) {
        newArr.push(`${e}:${numbers[i]}`);
      }
    j++;
  });
  return newArr;
}

console.log(sumSeven(arr));

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

str = "Каждый охотник желает    знать, где сидит фазан.";
newArr = [];
newArr[0] = str[0];

for (let i = 0; i < str.length; i++) {
  if (str[i] === " " && str[i + 1] != " ") {
    newArr.push(str[i + 1]);
  }
}
console.log(newArr);

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

str = "JavaScript";
newArr = [];

for (let j = 0; j < str.length; j++) {
  if (j == 0) {
    newArr.push(str[j] + str[j + 1]);
  } else if (j == str.length - 1) {
    newArr.push(str[j - 1] + str[j]);
  } else {
    newArr.push(str[j - 1] + str[j] + str[j + 1]);
  }
}
console.log(newArr);

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
var numerics = [5, 7, 2, 9, 3, 1, 8];

numerics.sort((a, b) => {
  return b - a;
});
console.log(numerics);

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];

function getArr(a, b, c) {
  const newArr2 = [1];
  const newArr = [...a, ...b, ...c];
  newArr.sort((a, b) => {
    return b - a;
  });
  newArr2[0] = newArr.toString().replace(/,/g, " ");
  return newArr2;
}
console.log(getArr(a, b, c));

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

let array = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let e of array) {
  for (let i of e) {
    sum += i;
  }
}
console.log(sum);

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

array = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
sum = 0;
for (let e of array) {
  for (let i of e) {
    for (let j of i) {
      sum += j;
    }
  }
}
console.log(sum);

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
array = [5, 6, 4, 2, 3, 1];

newArr = [];
for (let j = 0; j < array.length; j++) {
  newArr.push(array[array.length - j - 1]);
}
array = newArr;
console.log(array);

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
array = [5, 3, 4, 2, 3, 1];

const func = (arr) => {
  let sum = 0;
  let count = 0;
  for (let j = 0; j < arr.length; j += 1) {
    sum += arr[j];
    if (sum > 10) {
      count = j + 1;
      break;
    }
  }
  return count;
};
console.log(func(array));

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

arrayFill = (element, count) => {
  let arr = [];
  for (let j = 0; j < count; j++) {
    arr.push(element);
  }
  return arr;
};

console.log(arrayFill("foobar", 3));
