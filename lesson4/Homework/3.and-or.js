const cl = require("./console-log");
//Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let a = [5, 0, -3, 2];
for (let i = 0; i < a.length; i += 1) {
  if (a[i] > 0 && a[i] < 5) {
    cl("Верно");
  } else {
    cl("Неверно");
  }
}
// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
for (let i = 0; i < a.length; i += 1) {
  if (a[i] == 2 || a[i] == 0) {
    a[i] = a[i] + 7;
  } else {
    a[i] = a[i] / 10;
  }
}

cl(a);
cl("__________________________________");

//Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

a = [1, 0, 3];
let b = [3, 6, 5];
for (let i = 0; i < a.length; i += 1) {
  if (a[i] <= 1 && b[i] >= 3) {
    cl(a[i] + b[i]);
  } else {
    cl(a[i] - b[i]);
  }
}
cl("_____________________________");

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
a = 3;
b = 15;

if ((a > 2 && a < 11) || (b >= 6 && b <= 14)) {
  cl("верно");
} else {
  cl("неверно");
}