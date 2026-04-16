//-----------------Темы: строка, методы строки, if-else, switch----------------
//
/* 1.	Строки. Установить какие методы строк изменяют начальное значение строки.
	
	Дана строка: 
“Knowledge of built-in JavaScript methods speeds up a tester’s work.”

Методы:
s.charAt(); //или с[0]
s.charAt(s.length -1);
s.substring(1, 4);
s.substr(1, 3);
s.slice(-3);
s.indexOf(“l”);
s.lastIndexOf(“l”);
s.split(“of”);
s.replace(“l”, “L”);
s.replaceAll(“l”, “L”);
s.toUpperCase();
s.toLowerCase();
*/
console.log(
  '\n\n 1.	Строки. Установить какие методы строк изменяют начальное значение строки.'
);
console.log(
  ' * СТРОКИ ЯВЛЯЮТСЯ ИММУТАБЕЛЬНЫМИ (НЕИЗМЕНЯЕМЫМИ) - не один из этих методов не меняет строку, они лишь создают новые подстроки на основании оригинала'
);

console.log('\n\n 2.	Заполнить таблицу методов строк:');
const s = 'Hello, my name is John';

console.log(
  '\n s.at() - Возвращает символ по индексу (поддерживает отрицательные индексы)'
);
console.log(s.at(-1)); //'n' (последний символ)

console.log(
  '\n s.charAt(pos) - Получить символ, который занимает позицию pos. не поддерживает отрицательные значения. Если написать s.charAt(-1), он просто вернет пустую строку '
);
console.log(s.charAt(0)); //'H'

console.log(
  '\n s.charCodeAt() - Возвращает число (код UTF-16) символа на позиции.'
);
console.log(s.charCodeAt(0)); //72 (код буквы 'H')

console.log('\n s.concat() - Объединяет две или более строк.');
console.log(s.concat('!')); //'Hello, my name is John!' - объединил s + '!'

console.log(
  '\n s.includes() - Проверяет, содержит ли строка подстроку (true/false).'
);
console.log(s.includes('name')); //true
console.log(s.includes('hello')); //false - чувствительный к регистру

console.log(
  '\n s.indexOf("l") - ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.'
);
console.log(s.indexOf('l')); //2 (первая 'l')

console.log(
  '\n s.lastIndexOf("l") - ищет с конца строки к её началу. Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки'
);
console.log(s.lastIndexOf('l')); //3 (вторая 'l')

console.log('\n s.padEnd() - Дополняет строку в конце до нужной длины.');
console.log(s.padEnd(30, '0')); //Hello, my name is John00000000

console.log('\n s.padStart() - Дополняет строку в начале до нужной длины.');
console.log(s.padStart(30, '0')); //00000000Hello, my name is John

console.log(
  '\n s.repeat() - Возвращает строку, повторенную указанное количество раз.'
);
console.log(s.repeat(2)); //Hello, my name is JohnHello, my name is John

console.log(
  '\n s.replace("l", "L") - возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменительи - меняет, 1шт'
);
console.log(s.replace('l', 'L')); //HeLlo, my name is John

console.log(
  '\n s.replaceAll("l", "L") - Заменяет все вхождения подстроки на новую.'
);
console.log(s.replaceAll('l', 'L')); //HeLLo, my name is John

console.log(
  '\n s.slice(-3); - получения подстроки. Возвращает часть строки от start до (не включая) end.'
);
console.log(s.slice(0, 5)); //'Hello'

console.log(
  '\n s.split("of") - разбивает объект String на массив строк путём разделения строки указанной подстрокой.'
);
console.log(s.split(' ')); // ['Hello,', 'my', 'name', 'is', 'John']

console.log('\n s.endsWith() - Проверяет, заканчивается ли строка на str');
console.log(s.endsWith('John')); //true

console.log('\n s.startsWith() - Проверяет, начинается ли строка с str.');
console.log(s.startsWith('John')); //false

console.log(
  '\n s.substring(1, 4); получения подстроки. Возвращает часть строки между start и end. не работает с отрицательными индексами'
);
console.log(s.substring(1, 4)); //'ell'

console.log(
  '\n s.substr(1, 3); - получения подстроки. Возвращает часть строки от start длины length.'
);
console.log(s.substr(1, 3)); //'ell'

console.log('\n s.toUpperCase(); - меняют регистр символов');
console.log(s.toUpperCase()); //HELLO, MY NAME IS JOHN

console.log('\n s.toLowerCase(); - меняют регистр символов');
console.log(s.toLowerCase()); //hello, my name is john

console.log('\n s.toString()) - возвращает строковое представление объекта');
console.log(s.toString()); //если над строкой, то вернет ту же самую строку
console.log([1, 2].toString()); //"1,2"

console.log('\n s.trim()) - Удаляет пробелы с обоих концов строки.');
console.log('  hi  '.trim());
('hi');

console.log('\n s.trimEnd() - Удаляет пробелы только в начале строки.');
console.log('  hi  '.trimEnd()); //  hi

console.log('\n s.trimStart() - Удаляет пробелы только в конце строки');
console.log('  hi  '.trimStart()); //hi

//
/* 3.	В этом коде ошибки. Найдите, покажите какие и почините.
const monthNumber = 1;
const result3 = "";         // строку с const изменить нельзя, поэтому меняем на let

switch (monthNumber) {
     case "1":                     //проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство. => либо все кейсы должны быть цифрами, либо строками и monthNumber - тоже должна быть строкой
          result3 = "January";
          break;
     case "2":
          result3 = "February";
          break;
     case "3":
          result3 = "March";    //отсутствие "break;""
     case "4":
          result3 = "April";
          break;
     case 5:
          results3 = "May";     //ошибка в имени(вероятно, русская буква"е")
          break;
     case 6                     //отсутствие ":"
          result3 == "June";
          break;
}
console.log(result3);
*/
console.log('\n 3. Исправление ошибки в коде, в комментариях помечены ошибки ');
const monthNumber = 1;
let result3 = '';

switch (monthNumber) {
  case 1:
    result3 = 'January';
    break;
  case 2:
    result3 = 'February';
    break;
  case 3:
    result3 = 'March';
    break;
  case 4:
    result3 = 'April';
    break;
  case 5:
    result3 = 'May';
    break;
  case 6:
    result3 == 'June';
    break;
}

console.log(result3);

//
/* 4.	В этом коде что-то не так. Найдите ошибки, покажите какие и переделайте код, чтобы он работал правильно:

let day = "monday";
let message;

if (day === "Monday") {             // в коде сравниваются значения с разными регистрами, поэтому нужно привести все к одному
     message = "It's Monday!";
} 
else if (day === "TUesday") {
     message = "It's Tuesday!";
} 
else if (day === "Wednesday") {
     message = "It's Wednesday!";
} 
else if (day === "thursday") {
     message = "It's Thursday!";
} 
else if (day === "Friday") {
     message = "It's Friday!";
} 
else if (day === "Saturday") {
     message = "Its Sunday!";   // ошибка в выврде дня недели "Saturday"
} 
else if (day === "Sunday") {
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message);

*/
console.log('\n 4. Исправление ошибки в коде, в комментариях помечены ошибки');
let day = 'monday';
let message;

if (day === 'Monday'.toLowerCase()) {
  message = "It's Monday!";
} else if (day === 'TUesday'.toLowerCase()) {
  message = "It's Tuesday!";
} else if (day === 'Wednesday'.toLowerCase()) {
  message = "It's Wednesday!";
} else if (day === 'thursday'.toLowerCase()) {
  message = "It's Thursday!";
} else if (day === 'Friday'.toLowerCase()) {
  message = "It's Friday!";
} else if (day === 'Saturday'.toLowerCase()) {
  message = 'Its Sunday!';
} else if (day === 'Sunday'.toLowerCase()) {
  message = "It's Sunday!";
} else {
  message = 'Invalid day!';
}

console.log(message);

//
console.log(
  '\n 5. Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)'
);
const dayNumber = 5;
let resultDay = '';

switch (monthNumber) {
  case 1:
    resultDay = 'Пон.';
    break;
  case 2:
    resultDay = 'Вт.';
    break;
  case 3:
    resultDay = 'Ср.';
    break;
  case 4:
    resultDay = 'Чт.';
    break;
  case 5:
    resultDay = 'Пт.';
    break;
  case 6:
    resultDay == 'Сб.';
    break;
  case 7:
    resultDay == 'Вс.';
    break;
  default:
    resultDay == 'Нет подходящего дня';
}

console.log(`Номер дня ${dayNumber} соответствует : `, resultDay);

//
console.log(
  '\n 6.	Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - “approved”, если другие месяцы, то - “denied”.'
);
const vacationMonth = 'June';
let vacationStatus = '';

switch (vacationMonth) {
  case 'July':
  case 'August':
    vacationStatus = 'approved'; //группировка case по одинаковому результату
    break;
  default:
    vacationStatus = 'denied';
}

console.log(`Месяц для проверки ${vacationMonth}. Отпуск : `, vacationStatus);

//
console.log(
  '\n 7.	Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.'
);
let x, y;
let operator;

function calc(x, y, operator) {
  if (typeof x !== 'number' || typeof y !== 'number')
    return console.log(`Неверные данные`);
  let result;
  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    default:
      result = 'Error (я не могу обработать данный оператор)';
  }
  console.log(`Решение : ${x} ${operator} ${y} = ${result}`);
}
calc(1, 5, '*');
calc(-2, 7, '+');
calc(0, 9, '/');
calc(100, 10.5, '-');
calc('100', 10, '*');
calc(10, 10, '');
calc(10, 10, '.');
calc(10, 'd', '-');

//
console.log(
  '\n 8.	Напишите программу, которая определяет, является ли заданный год високосным по правилам Григорианского календаря. Високосный год делится на 4, за исключением случаев, когда он делится на 100, но не на 400. '
);

function checkYear(year) {
  let message;
  if (year % 400 == 0) message = 'год високосный';
  else if (year % 100 == 0) message = 'год НЕ високосный';
  else if (year % 4 == 0) message = 'год високосный';
  else message = 'год НЕ високосный';

  return console.log(`год для проверки ${year} - ${message}`);
}
checkYear(2024);
checkYear(2025);
checkYear(2026);
checkYear(2027);
checkYear(2100);
checkYear(2400);

//
console.log(
  '\n 9.	Напишите программу, которая рассчитывает стоимость билета в зависимости от возраста. -	Дети до 2х лет - бесплатно -	Дети до 10 лет - скидка в 50% -	Пожилые (после 65) - скидка в 15% -	Студенты - скидка в 10%'
);
function priceTicket(age, isStudent = false) {
  if (typeof age !== 'number' || age < 0) return console.log(`Неверные данные`);
  let standartPrice = 100;
  let result;

  if (age < 2) result = 0;
  else if (age < 10) result = standartPrice * 0.5;
  else if (age >= 65) result = standartPrice * 0.85;
  else if (isStudent == true) result = standartPrice * 0.9;
  else result = standartPrice;

  return console.log(
    `Данные для проверки: Возраст = ${age}, Студент = ${isStudent}. Итоговая цена :  ${result}`
  );
}
priceTicket(1.5);
priceTicket(20);
priceTicket(5);
priceTicket(25, true);
priceTicket(25, false);

//
console.log(
  '\n 10.	Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем): Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.  '
);
const height = 5;
const up = 3;
const down = 2;

let dayResult = up - down; //каждый полный день (кроме последнего) улитка продвигается на 1 метр
let lastDayHeight = height - up; // 2 метра, которые нужно пройти до последнего дня, т.к в последний день она просто ползёт вверх и не сползает
let lastDay = 1;
let daysAnswer = lastDayHeight / dayResult + lastDay; // кол-во полных дней, чтобы добраться до верха

console.log(`Улитка проползет за :  ${daysAnswer} дней`);

//
console.log(
  '\n 11.	Креативное задание:     Напишите следующую программу: У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор). Дайте названия вашим видам кофе. Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).    -	Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика).      -	Компоненты кофе не влияют на стоимость.     -	Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.     \n'
);
const coffee_1 = 'Эспрессо';
const coffee_2 = 'Капучино';
const size_S = 100;
const size_M = 150;
const size_L = 200;
const recipe_1 = 'Эспрессо: молотый кофе, вода.';
const resipe_2 = 'Capuchino: эспрессо, молоко, густая молочная пена.';

function orderCoffee(name, size) {
  let order, price;

  if (name == 'Эспрессо') order = `${recipe_1}`;
  else if (name == 'Капучино') order = `${resipe_2}`;
  else order = 'Данного кофе нет в меню';

  if (size == 's') price = size_S;
  else if (size == 'm') price = size_M;
  else if (size == 'l') price = size_L;
  else
    price =
      'Цена на данный размер не предусмотрена, пожалуйста повторите заказ';

  return console.log(`${order} Цена за кофе : ${price}`);
}
orderCoffee('Эспрессо', 'm');
orderCoffee('Капучино', 'l');
orderCoffee('qwerty', '9');

//
`\n 12.	Создайте программу, которая определяет, имеет ли человек право на определенное мероприятие, на основе нескольких критериев: возраста, статуса членства и посещения предыдущих мероприятий.
    Критерии участия:
    -	Возраст должен быть не менее 18 лет.
    -	Для членов клуба другие ограничения не применяются.
    -	Если человек не является членом клуба, необходимо посетить не менее 3 предыдущих мероприятий.
    -	Если человек не является членом клуба, но посетил 5 или больше предыдущих мероприятий, он получает специальный VIP-пропуск.`;

function checkAccess(age = null, isMember = false, pastEvents = 0) {
  //let access, vip;
  let message;

  if (age < 18) message = 'Доступ запрещен'; //access = false;
  else if (isMember) message = 'Доступ разешен'; //access = true;
  else if (pastEvents > 4) message = 'Доступ разешен (VIP-пропуск)';
  else if (!isMember && pastEvents >= 3)
    message = 'Доступ разешен'; // access = true;
  else message = 'Доступ запрещен'; //access = false;

  return console.log(
    `Данные для проверки: ${age}, ${isMember}, ${pastEvents} - ${message}`
  );
  //return console.log(`${access ? 'Доступ разешен' : 'Доступ запрещен'}`);
}
checkAccess(17, true, 3);
checkAccess(19, true, 3);
checkAccess(25, false, 3);
checkAccess(70, false, 1);
checkAccess(7, false, 5);
checkAccess();

//
console.log('\n  -------------- Задачки на CodeWars ---------------------');

//1. https://www.codewars.com/kata/55a70521798b14d4750000a4
/*Создайте функцию, которая принимает параметр, представляющий собой name, и возвращает сообщение: "Hello, <name> how are you doing today?".*/
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

//2. https://www.codewars.com/kata/583f158ea20cfcbeb400000a
/*
  Даны два числа и арифметический оператор (его название в виде строки). Верните результат применения этого оператора к двум числам.

a и b оба будут целыми положительными числами, и a всегда будет первым числом в операции и b всегда вторым.
Четыре оператора - это "сложение", "вычитание", "деление", "умножение".

Несколько примеров: (Ввод1, Ввод2, Ввод3 --> Вывод)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Попробуйте сделать это без использования операторов if!
*/

function arithmetic(a, b, operator) {
  let result;
  switch (operator) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    default:
      result = 'Error';
  }
  return result;
}

// 3. https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
/*
 Нам нужна простая функция, которая будет определять, нужно ли использовать форму множественного числа. Она должна принимать число и возвращать true, если с этим числом нужно использовать форму множественного числа, и false, если нет. Это было бы удобно при выводе на экран таких строк, как 5 minutes, 14 apples, или 1 sun.

В этой ката вам нужно помнить только об английских грамматических правилах: все, что не стоит в единственном числе (one of something), стоит во множественном (not one of something).

Все значения будут положительными целыми числами, числами с плавающей запятой или нулем.*/
function plural(n) {
  return n === 1 ? false : true;
}

//4. https://www.codewars.com/kata/554003323fd6af1c4200004e
/*Создайте функцию, которая проверяет, является ли число нечетным.
Учитывайте отрицательные и десятичные числа. Помните... все отрицательные числа могут быть как нечетными, так и четными.
Десятичные числа всегда возвращают false*/
function isOdd(n) {
  return !(n % 2 === 0) && Number.isInteger(n);
}

// 5. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
/* Напишите функцию, которая преобразует имя в инициалы. В этой задаче используются только два слова, разделенных пробелом.*/
function abbrevName(name) {
  return name
    .split(' ')
    .map((x) => x.at(0).toUpperCase())
    .join('.');
}

// 6. https://www.codewars.com/kata/55908aad6620c066bc00002a
/* Проверьте, одинаковое ли количество символов 'x' и 'o' в строке. Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любые символы. */
function XO(str) {
  let x = 0;
  let o = 0;

  str
    .toLowerCase()
    .split('')
    .forEach((i) => {
      if (i == 'o') o++;
      if (i == 'x') x++;
    });

  return x == o;
  //return      console.log(`o = ${o} & x = ${x}`);
}

console.log(XO('xo'));
console.log(XO('xxxoo'));
console.log(XO('xxxoo'));
