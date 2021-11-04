// 1. Преобразовать строку в массив слов

// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

var str = "Каждый охотник желает знать     где";
function stringToarray(str) {
  let j = 0;
  let array = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      j++;
    } else {
      !array[j] ? (array[j] = str[i]) : (array[j] += str[i]);
    }
  }
  return array.filter(() => {
    return true;
  });
}

var arr = stringToarray(str);
console.log(arr);

// 2. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
str = "Каждый охотник желает знать";

function delete_characters(str, length) {
  return str.substring(0, length);
}

console.log(delete_characters(str, 4));

// 3. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

str = "HTML JavaScript PHP";

function insert_dash(str) {
  return str.replace(/ /g, "-").toUpperCase();
}

console.log(insert_dash(str));

str = "string not starting with capital";

// 4. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
str = "string not starting with capital";
function cursive_letter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(cursive_letter(str));

// 5. Первая буква каждого слова заглавная

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

str = "каждый охотник желает знать";

function capitalize(str) {
  let strNew = "";
  for (let j = 0; j < str.length; j++) {
    if (j === 0 || str[j - 1] === " ") {
      strNew = strNew + str[j].toUpperCase();
    } else {
      strNew = strNew + str[j];
    }
  }

  return strNew;
}

console.log(capitalize(str));

// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {
  let strNew = "";
  for (let j = 0; j < str.length; j++) {
    if (str[j] === str[j].toUpperCase()) {
      strNew = strNew + str[j].toLowerCase();
    } else {
      strNew = strNew + str[j].toUpperCase();
    }
  }

  return strNew;
}
console.log(change_register(str));

// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function remove_char(str) {
  let strNew = "";
  for (let j = 0; j < str.length; j += 1) {
    if (str[j].match("^[a-zA-Z0-9]*$")) {
      strNew += str[j];
    }
  }
  return strNew;
}
console.log(remove_char(str));
