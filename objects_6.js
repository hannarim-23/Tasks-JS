/*
1. Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.
*/
let cars = {
  car1: {
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    color: 'White',
  },
  car2: {
    brand: 'BMW',
    model: 'M5',
    year: 2021,
    color: 'Black',
  },
  car3: {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
  },
  car4: {
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    color: 'Guards Red',
  },
};

/* 2. Работа с объектом room. Выполняйте пошагово.
    а. Создайте объект room и его параметры:
        	ключ height со значением 3
        	ключ tv со значением samsung
        	ключ big со значением true
    b. Выведите в console все параметры объекта room по очереди
    c. Выведите в console тип данных параметра big
    d. Выведите в console количество символов в строке параметра tv (длину строки)
    e. Выведите в console результат расчёта: длина строки параметра tv минус 1
    f. Поменяйте samsung на все заглавные буквы и выведите в console.
    g. Замените samsung на LG в нашем объекте room
    h. Добавьте в наш объект room ещё одну пару ключ-значение: 
        ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
    i. выведите chair в console (путем обращения к массиву)
    j. Удалите из нашего объекта room параметр big
    */

let room = {
  height: 3,
  tv: 'samsung',
  big: true,
};
console.log(room);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length - 1);
room.tv = room.tv.toUpperCase();
console.log(room.tv);
room.tv = 'LG';
room.furniture = ['table', 'chair', 'sofa'];
console.log(room.furniture[1]);
delete room.big;
console.log(room);

/* 3. Создайте функцию, которая принимает следующий объект как параметр:
    {name: "dog", legs: 4, color: "yellow"}
    Возвратите строку: "This yellow dog has 4 legs."*/
{
  function sentence(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }
  console.log(sentence({ name: 'dog', legs: 4, color: 'yellow' }));
}
{
  //4. Что произойдет при выполнении следующего кода и почему?
  const person = {
    name: 'John',
    age: 30,
    city: 'New York',
  };

  for (let key in person) {
    console.log(key); //Будут выведены все ключи свойств объекта “person”. цикл проходит по ключам и выводит их
    console.log(person[key]); //выведутся значения
  }
}

//5. Что будет результатом работы кода и почему?
const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer',
  sayHello: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
person.sayHello();
//вывод : Hello, my name is John and I am 30 years old. this метод используетмя для доступа к информации внутри объекта. this — это ключевое слово, которое указывает на текущий объект, в контексте которого вызвана функция.

/*
6. Есть список людей, которые подписались на международную встречу разработчиков.
    Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.*/
var developers = [
  {
    firstName: 'Emma',
    lastName: 'Z.',
    country: 'Netherlands',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'Peter',
    lastName: 'B.',
    country: 'Poland',
    age: 48,
    language: 'Javascript',
  },
  {
    firstName: 'Natasha',
    lastName: 'P.',
    country: 'Mexico',
    age: 25,
    language: 'C#',
  },
  {
    firstName: 'Josh',
    lastName: 'A.',
    country: 'USA',
    age: 26,
    language: 'C#',
  },
  {
    firstName: 'Augusto',
    lastName: 'C.',
    country: 'Spain',
    age: 32,
    language: 'Java',
  },
  {
    firstName: 'Lei Mi',
    lastName: 'S.',
    country: 'China',
    age: 52,
    language: 'Fortran',
  },
  {
    firstName: 'Mikey',
    lastName: 'L.',
    country: 'New Zealand',
    age: 30,
    language: 'Node',
  },
];
{
  function find(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
      if (arrObj[i].language.toLowerCase() == 'javascript') return true;
    }
    return false;
  }
}
console.log('javascript Разработчик - ', find(developers));

//7. Задача для сладкоежек. Есть массив десертов. Выведите самый дешевый десерт и самый дорогой десерт.
const desserts = [
  { name: 'Пирожное', price: 65 },
  { name: 'Мороженое', price: 35 },
  { name: 'Торт Наполеон', price: 250 },
  { name: 'Песочное Печенье', price: 50 },
  { name: 'Пудинг', price: 80 },
  { name: 'Фруктовый Тарт', price: 40 },
  { name: 'Желе Земляничное', price: 40 },
  { name: 'Вафли Шоколадные', price: 36 },
  { name: 'Булочка с Изюмом', price: 28 },
];

{
  function max_min(arrObj) {
    let max = arrObj[0];
    let min = arrObj[0];

    for (let i = 1; i < desserts.length; i++) {
      if (arrObj[i].price > max.price) {
        max = arrObj[i];
      } else if (arrObj[i].price < min.price) min = arrObj[i];
    }
    return `самый дешевый = ${min.name} : ${min.price}, самый дорогой = ${max.name} : ${max.price}`;
  }
  console.log(max_min(desserts));
}

/* 8. Креативное задание.
Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке должно быть по 5 книг каждого писателя. Каждая книга должна иметь идентификатор (isbn), имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5) и 
первое предложение/строку. */

const library = [
  // --- Александр Сергеевич Пушкин ---
  {
    isbn: '978-5-04-113245-3',
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    year: 1833,
    genre: 'Роман в стихах',
    pages: 224,
    popularity: 5,
    firstLine: 'Мой дядя самых честных правил, когда не в шутку занемог...',
  },
  {
    isbn: '978-5-17-069842-4',
    title: 'Капитанская дочка',
    author: 'Александр Пушкин',
    year: 1836,
    genre: 'Исторический роман',
    pages: 192,
    popularity: 5,
    firstLine: 'Береги честь смолоду.',
  },
  {
    isbn: '978-5-389-01543-2',
    title: 'Пиковая дама',
    author: 'Александр Пушкин',
    year: 1834,
    genre: 'Повесть',
    pages: 64,
    popularity: 4,
    firstLine: 'Однажды играли в карты у конногвардейца Нарумова.',
  },
  {
    isbn: '978-5-08-005678-1',
    title: 'Руслан и Людмила',
    author: 'Александр Пушкин',
    year: 1820,
    genre: 'Поэма',
    pages: 160,
    popularity: 5,
    firstLine: 'У лукоморья дуб зелёный; Златая цепь на дубе том...',
  },
  {
    isbn: '978-5-446-70012-4',
    title: 'Медный всадник',
    author: 'Александр Пушкин',
    year: 1833,
    genre: 'Поэма',
    pages: 48,
    popularity: 4,
    firstLine: 'На берегу пустынных волн стоял Он, дум великих полн.',
  },

  // --- Марк Твен ---
  {
    isbn: '978-0-14-310733-0',
    title: 'Приключения Тома Сойера',
    author: 'Марк Твен',
    year: 1876,
    genre: 'Приключения',
    pages: 272,
    popularity: 5,
    firstLine: '— Том! Нет ответа.',
  },
  {
    isbn: '978-0-486-28061-5',
    title: 'Приключения Гекльберри Финна',
    author: 'Марк Твен',
    year: 1884,
    genre: 'Роман',
    pages: 366,
    popularity: 5,
    firstLine:
      'Вы обо мне ничего не знаете, если не читали книжки под названием «Приключения Тома Сойера».',
  },
  {
    isbn: '978-0-19-953664-1',
    title: 'Принц и нищий',
    author: 'Марк Твен',
    year: 1881,
    genre: 'Исторический роман',
    pages: 240,
    popularity: 4,
    firstLine:
      'В старом городе Лондоне в один осенний день родился мальчик в бедной семье по фамилии Кенти.',
  },
  {
    isbn: '978-1-58049-591-2',
    title: 'Янки из Коннектикута при дворе короля Артура',
    author: 'Марк Твен',
    year: 1889,
    genre: 'Фэнтези',
    pages: 416,
    popularity: 4,
    firstLine: 'Я американец. Я родился и вырос в Хартфорде, штат Коннектикут.',
  },
  {
    isbn: '978-0-553-21142-9',
    title: 'Жизнь на Миссисипи',
    author: 'Марк Твен',
    year: 1883,
    genre: 'Автобиография',
    pages: 384,
    popularity: 3,
    firstLine: 'Миссисипи — река во всех отношениях примечательная.',
  },

  // --- Стивен Кинг ---
  {
    isbn: '978-1-5011-4297-0',
    title: 'Оно',
    author: 'Стивен Кинг',
    year: 1986,
    genre: 'Ужасы',
    pages: 1138,
    popularity: 5,
    firstLine:
      'Ужас, который не кончался еще добрых двадцать восемь лет, начался с того, что мальчик сделал лодочку из газетной страницы.',
  },
  {
    isbn: '978-1-5011-4351-9',
    title: 'Сияние',
    author: 'Стивен Кинг',
    year: 1977,
    genre: 'Психологический хоррор',
    pages: 447,
    popularity: 5,
    firstLine: 'Джек Торранс подумал: Самоуверенный сукин сын.',
  },
  {
    isbn: '978-0-307-74365-7',
    title: 'Противостояние',
    author: 'Стивен Кинг',
    year: 1978,
    genre: 'Постапокалиптика',
    pages: 1152,
    popularity: 4,
    firstLine: '— Хапс, давай-ка заправим эту колымагу, — сказал Вик.',
  },
  {
    isbn: '978-1-4447-2344-1',
    title: 'Темная Башня I: Стрелок',
    author: 'Стивен Кинг',
    year: 1982,
    genre: 'Тёмное фэнтези',
    pages: 304,
    popularity: 5,
    firstLine: 'Человек в черном ушел в пустыню, и стрелок последовал за ним.',
  },
  {
    isbn: '978-1-5011-5619-9',
    title: 'Кэрри',
    author: 'Стивен Кинг',
    year: 1974,
    genre: 'Мистика',
    pages: 199,
    popularity: 4,
    firstLine: 'Никто не удивился, когда первый камень попал в цель.',
  },
];

function info(arrObj) {
  //a. Выведите в console названия всех книг.
  console.log('----------названия всех книг------------');
  for (const book of arrObj) {
    console.log(book.title);
  }

  //b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
  console.log(
    '-----------имена самой популярной книги каждого из авторов------------'
  );
  let authors = Array.from(new Set(library.map((x) => x.author)));

  for (auth of authors) {
    let authorBooks = library.filter((book) => book.author === auth);
    let maxPop = Math.max(...authorBooks.map((book) => book.popularity));
    let bestBook = authorBooks.find((book) => book.popularity === maxPop);
    console.log(
      `Самая популярная книга у ${auth} - ${bestBook.title} рейтинг ${maxPop}`
    );
  }

  //c. Отсортируйте библиотеку по году выпуска книг
  console.log(
    '-----------Отсортированная библиотека по году выпуска книг------------'
  );
  let sortBooks = [...arrObj].sort((book1, book2) => book1.year - book2.year);
  //console.log(` ${sortBooks.name} - ${sortBooks.year}`);
  sortBooks.forEach((book) => {
    console.log(`${book.year} — "${book.title}" (${book.author})`);
  });
}
info(library);
