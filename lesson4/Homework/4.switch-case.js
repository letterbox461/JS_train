const cl = require("./console-log");
let result;
let num = Math.round(Math.random() * 4);
switch (num) {
  case 1:
    result = "Зима";
    break;
  case 2:
    result = "Весна";
    break;

  case 3:
    result = "Лето";
    break;

  default:
    result = "Осень";
    break;
}
cl(result);
