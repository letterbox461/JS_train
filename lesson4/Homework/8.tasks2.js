const cl = require("./console-log");
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

let array = [2, 5, 9, 15, 0, 4];

array.forEach((i) => {
  if (i > 3 && i < 10) {
    cl(i);
  }
});
cl("_________________________________________________");

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let sum = 0;

array = [2, -5, 9, 15, 1, -4];

array.forEach((i) => {
  if (i > 0) {
    sum += i;
  }
});
cl(sum);
cl("_________________________________________________");

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

array = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i <= array.length; i += 1) {
  if (array[i] == 4) {
    cl("Got it");
    break;
  }
}
cl("_________________________________________________");

// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

array = [10, 20, 30, 50, 235, 3000];
check = ["1", "2", "5"];

array.forEach((element) => {
  for (value of check) {
    if ((element + "")[0] == value) {
      cl(element);
    }
  }
});
cl("___________________________________________________________");
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let string = "";
for (value of array) {
  if (value % 2 != 0) {
    string = string + `-${value}-`;
  } else {
    string = string + value;
  }
}

cl(string);
cl("___________________________________________________________");
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurstday",
  "Friday",
  "Saturday",
];

let c, style;
for (day of weekDays) {
  if (day == "Saturday" || day == "Sunday") {
    c = "%c";
    style = "font-weight:bold";
  } else {
    c = "";
    style = "";
  }
  console.log(c + day, style);
}
cl("___________________________________________________________");
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

let currentDate = new Date();
let dayNumber = currentDate.getDay();
let today = weekDays[dayNumber];

for (day of weekDays) {
  if (day == today || day == today) {
    c = "%c";
    style = "font-style:italic";
  } else {
    c = "";
    style = "";
  }
  console.log(c + day, style);
}
cl("___________________________________________________________");

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

n = 1000;
let num;

for (num = 0; n >= 50; num += 1) {
  n = n / 2;
}
cl(num);
// Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
// Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
// Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.

let flightGagarin = 1961;
let i = 0;
let longYears = 0;
for (let year = 1800; year <= 2020; year++) {
  if (year == flightGagarin) {
    cl(
      `День первого полета человека в космос найден, потребовалось ${i} итераций`
    );
  }
  if (year % 4 == 0) {
    longYears += 1;
  }

  i += 1;
}
cl(`високосных годов было ${longYears}, потребовалось ${i} итераций`);
