//-----------------Темы: циклы while, do-while.----------------
//
console.log('1.	Нарисуйте треугольник с цифрами - вниз');
/*
9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9
  8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8
    7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
      6 5 4 3 2 1 0 1 2 3 4 5 6
        5 4 3 2 1 0 1 2 3 4 5
          4 3 2 1 0 1 2 3 4
            3 2 1 0 1 2 3
              2 1 0 1 2
                1 0 1
                  0
                  */
{
  let str = '';
  let maxNum = 9; // С какого числа начинаем самый верх

  for (let i = maxNum; i >= 0; i--) {
    str += '  '.repeat(maxNum - i); // 1. Добавляем пробелы для центровки (количество пробелов увеличивается, так как i уменьшается)

    // 2. Рисуем числа от i до -i
    for (let j = i; j >= -i; j--) {
      // Math.abs превращает отрицательные числа в положительные (|-2|)
      str += Math.abs(j) + ' ';
    }

    str += '\n'; // Переход на новую строку
  }

  console.log(str);
}

//
console.log('2.	Нарисуйте ромб из цифр (будьте внимательны!)');
/*
         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
1234567890987654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1
*/
{
  const n = 10; // Количество строк в верхней половине (включая середину)

  // 1. Рисуем верхнюю часть + середину
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let numbers = '';

    //let stars = "*".repeat(2 * i - 1);//
    // Растем до пика: 1, 2, 3...
    for (let j = 1; j <= i; j++) {
      numbers += j % 10;
    }
    // Падаем после пика: ...2, 1
    for (let j = i - 1; j >= 1; j--) {
      numbers += j % 10;
    }

    console.log(spaces + numbers);
  }

  // 2. Рисуем нижнюю часть
  for (let i = n - 1; i >= 1; i--) {
    let spaces = ' '.repeat(n - i);
    let numbers = '';

    for (let j = 1; j <= i; j++) {
      numbers += j % 10;
    }
    for (let j = i - 1; j >= 1; j--) {
      numbers += j % 10;
    }

    console.log(spaces + numbers);
  }
}

//
console.log('3.	Сложнее*: Нарисуйте горизонтальный треугольник из цифр');
/*
1  
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
{
  let str = '';
  let i = 1;

  for (let n = 1; n <= 5; n++) {
    for (let j = 1; j <= n; j++) {
      str += `${i++} `;
    }
    str += '\n';
  }
  console.log(str);
}
//2е решение
{
  let mas = [];
  let count = 1;
  for (let i = 0; i < 5; i++) {
    mas[i] = [];
    for (let j = 0; j < i + 1; j++) {
      mas[i][j] = count++;
    }
  }
  console.log(mas.map((row) => row.join(' ')).join('\n'));
}

//
console.log(
  '4.	Сложно, на смекалку: Нарисуйте вертикальный треугольник из цифр'
);
/*
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
*/
function drawVerticalTriangle(n) {
  let result = []; // Наш основной массив ("шкаф"), где будут лежать строки

  // 1. Создаем структуру двумерного массива
  for (let i = 0; i < n; i++) {
    result[i] = []; // Создаем пустую "полку" (строку) для каждой итерации

    let currentValue = i + 1; // Первое число в строке всегда i + 1
    result[i][0] = currentValue;

    // 2. Заполняем остальные элементы в строке (если они есть)
    for (let j = 1; j <= i; j++) {
      // 1. Вычисляем шаг для текущего перехода
      let currentStep = n - j;
      // 2. Прибавляем его к текущему числу
      currentValue += currentStep;

      // 3. Сохраняем результат в ячейку
      result[i][j] = currentValue;
    }
  }
  // Вывод результата
  console.log(result.map((row) => row.join(' ')).join('\n'));
}

drawVerticalTriangle(5);
//
console.log('5.	Креативное задание 1*');
/*
Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
Мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
*/
function decoder(str) {
  let newStr = str.replaceAll('br', '');

  console.log(`Расшифрованная строка : ${newStr}`);
  return newStr;
}
decoder(
  'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'
);

//
console.log('6.	Креативное задание 2* (посложнее)');
/*
Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему.*/

//шифровщик=дешифровщик - Каждое слово в предложении записывается задом наперед, а само предложение остается в обычном порядке. Пример: Hello World → olleH dlroW

function de_encode(str) {
  return str
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ');
}
console.log(de_encode('Hello World'));
console.log(de_encode('JavaScript is fun'));
console.log(de_encode('The quick brown fox jumps over the lazy dog'));

console.log(de_encode('olleH dlroW'));
console.log(de_encode('tpircSavaJ si nuf'));
console.log(de_encode('ehT kciuq nworb xof spmuj revo eht yzal god'));

console.log(
  '--------------------------------------------------------------------'
);
console.log('Задачи на CodeWars:');
//https://www.codewars.com/kata/5932c94f6aa4d1d786000028
console.log(
  ' Дано число n, такое что n > 1, найти, являются ли его 2й корень, 4й корень и 8й корень целыми числами (дробная часть равна 0). Вернуть true в случае положительного ответа и false в случае отрицательного.'
);
function perfectRoots(n) {
  let n2 = Math.sqrt(n);
  let n4 = Math.sqrt(n2);
  let n8 = Math.sqrt(n4);
  console.log(`${n} - ${n2} - ${n4} - ${n8}`);
  if (n2 % 1 == 0 && n4 % 1 == 0 && n8 % 1 == 0) return true;
  else return false;
}
perfectRoots(6561);

//https://www.codewars.com/kata/570bcd9715944a2c8e000009
function sc(floor) {
  let str = '';

  if (floor > 6) str += 'Aa~ '.repeat(floor - 1) + 'Pa!';
  else if (floor <= 6 && floor > 1)
    str += 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
  else str;

  console.log(`str = ${str}`);
  return str;
}
sc(6);
sc(7);
sc(10);

//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
/*Для числа n нарисуйте лестницу, используя букву "I", n в высоту и n в ширину, причем самая высокая ступенька должна находиться в левом верхнем углу.
Например, n = 3 получится так:  "I\n I\n  I" или напечатанный:
I
 I
  I*/

function drawStairs(n) {
  let str = '';
  let i = 1;
  while (i <= n) {
    if (n == 1) str += 'I';
    else if (i == n) str += ' '.repeat(i - 1) + 'I';
    else str += ' '.repeat(i - 1) + 'I' + '\n';
    i++;
  }

  console.log(`str = ${str}`);
  return str;
}
drawStairs(5);

//https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
  let middle =
    (classPoints.reduce((acc, item) => {
      return acc + item;
    }) +
      yourPoints) /
    (classPoints.length + 1);
  return yourPoints > middle ? true : false;
}

//https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function (busStops) {
  let num = 0;

  for (let i = 0; i < busStops.length; i++) {
    num += busStops[i][0] - busStops[i][1];
  }
  console.log(`в автобусе = ${num} человек`);
  return num;
};

number([
  [10, 0],
  [3, 5],
  [5, 8],
]);

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
function findAverage(array) {
  if (array.length == 0) return 0;
  let middle = array.reduce((a, b) => a + b, 0) / array.length;
  return middle;
  //return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

//https://www.codewars.com/kata/58acfe4ae0201e1708000075
function inviteMoreWomen(L) {
  return L.reduce((a, b) => a + b, 0) > 0 ? true : false;
}

//https://www.codewars.com/kata/5265326f5fda8eb1160004c8
function numberToString(num) {
  return num.toString(); //  return ''+num  // `${num}` // String(num)
}

//https://www.codewars.com/kata/544675c6f971f7399a000e79
const stringToNumber = function (str) {
  return +str; //Number(str) //parseInt(str);
};

//https://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr, d, n) {
  //let flatArray = arr.flat();
  let flatArray = [].concat(...arr);
  let arrsLength = arr.map((x) => x.length);

  if (n > flatArray.length) {
    n = n % flatArray.length;
  }

  let newArr = [];
  let stack = [];

  if (d.toLowerCase() == 'left') {
    for (let i = 0; i < n; i++) {
      stack.push(flatArray[i]);
    }
    newArr = flatArray.slice(n).concat(stack);
    //console.log(`newArr =  ${newArr}`);
  } else {
    for (let i = flatArray.length - n; i < flatArray.length; i++) {
      stack.push(flatArray[i]);
    }
    newArr = stack.concat(flatArray.slice(0, flatArray.length - n));
    //console.log(`newArr =  ${newArr}`);
  }

  let start = 0;
  let newMatrix = arrsLength.map((i) => {
    let chunk = newArr.slice(start, start + i);
    start += i;
    //console.log(`chunk`, chunk);
    return chunk;
  });
  console.log(`newMatrix`, newMatrix);
  return newMatrix;
}

//2е решение
function infiniteLoop(arr, d, n) {
  //let flatArray = arr.flat();
  let flatArray = [].concat(...arr);
  let arrsLength = arr.map((x) => x.length);

  if (n > flatArray.length) {
    n = n % flatArray.length;
  }

  let newArr = [];
  //let stack = [];

  for (let i = 0; i < n; i++) {
    if (d === 'left') {
      // ПЕРВОГО в КОНЕЦ
      flatArray.push(flatArray.shift());
    } else {
      // ПОСЛЕДНЕГО в НАЧАЛО
      flatArray.unshift(flatArray.pop());
    }
  }

  let start = 0;
  let newMatrix = arrsLength.map((i) => {
    let chunk = flatArray.slice(start, start + i);
    start += i;
    //console.log(`chunk`, chunk);
    return chunk;
  });

  return newMatrix;
}

infiniteLoop(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  'left',
  1
);

//https://www.codewars.com/kata/572cb264362806af46000793
/*
Напишите код для функции threeInOne. Функция принимает 1 параметр arr, это одномерный массив чисел. Ваша задача — объединить каждый из трех элементов в один (суммарное значение) и вернуть результат.
Пример:
threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
 */

function threeInOne(arr) {
  let start = 0;
  let newArr = [];

  for (let i = start; i < arr.length; i += 3) {
    let sliceArr = arr.slice(i, i + 3);
    newArr.push(sliceArr.reduce((a, b) => a + b, 0));
  }
  console.log(`newArr`, newArr);
  return newArr;
}
threeInOne([1, 2, 3]); //should return [6]
threeInOne([1, 2, 3, 4, 5, 6]); //should return [6,15]
threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]); //should return [6,15,24]
threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7]); //should return [9,12,21]

//https://www.codewars.com/kata/572df796914b5ba27c000c90
/*
Напишите код для функции sortIt. Функция принимает 1 параметр arr, это числовой массив. Ваша задача — отсортировать массив в соответствии с указанными условиями и вернуть новый массив (не изменяя исходный).
  условия1: по количеству элементов (в порядке возрастания) например:
sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
  условия2: если количество элементов одинаковое, то сортировка по числовым значениям (в порядке убывания). Например:
sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
Два основных условия должны быть следующими:
sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
 */
{
  function sortIt(arr) {
    let obj = {};
    arr.forEach((num) => {
      obj[num] = (obj[num] || 0) + 1; //"получить текущее значение или ноль, затем прибавить единицу и сохранить"
    });

    console.log('сколько раз встречается: ', obj);

    // 2. Сортируем копию массива (чтобы не менять исходный)
    return [...arr].sort((a, b) => {
      // Сначала сравниваем по частоте (по возрастанию)
      if (obj[a] !== obj[b]) {
        return obj[a] - obj[b];
      }
      // Если частоты одинаковые — по значению (по убыванию)
      return b - a;
    });
  }
  console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
}

//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
/*задача про гадание на цветке*/
{
  function howMuchILoveYou(nbPetals) {
    let n = nbPetals % 6;
    let result;

    switch (n) {
      case 1:
        result = 'I love you';
        break;
      case 2:
        result = 'a little';
        break;
      case 3:
        result = 'a lot';
        break;
      case 4:
        result = 'passionately';
        break;
      case 5:
        result = 'madly';
        break;
      case 6:
        result = 'not at all';
        break;
      default:
        result = 'not at all';
    }
    return result;
  }

  console.log(howMuchILoveYou(7));
}

//https://www.codewars.com/kata/56b29582461215098d00000f
/*Дан список уникальных numbers элементов, отсортированных в порядке возрастания. Верните новый список, в котором значения увеличиваются на 1 для каждого индекса от минимального до максимального значения (включая оба).
Пример - Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */

function pipeFix(numbers) {
  let min = numbers[0];
  let max = numbers[numbers.length - 1];
  let newNumbers = [];
  for (let i = min; i <= max; i++) {
    newNumbers.push(i);
  }
  return newNumbers;
}

//https://www.codewars.com/kata/5413759479ba273f8100003d
//Напишите функцию reverse, которая переворачивает список (или, в случае clojure, любую структуру данных, подобную списку)
{
  reverse = function (array) {
    return [...array].reverse();
  };
}
console.log(reverse([1, null, 14, 'two']));

{
  reverse2 = function (array) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArr.push(array[i]);
    }

    return newArr;
  };
}
console.log(reverse2([1, null, 14, 'two']));

//https://www.codewars.com/kata/515e271a311df0350d00000f
/*Дополните функцию square sum так, чтобы она возводила в квадрат каждое переданное ей число, а затем складывала результаты.
Например, для [1, 2, 2] она должна вернуть 9, потому что  */

function squareSum(numbers) {
  return numbers.map((x) => x * x).reduce((a, b) => a + b, 0);
}
console.log(squareSum([0, 3, 4, 5]));

//https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  //return arr.reduce((a,b)=>{if( b>0){return a+b}return a;},0)
  return arr.reduce((a, b) => (b > 0 ? a + b : a), 0);
}
console.log(positiveSum([1, -2, 3, 4, 5]));

//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
/*Дополните функцию, которая принимает последовательность чисел в качестве единственного параметра. Ваша функция должна возвращать сумму четных значений этой последовательности.
На вход подается последовательность чисел: целых и/или с плавающей запятой.*/

function sumEvenNumbers(input) {
  return input.reduce((sum, b) => (b % 2 == 0 ? sum + b : sum), 0);
}

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c
/*Напишите функцию, которая принимает массив чисел и возвращает их сумму. Числа могут быть отрицательными. Если массив пуст, верните 0.*/
function sum(numbers) {
  return numbers.reduce((sum, b) => sum + b, 0);
}

//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
/*Для заданного числа (n) заполните массив всеми числами до этого числа включительно, но без нуля. */
function monkeyCount(n) {
  let result = [];
  for (let i = 1; i <= n; i++) result.push(i);
  return result;
}

//https://www.codewars.com/kata/571d42206414b103dc0006a1
/* Напишите функцию, которая создает массив с числами от 0 до N-1 в нем.
Например, следующий код создаст массив с числами от 0 до 4:
arr(5) // => [0,1,2,3,4] */
const arr = (N = 0) => {
  let newArr = [];
  for (let i = 0; i < N; i++) {
    newArr.push(i);
  }
  return newArr;
};

/*
Дополнительные, более сложные задачи (не обязательно делать):
https://www.codewars.com/kata/555086d53eac039a2a000083
https://www.codewars.com/kata/5865918c6b569962950002a1 
https://www.codewars.com/kata/50654ddff44f800200000007 
https://www.codewars.com/kata/57cc975ed542d3148f00015b
https://www.codewars.com/kata/582e4c3406e37fcc770001ad

https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ https://leetcode.com/problems/search-insert-position/ 
https://leetcode.com/problems/remove-element/ 
https://leetcode.com/problems/two-sum/description/ 
https://leetcode.com/problems/merge-sorted-array/description/ 
*/
