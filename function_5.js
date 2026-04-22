/*1.	Как объявить функцию в JavaScript и почему?
c.	function checkAnswer() {}*/

/*2. Какой результат работы кода и почему? Выберите один ответ.
function greet(name) {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet());
 ответ:  a. "Hello, stranger!"

3. Что вернет вызов функции и почему?
function FindLongestString(arr) {
	let longest = "";

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const nestedLongest = FindLongestString(arr[i]);

			if (nestedLongest.length > longest.length) {
				longest = nestedLongest;
			}
		} else if (typeof arr[i] === "string") {
			if (arr[i].length > longest.length) {
				longest = arr[i];
			}
		}
	}

	return longest;
}

console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));
ответ: Вариант ответа 4:'strawberry', так как это самая длинная строка в массиве.


4. О стрелочных функциях JavaScript:
Что такое стрелочная функция в JavaScript и почему?
b. Стрелочная функция - это способ определения функции в JavaScript с использованием стрелочного синтаксиса `=>`.
*/

//5. Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию
function hello(name) {
  console.log('Hello', name);
}
hello('Maria');

/*6. Напишите функцию с калькулятором, в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). */
function calc(x, y, operator) {
  if (typeof x !== 'number' || typeof y !== 'number')
    return console.log(`Неверные данные`);
  if ((x === 0 || y === 0) && (operator === '*' || operator === '/'))
    return console.log(`Умножать и делить на 0 нельзя`);

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

/*7. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.
    "Hello world!"
    "!Hola mundo!"
    "Hallo wereld!"
    "Пpивeт мир!"
Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию.
*/
{
  function getGreetingsDeclaration() {
    const arr = [
      'Hello world!',
      '!Hola mundo!',
      'Hallo wereld!',
      'Пpивeт мир!',
    ];
    return arr;
  }
  console.log(getGreetingsDeclaration());
}
{
  const getGreetingsExpression = function () {
    return ['Hello world!', '!Hola mundo!', 'Hallo wereld!', 'Привет мир!'];
  };

  console.log(getGreetingsExpression());
}
{
  const getGreetingsArrow = () => {
    return ['Hello world!', '!Hola mundo!', 'Hallo wereld!', 'Привет мир!'];
  };

  console.log(getGreetingsArrow());
}

/*8. Какой метод был использован в данном коде (на месте *****), чтобы перевести метры в футы и почему?  */

const distanceInMeters = [2, 5, 13, 44, 100];

const distanceInFeet = distanceInMeters.map(function (i) {
  return Math.round(i * 3.28084);
});

console.log(distanceInFeet); // Вывод: [ 7, 16, 43, 144, 328 ]
//map()	Преобразует каждый элемент массива и возвращает новый массив той же длины

/*
9. Внедрите в свой код с Кофе (из дз 3, задача 11), как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.*/

const coffee_1 = 'Эспрессо';
const coffee_2 = 'Капучино';
const prices = {
  s: 100,
  m: 150,
  l: 200,
};
const recipe_1 = 'Эспрессо: молотый кофе, вода.';
const recipe_2 = 'Capuchino: эспрессо, молоко, густая молочная пена.';

function getPrice(size) {
  if (prices[size] !== undefined) return prices[size];
  return 'Цена на данный размер не предусмотрена, пожалуйста повторите заказ';
}

function orderCoffee(name, size) {
  let order;

  if (name == 'Эспрессо') order = recipe_1;
  else if (name == 'Капучино') order = recipe_2;
  else order = 'Данного кофе нет в меню';

  const price = getPrice(size);
  console.log(`${order} Цена за кофе : ${price}`);
}
orderCoffee('Эспрессо', 'm');
orderCoffee('Капучино', 'l');
orderCoffee('qwerty', '9');

/*
10. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции).
Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.*/
{
  function snailUp(wallHeight, up, down) {
    let days = (wallHeight - up) / (up - down) + 1;
    console.log(`Улитка проползет за :  ${Math.ceil(days)} дней`);
  }
  snailUp(7, 4, 2);
}
{
  function snailUp(wallHeight, up, down) {
    let days = 0;
    let distance = 0;

    function oneDay() {
      days++; // Начался новый день
      distance += up; // Улитка ползет вверх

      if (distance >= wallHeight) {
        return days; // Базовый случай: доползла, возвращаем результат
      }

      distance -= down; // Наступила ночь, сползаем
      return oneDay(); // Рекурсивный вызов: запускаем следующий день
    }

    return oneDay(); // Запускаем процесс
  }
  console.log(`Улитка проползет за :  ${snailUp(5, 3, 2)} дней`);
}

/* 11. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива. Если элемент массива не число, пропускаем этот элемент.*/
{
  function sum(arr) {
    return arr.reduce((a, b) => {
      if (typeof b == 'number') {
        return a + b;
      }
      return a;
    }, 0);
  }
  console.log(`сумма :  ${sum([1, 5, 6])} `);
  console.log(`сумма :  ${sum([1, 'p', 6])} `);
}

/*12. Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.*/
function length(arr) {
  return arr.filter((i) => i.length > 5);
}

console.log(
  `строки длиннее 5 букв :  ${length([
    'apple',
    'banana',
    'kiwi',
    'pineapple',
    'pear',
  ]).join(', ')} `
);
console.log(
  `строки длиннее 5 букв :  `,
  length(['lemon', 'cherry', 'grape', 'orange']).join(', ')
);
console.log(
  `строки длиннее 5 букв :  ${length([
    'hello',
    'world 123',
    '   ',
    'js_rules',
  ])} `
);

//------------------------ Задачи на литкоде----------------------------
//https://leetcode.com/problems/filter-elements-from-array/description/?utm_source=chatgpt.com
/*Для целочисленного массива arr и функции фильтрации fn верните отфильтрованный массив filteredArr.
    Функция fn принимает один или два аргумента:
arr[i] - число из arr
i - индекс arr[i]
filteredArr должно содержать только те элементы из arr, для которых выражение fn(arr[i], i) возвращает правдивое значение. Правдивое значение — это значение, при котором Boolean(value) возвращает true.
    Пожалуйста, решите задачу без использования встроенного метода Array.filter. */

var filter = function (arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArr.push(arr[i]);
  }
  return filteredArr;
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);

//https://leetcode.com/problems/simplify-path/description/
/*
Одна точка '.' обозначает текущий каталог.
Любая последовательность точек, которая не соответствует приведенным выше правилам, должна рассматриваться как действительное имя каталога илифайла. Например, '...'  и '....' — это действительные имена каталогов или файлов.
Упрощенный канонический путь должен соответствовать этим правилам:

Путь должен начинаться с одной косой черты '/'.
Каталоги в пути должны разделяться ровно одной косой чертой '/'.
Путь не должен заканчиваться косой чертой '/', за исключением случаев, когда это корневой каталог.
В пути не должно быть одиночных или двойных точек ('.' и '..'), обозначающих текущий или родительский каталог.
 */

//не сработает если путь = /a/./b/../../c/ (2 /../ друг за другом)
function path(str) {
  let pos = [];
  let arr = str.split('/');

  arr = arr.filter((i) => i !== '');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '..') {
      pos.push(i);
      pos.push(i - 1);
    }
    if (arr[i] === '.') {
      pos.push(i);
    }
  }

  pos = Array.from(new Set(pos.filter((x) => x >= 0).sort((a, b) => b - a)));

  for (let i = 0; i <= pos.length - 1; i++) {
    arr.splice(pos[i], 1);
  }
  return '/' + arr.join('/');
}
/*
  console.log(path('/home/')); //"/home"
  console.log(path('/home//foo/')); //"/home/foo"
  console.log(path('/home/user/Documents/../Pictures')); //"/home/user/Pictures"
  console.log(path('/../')); //"/"
  console.log(path('/.../a/../b/c/../d/./')); //"/.../b/d"
  */
var simplifyPath = function (str) {
  let stack = [];

  let arr = str.split('/');
  arr = arr.filter((i) => i !== '');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '..') {
      stack.pop();
    } else if (arr[i] === '.') {
      continue;
    } else stack.push(arr[i]);
  }

  return '/' + stack.join('/');
};

console.log(simplifyPath('/home/')); //"/home"
console.log(simplifyPath('/home//foo/')); //"/home/foo"
console.log(simplifyPath('/home/user/Documents/../Pictures')); //"/home/user/Pictures"
console.log(simplifyPath('/../')); //"/"
console.log(simplifyPath('/.../a/../b/c/../d/./')); //"/.../b/d"
