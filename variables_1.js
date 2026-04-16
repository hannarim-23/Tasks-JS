//-----------------Темы 1-2 JS----------------
//
//приветствие
console.log('Добро пожаловать в систему анализа успеваемости!');

//данные
const USER_1_NAME = 'Алиса';
const USER_1_SCORE = 17;

const USER_2_NAME = 'Карл';
const USER_2_SCORE = 22;

const MAX_SCORE = 25;

//Процент результата каждого пользователя
const USER_1_Persent = (100 * USER_1_SCORE) / MAX_SCORE;
const USER_2_Persent = (100 * USER_2_SCORE) / MAX_SCORE;

console.log(` ${USER_1_NAME} решил(-а) ${USER_1_Persent}% задач`);
console.log(` ${USER_2_NAME} решил(-а) ${USER_2_Persent}% задач`);

// кто набрал больше 20 баллов
console.log('Результаты проверки (больше 20 баллов):');

console.log(` ${USER_1_NAME}: ${USER_1_SCORE > 20}`);
console.log(` ${USER_2_NAME}: ${USER_2_SCORE > 20}`);
//
//
//
//
//-----------------Тема 3-8 JS ----------------
//
console.log(`\n Добро пожаловать в систему управления обучением (LMS)!`);

//данные
const result_1 = 85;
const result_2 = 92;
const isLectureActive = true;
const COEFFICIENT = 0.95;

//вычисляем средний балл
const averageScore = ((result_1 + result_2) / 2) * COEFFICIENT;
console.log(`Средний балл за тесты = ${averageScore}`);

//логическая проверка для получения итогового статуса успешности
const isSuccessful = averageScore >= 90 && isLectureActive == true;
console.log(`Статус успешности: ${isSuccessful}`);

//Определить финальную оценку на основе Общего Среднего Балла
switch (true) {
  case averageScore >= 95:
    console.log('Оценка = A');
    break;
  case averageScore >= 85:
    console.log('Оценка = B');
    break;
  case averageScore >= 75:
    console.log('Оценка = C');
    break;
  default:
    console.log('Оценка = D');
}

//или через IF
let grade;
if (averageScore >= 95) {
  grade = 'A';
} else if (averageScore >= 85) {
  grade = 'B';
} else if (averageScore >= 75) {
  grade = 'C';
} else {
  grade = 'D';
}
console.log(`Оценка = ${grade}`);
//
//
//
//
//-----------------Тема Map и Set, их основные методы ----------------
//
console.log(`\n\n ---------------Тема Map и Set-------------`);
//1.	Написать функцию, которая принимает строку и возвращает Map, где ключ — слово, а значение — количество его повторений.
console.log(
  `\n 1) Функцию принимает строку и возвращает Map, где ключ — слово, а значение — количество его повторений`
);
function countWordOccurrences(str) {
  // 1. Приводим строку к нижнему регистру
  // 2. Разбиваем строку на слова (по пробелам)
  const words = str.toLowerCase().split(' ');

  // 3. Создаём новый Map
  const wordMap = new Map();

  // 4. Перебираем все слова
  for (const word of words) {
    // Если слово уже есть в Map, увеличиваем счётчик
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      // Если слова нет, добавляем его со значением 1
      wordMap.set(word, 1);
    }
  }

  return wordMap;
}

const text = 'яблоко банан яблоко апельсин банан яблоко';
const result = countWordOccurrences(text);
for (const [word, count] of result) {
  console.log(`${word}: ${count}`);
}

//2.	Есть Map, где ключ — имя сотрудника, значение — отдел. Создать новый Map, где ключ — название отдела, значение — массив сотрудников.
//a.	Использовать: map.forEach(), map.set()
console.log(
  `\n 2) Создать новый Map, где ключ — название отдела, значение — массив сотрудников`
);
const employees = new Map([
  ['Анна', 'Разработка'],
  ['Борис', 'Маркетинг'],
  ['Виктор', 'Разработка'],
  ['Галина', 'HR'],
  ['Дмитрий', 'Маркетинг'],
  ['Елена', 'Разработка'],
]);
const departments = groupEmployeesByDepartment(employees);

function groupEmployeesByDepartment(employeesMap) {
  // Создаём новый Map, где ключ — отдел, значение — массив сотрудников
  const departmentsMap = new Map();

  // Перебираем исходный Map(в forEach 1й ключ, 2е - значение)
  employeesMap.forEach((department, employeeName) => {
    // Если такого отдела ещё нет в новом Map
    if (!departmentsMap.has(department)) {
      // Создаём пустой массив для этого отдела
      departmentsMap.set(department, []);
    }

    // Добавляем сотрудника в массив его отдела
    departmentsMap.get(department).push(employeeName);
  });
  return departmentsMap;
}
console.log(departments);

//3. Дан Map с именами и возрастами. Вернуть новый Map, где возраст > 18.
//a.	Использовать: перебор for...of или map.forEach()
console.log(`\n 3) Вернуть новый Map, где возраст > 18`);
const users = new Map([
  ['Алиса', 25],
  ['Карл', 3],
  ['Джон', 19],
]);

let newMap1 = new Map();
//.forEach((value, key, map) - сначала идет значение, потом ключ
users.forEach((age, name) => {
  if (age > 18) {
    newMap1.set(name, age);
  }
});
console.log(`new MAP 1= `, newMap1);

//через деструктуризацтию забираем данные
let newMap2 = new Map();
for (let [name, age] of users.entries()) {
  if (age > 18) {
    newMap2.set(name, age);
  }
}
console.log(`new MAP 2= `, newMap2);

//4. Написать функцию, которая принимает массив и возвращает новый массив без дубликатов.//	Использовать: new Set(), spread [...set].
console.log(`\n 4) Функцию, возвращает новый массив без дубликатов`);
const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

function deleteDublicates(arr) {
  const uniqueSet = new Set(arr); // создаём Set с уникальными данными
  return [...uniqueSet]; //превращает Set в массив
}
console.log(`старый массив: ${numbers} => `, deleteDublicates(numbers));
//console.log(`старый массив: ${numbers} => ${[...new Set(numbers)]}`);
//
//
//
//
//-----------------Тема деструктурирующее присваивание, REST, SPREAD, Object.keys/values/entries ----------------
//
console.log(`\n\n --------Тема деструктурирующее присваивание-----------`);
/*1. Получить в переменные:
a — первый элемент
b — второй
с – пропустить третий
*/
{
  const arr = [10, 20, 30, 40];
  let [a, b, , d] = arr;
  console.log(`\n Переменные после деструктуризации: a=${a}, b=${b}, d=${d}`);

  //2.	Объединить три массива в один:
  const a1 = [1, 2];
  const b1 = [3, 4];
  const c1 = [5, 6];
  const newArr = [...a1, ...b1, ...c1];
  console.log(`\n Объединение массивов: ${newArr}`);
}
//
//
//
//
//-----------------Темы: переменные, операторы----------------
//
console.log(`\n\n --------Темы: переменные, операторы-----------`);
console.log(` 1. Переменные`);
let firstName, lastName;
firstName = 'John';
lastName = 'Adams';

console.log(` 1.1 Объединение строк: ${firstName + ' ' + lastName}`);

firstName = 'Brandon';
lastName = 'Smith';
console.log(` 1.2 Объединение строк: ${firstName + ' ' + lastName}`);

//Выведите в консоль тип данных следующих переменных (использовать метод typeof())
console.log(
  `\n 2 Выведите в консоль тип данных следующих переменных (использовать метод typeof())`
);
{
  let a;
  let c = 9;
  let str = 'Hi 5!';
  let b = true;
  let y = 9 + '1';
  let x = 'a' / 6;

  console.log(` typeof a - ${typeof a}`); //undefined - т.к ей не присвоено значение
  console.log(` typeof c - ${typeof c}`);
  console.log(` typeof str - ${typeof str}`);
  console.log(` typeof b - ${typeof b}`);
  console.log(` typeof y - ${typeof y}`);
  console.log(` typeof x - ${typeof x}`);
}

console.log(
  `\n 3. Придумайте, какие переменные логично объявить через const, пропишите их и выведите на экран`
);
const PI = 3.14;
const BIRTH_YEAR = 2000;
const POST_CODE = 212000;
const SECOND_IN_MINUTE = 60;
const DAYS_IN_WEEK = 7;
const AGE_LIMIT = 18;

console.log(` Pi - ${PI}`);
console.log(` BIRTH YEAR - ${BIRTH_YEAR}`);
console.log(` POST_CODE - ${POST_CODE}`);
console.log(` SECOND_IN_MINUTE - ${SECOND_IN_MINUTE}`);
console.log(` DAYS_IN_WEEK - ${DAYS_IN_WEEK}`);
console.log(` AGE_LIMIT - ${AGE_LIMIT}`);

console.log(
  `\n 4. Проверьте какие числа находятся между 10 и 20 и выведете на печать для каждой цифры true или false`
);
let max = 20;
let min = 10;
let mus = [7, 85, 15];

//безымянная/анонимная функция с немедленным вызовом
((arr) => {
  arr.forEach((i) => {
    console.log(`${i} - ${i > min && i < max}`);
  });
})(mus);

console.log(`\n 5. Что выведет код и ПОЧЕМУ: `);
{
  console.log(` 5.а : это обычное сложение чисел`);
  const number = 15;
  const result = number + 5;
  console.log(result); // 20
}
{
  console.log(` 5.b : все что складывается со строками, превращается в строку`);
  const number2 = '28';
  const result = number2 + 2;
  console.log(result); // 282
}
{
  console.log(
    ` 5.c : при использовании ИЛИ, он выводит первый верный/истинный вариант или последний`
  );
  console.log(null || 2 || undefined); // 2
}
{
  console.log(` 5.d : && ищет певую ложь или выводит последнее значение`);
  const x = 5;
  const y = 10;

  console.log(x > 0 && y < 20); // true
  console.log(x < 0 && y > 0); // false
  console.log(x < 0 && y < 0); // false
  console.log(x > 0 && 'Hello'); // 'Hello'
}
{
  console.log(
    ` 5.e : при использовании ИЛИ, он выводит первый верный/истинный вариант или последний`
  );
  const a = 0;
  const b = 'World';

  console.log(a > 0 || b.length > 0); // true
  console.log(a > 0 || b.length === 0); // false
  console.log(a > 0 || ''); // '' - пустая строка
  console.log(a < 0 || 'Hello'); // Hello
}
{
  console.log(` 5.f : (false || true) && !false = > true && true => true`);
  let x = 5;
  let y = 10;
  let z = 15;
  let result = (x > y || y < z) && !(z === x); // true
  console.log(result);
}

console.log(
  `\n 6. Какого типа данных будет результат выполнения оператора "typeof" для переменной "isAdult", если возраст "age" равен 18?`
);
let age = 18;
let isAdult = age >= 18; // true
let typeOfIsAdult = typeof isAdult; //boolean
console.log(typeOfIsAdult);

//
//
//
//
//-----------------ЗАДАЧИ НА CODEWARS----------------
//
//http://www.codewars.com/kata/560f8d41cf6e1fe5c900002e
/* В JavaScript есть особый случай, когда строгое сравнение одной и той же переменной возвращает false! Попробуйте выяснить, что нужно сделать, чтобы получить такой результат! */

function findStrangeValue() {
  let x = NaN;
  return x === x; //по логике должно срабатывать с этим ответом
  return x; // но тест проходит только так
}

//http://www.codewars.com/kata/50ee6b0bdeab583673000025
/* тот код должен сохранять "codewa.rs" в переменной с именем name, но он не работает. Можете понять почему? 
var a == "code";
var b == "wa.rs";
var name == a + b;*/

var a = 'code';
var b = 'wa.rs';
var name = a + b; //ошибка в том, что вместо присваивания, переменные и их значения сравнивались.
