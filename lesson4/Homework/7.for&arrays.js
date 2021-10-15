const cl = require("./console-log");
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i += 1) {
  cl(array[i]);
}
cl("_____________________________________");
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

let result = 0;
for (let i = 0; i < array.length; i += 1) {
  result = result + array[i];
}
cl(result);
