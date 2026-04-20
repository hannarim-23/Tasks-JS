console.log(
  '1. развивается и появляются новые названия профессии тестировщик. С помощью какого метода можно добавить название профессии "SDET" и "Lead SDET" в конец массива testerPositions? Напишите решение и распечатайте результат.'
);

const testerPositions = [
  'Quality Assurance Engineer',
  'Software Tester',
  'Test Automation Engineer',
  'Quality Analyst',
  'QA Tester',
  'Test Engineer',
  'Quality Control Analyst',
];
testerPositions.push('SDET', 'Lead SDET');
console.log(`Ответ : ${testerPositions}`);

console.log(
  '\n 2.	Установить какие методы массивов изменяют начальное значение массива. Дан массив:'
);
{
  const arr = [1, 2, 3, 'a', 'b', 'c'];
  //Методы:
  arr.at();
  arr.push('new'); //изменяет - Добавляет элемент в конец.
  arr.unshift('new2'); //изменяет - Добавляет элемент в начало.
  arr.pop(); //изменяет - Удаляет последний элемент.
  arr.shift(); //изменяет - Удаляет первый элемент.
  arr.join();
  arr.indexOf();
  arr.lastIndexOf();
  arr.includes();
  arr.flat();
  arr.concat();
  arr.reverse(); //изменяет - Разворачивает массив в обратном порядке.
  arr.slice();
  arr.splice(); //изменяет - Может удалять, заменять и вставлять элементы в любое место.
  arr.copyWithin(); //изменяет - Копирует часть массива в другое место того же массива

  console.log(`New Array : ${arr}`);
}

console.log(`\n 4.	Задача с интервью*
У вас есть массив со скобками. Количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
Решение должно работать для всех массивов внизу.`);
/*
Первая последовательность: [ '(', ')', '(', ')', ')']
Вторая последовательность:  ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
Еще: ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']
*/

function brackets(arr) {
  let rightDate = ['{', '}', '[', ']', '(', ')'];
  let newArr = [];
  let stack = [];

  arr.forEach((x) => (rightDate.includes(x) ? newArr.push(x) : false));
  //console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    const item = newArr[i];

    if (item == '(' || item == '{' || item == '[') stack.push(item);
    else if (item == ')' || item == '}' || item == ']') {
      if (stack.length == 0) return false;

      const last = stack[stack.length - 1]; // смотрим последнюю, не удаляя
      if (
        (last === '(' && item === ')') ||
        (last === '{' && item === '}') ||
        (last === '[' && item === ']')
      ) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
}

console.log(brackets(['(', ')', '(', ')']));
console.log(brackets(['(', ')', '(', ')', ')']));
console.log(brackets(['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']));
console.log(brackets(['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']));

//
console.log(
  `\n 5.Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14].`
);
{
  const arr = [4, 81, 3, -12, 99, 14];
  let min = arr[0];
  arr.forEach((x) => {
    if (x < min) min = x;
  });
  console.log(`min = ${min}`);
}
console.log(
  `\n 6.	Найти самое большое число из массива [4, 81, 3, -12, 99, 14].`
);
{
  const arr = [4, 81, 3, -12, 99, 14];
  let max = arr[0];
  arr.forEach((x) => {
    if (x > max) max = x;
  });
  console.log(`max = ${max}`);
}

console.log(
  `\n 7.	Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]. `
);
{
  //.flat(Infinity) - если не известна глубина вложенности
  const arr = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], 'Hello'];
  let sum = 0,
    sum2 = 0;
  arr.flat(Infinity).forEach((x) => {
    if (typeof x == 'number') sum += x;
  });
  arr.flat(Infinity).forEach((x) => (sum2 += x));
  console.log(`sum = ${sum}, без учета строки`);
  console.log(`sum = ${sum2}, со строкой`);
}

console.log(`\n 8.	При помощи цикла for выведите чётные числа от 2 до 10.`);
{
  let arr = [];
  for (let i = 2; i < 10; i += 2) {
    arr.push(i);
  }
  console.log(`чётные числа от 2 до 10 = ${arr}`); //если ДО - значит НЕ включая 10
}

console.log(` 9.	Переделайте задачку с улиткой используя циклы.`);
/* Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены. */
let wallHeight = 5;
const up = 3;
const down = 2;
let days = 0;
let distance = 0;

while (true) {
  days++; // Начался новый день
  distance += up; // Улитка ползет вверх

  if (distance >= wallHeight) {
    break; // Доползла! Выходим из цикла до того, как наступит ночь
  }

  distance -= down; // Наступила ночь, сползаем
}
console.log(`Улитка проползет за :  ${days} дней`);

//
console.log(` 10.	 Нарисуйте ромб (подсказка: вложенные циклы)`);
/*

  *
 ***
*****
 ***
  *
  * */

console.log(`11.	 Нарисуйте прямоугольный треугольник `);
/*
 *
 * * *
 * * * * *
 * * * * * * *
 * * * * * * * * *
 */

{
  let arr2D = [];
  let n = 5,
    m = 1;
  for (let i = 0; i < n; i++) {
    arr2D[i] = [];
    for (let j = 0; j < m; j++) {
      arr2D[i][j] = '*';
    }
    m += 2;
    console.log(arr2D[i].join(' '));
  }
}

console.log(`12.	 Нарисуйте треугольник с цифрами - лево: `);
/*
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8
0 1 2 3 4 5 6 7
0 1 2 3 4 5 6
0 1 2 3 4 5
0 1 2 3 4
0 1 2 3
0 1 2
0 1
0
*/
{
  let arr2D = [];
  let n = 10,
    m = 10;
  for (let i = 0; i < n; i++) {
    arr2D[i] = [];
    for (let j = 0; j < m; j++) {
      arr2D[i][j] = j;
    }
    m--;
    console.log(arr2D[i].join(' '));
  }
}
console.log(`*13.	 Нарисуйте треугольник с цифрами - право `);
/*
0 1 2 3 4 5 6 7 8 9
  0 1 2 3 4 5 6 7 8
    0 1 2 3 4 5 6 7
      0 1 2 3 4 5 6
        0 1 2 3 4 5
          0 1 2 3 4
            0 1 2 3
              0 1 2
                0 1
                  0
                  */

{
  let arr2D = [];
  let n = 10;
  for (let i = 0; i < n; i++) {
    arr2D[i] = [];
    for (let j = 0; j < n - i; j++) {
      arr2D[i][j] = j;
    }
    console.log('  '.repeat(i) + arr2D[i].join(' '));
  }
}

console.log(`14.	 Есть код. Какой будет результат этого кода и почему`);
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    sum += numbers[i];
  }
}
console.log(sum); //6
console.log(`Результат 6 потомучто
      1) цикл for проверяет i пока оно меньше numbers.length = 5, т.е - 0,1,2,3,4
      2) if проверяет цифры 0,1,2,3,4 на НЕ равенство 0, подходяще 1 и 3
      3) в sum попадают numbers[1] и numbers[3], которые = 2+4 = 6`);

//
console.log('\n  -------------- Задачки на CodeWars ---------------------');

//1. https://www.codewars.com/kata/554b4ac871d6813a03000035
/* В этом небольшом задании вам нужно получить строку с числами, разделенными пробелами, и найти в ней самое большое и самое маленькое число.

Примеры
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Примечания
Все числа действительны Int32, их не нужно проверять.
Во входной строке всегда будет хотя бы одно число.
В выходной строке должно быть два числа, разделенных одним пробелом, причем большее число должно стоять первым.
 */
function highAndLow(numbers) {
  let arr = numbers.split(' ');

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max + ' ' + min;
}

//2. https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
/* Напишите функцию, которая принимает в качестве параметров неотрицательное целое число n и строку s, а возвращает строку s, повторенную ровно n раз.

Примеры (ввод -> вывод)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"  */
function repeatStr(n, s) {
  return s.repeat(n);
}

//3. https://www.codewars.com/kata/55a2d7ebe362935a210000b2
/* Для заданного массива целых чисел ваше решение должно найти наименьшее целое число.
Например:
При условии [34, 15, 88, 2] ваше решение вернет 2
При условии [34, -345, -1, 100] ваше решение вернет -345
В рамках этой задачи можно предположить, что переданный массив не будет пустым. */

function findSmallestInt(arr) {
  let min = arr[0];
  arr.forEach((x) => (x < min ? (min = x) : min));
  return min;
}

//4. https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
/* Если не можешь уснуть, просто считай овец!  */
var countSheep = function (num) {
  let str = '';
  count = 1;

  while (num >= count) {
    str += `${count} sheep...`;
    count++;
  }
  return str;
};
