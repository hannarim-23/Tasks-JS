//1. Есть класс Song. Выведите на печать автора песни.
class Song {
  #year; // Приватное свойство, оно ТЕПЕРЬ реально внутреннее
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this.#year = year;
  }

  get author() {
    return this._author;
  }

  set author(writer) {
    this._author = writer;
  }

  get yearSecret() {
    return 'year: ' + this.#year;
  }
}

let author1 = new Song('simphony 5', 'Bah', 1856);
console.log(author1._name); //свойство
console.log(author1._author); //свойство
console.log(author1.name); //обращение к методу get, но оно не определено
console.log(author1.author); //обращение к методу get - get author()
console.log(author1.yearSecret); //обращение к секретному полю только через метод get
//console.log(mySong.#year); // ОШИБКА!

/*2. Определите класс Shape. 
    - Он имеет три свойства: name, sides, и sideLength. 
    - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, 
        например квадрат или равносторонний треугольник.
    - Добавьте конструктор в этот класс. 
    - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
    - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр 
        (длину внешнего края фигуры) и записывает результат в консоль.
    - Создайте новый экземпляр класса Shape с именем square. 
    - Дайте name ему square, sides = 4 и sideLength = 5
    - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, 
        записывает ли он результаты вычислений в консоль браузера, как ожидалось.
    - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
    - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.
*/
class Shape {
  constructor(name, sides, sideLength) {
    this._name = name;
    this._sides = sides;
    this._sideLength = sideLength;
  }
  calcPerimeter() {
    const perimeter = this._sides * this._sideLength;
    console.log(`perimetr of ${this._name} = `, perimeter);
  }
}
let square = new Shape('square', 4, 5);
let triangle = new Shape('triangle', 3, 3);

square.calcPerimeter(); // Выведет: 20
triangle.calcPerimeter(); // Выведет: 9

/*3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:
    1. "name" - строка, представляющая имя работника.
    2. "age" - число, представляющее возраст работника.
    3. "position" - строка, представляющая должность работника.
    4. "salary" - число, представляющее зарплату работника.

    Требования:
    1. Создайте конструктор класса "Employee", который принимает аргументы 
        "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
    2. Создайте геттеры и сеттеры для свойств "age", "position" и "position".
    3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать 
        новые значения свойств.*/

class Employee {
  constructor(name, age, position, salary) {
    this._name = name;
    this._age = age;
    this._position = position;
    this._salary = salary;
  }

  get age() {
    return this._age;
  }
  get position() {
    return this._position;
  }
  get salary() {
    return this._salary;
  }

  set age(ageEmployee) {
    this._age = ageEmployee;
  }
  set position(positionEmployee) {
    this._position = positionEmployee;
  }
  set salary(salaryEmployee) {
    this._salary = salaryEmployee;
  }
}

const employee_1 = new Employee('hanna', 26, 'junior', 1000);

// геттеры для всех свойств
console.log(`Data : ${employee_1.name}, ${employee_1.age}, ${employee_1.position}, ${employee_1.salary}`); // Data : hanna, 26, junior, 1000

// Используем сеттеры для изменения
employee_1.age = 30;
employee_1.position = 'middle';
employee_1.salary = 2000;
// геттеры после изменения свойств опять их читают
console.log(`Data : ${employee_1._name}, ${employee_1.age}, ${employee_1._position}, ${employee_1._salary}`); // Data : hanna, 30, middle, 2000

/*4. Создайте класс Person со следующими свойствами:
    a. Конструктор который принимает 4 аргумента: 
        - First Name (по умолчанию значение "John") 
        - Last Name (по умолчанию значение "Doe")
        - Age (по умолчанию значение 0) 
        - Gender (по умолчанию значение "Male"). 
            
    b. Метод sayFullName без аргументов и возвращает полное имя человека
    c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName 
        и возвращает "Welcome to Planet Earth <raceName>". 
        
        Пример: если значение raceName "Martians", результат должен быть 
        "Welcome to Planet Earth Martians"*/

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
  }
  sayFullName() {
    return this._firstName + ' ' + this._lastName;
  }
  /*
  greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }*/

  // Статический метод - вызывается у класса
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
const person1 = new Person();
console.log(person1.sayFullName()); //John Doe
// Обычный метод. со static будет ошибка
//onsole.log(person1.greetExtraTerrestrials('Martians'))//Welcome to Planet Earth Martians
// ✅ Статический метод
console.log(Person.greetExtraTerrestrials('Martians-Lopes')); //Welcome to Planet Earth Martians-Lopes

/*5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
   a. Выведите в console названия всех книг.
   b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
   c. Отсортируйте библиотеку по году выпуска книг */

class Library {
  constructor(isbn, title, author, year, genre, pages, popularity, firstLine) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;
    this.popularity = popularity;
    this.firstLine = firstLine;
  }
}

// --- Александр Сергеевич Пушкин (остальные 4 книги) ---
const book_1 = new Library('978-5-04-113245-3', 'Евгений Онегин', 'Александр Пушкин', 1833, 'Роман в стихах', 224, 5, 'Мой дядя самых честных правил, когда не в шутку занемог...');
const book_2 = new Library('978-5-17-069842-4', 'Капитанская дочка', 'Александр Пушкин', 1836, 'Исторический роман', 192, 5, 'Береги честь смолоду.');
const book_3 = new Library('978-5-389-01543-2', 'Пиковая дама', 'Александр Пушкин', 1834, 'Повесть', 64, 4, 'Однажды играли в карты у конногвардейца Нарумова.');
const book_4 = new Library('978-5-08-005678-1', 'Руслан и Людмила', 'Александр Пушкин', 1820, 'Поэма', 160, 5, 'У лукоморья дуб зелёный; Златая цепь на дубе том...');
const book_5 = new Library('978-5-446-70012-4', 'Медный всадник', 'Александр Пушкин', 1833, 'Поэма', 48, 4, 'На берегу пустынных волн стоял Он, дум великих полн.');

// --- Марк Твен (5 книг) ---
const book_6 = new Library('978-0-14-310733-0', 'Приключения Тома Сойера', 'Марк Твен', 1876, 'Приключения', 272, 5, '— Том! Нет ответа.');
const book_7 = new Library('978-0-486-28061-5', 'Приключения Гекльберри Финна', 'Марк Твен', 1884, 'Роман', 366, 5, 'Вы обо мне ничего не знаете, если не читали книжки под названием «Приключения Тома Сойера».');
const book_8 = new Library('978-0-19-953664-1', 'Принц и нищий', 'Марк Твен', 1881, 'Исторический роман', 240, 4, 'В старом городе Лондоне в один осенний день родился мальчик в бедной семье по фамилии Кенти.');
const book_9 = new Library('978-1-58049-591-2', 'Янки из Коннектикута при дворе короля Артура', 'Марк Твен', 1889, 'Фэнтези', 416, 4, 'Я американец. Я родился и вырос в Хартфорде, штат Коннектикут.');
const book_10 = new Library('978-0-553-21142-9', 'Жизнь на Миссисипи', 'Марк Твен', 1883, 'Автобиография', 384, 3, 'Миссисипи — река во всех отношениях примечательная.');

// --- Стивен Кинг (5 книг) ---

const book_11 = new Library('978-1-5011-4297-0', 'Оно', 'Стивен Кинг', 1986, 'Ужасы', 1138, 5, 'Ужас, который не кончался еще добрых двадцать восемь лет, начался с того, что мальчик сделал лодочку из газетной страницы.');
const book_12 = new Library('978-1-5011-4351-9', 'Сияние', 'Стивен Кинг', 1977, 'Психологический хоррор', 447, 5, 'Джек Торранс подумал: Самоуверенный сукин сын.');
const book_13 = new Library('978-0-307-74365-7', 'Противостояние', 'Стивен Кинг', 1978, 'Постапокалиптика', 1152, 4, '— Хапс, давай-ка заправим эту колымагу, — сказал Вик.');
const book_14 = new Library('978-1-4447-2344-1', 'Темная Башня I: Стрелок', 'Стивен Кинг', 1982, 'Тёмное фэнтези', 304, 5, 'Человек в черном ушел в пустыню, и стрелок последовал за ним.');
const book_15 = new Library('978-1-5011-5619-9', 'Кэрри', 'Стивен Кинг', 1974, 'Мистика', 199, 4, 'Никто не удивился, когда первый камень попал в цель.');
const library = [book_1, book_2, book_3, book_4, book_5, book_6, book_7, book_8, book_9, book_10, book_11, book_12, book_13, book_14, book_15];
/*
const library = [
  new Library('978-5-04-113245-3', 'Евгений Онегин', 'Александр Пушкин', 1833, 'Роман в стихах', 224, 5, 'Мой дядя...'),
  new Library('978-5-17-069842-4', 'Капитанская дочка', 'Александр Пушкин', 1836, 'Исторический роман', 192, 5, 'Береги честь смолоду.'),
  // ... и так далее
];
*/
function info(arrObj) {
  //a. Выведите в console названия всех книг.
  console.log('----------названия всех книг------------');
  for (const book of arrObj) {
    console.log(book.title);
  }

  //b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
  console.log('-----------имена самой популярной книги каждого из авторов------------');
  let authors = Array.from(new Set(library.map((x) => x.author)));

  for (auth of authors) {
    let authorBooks = library.filter((book) => book.author === auth);
    let maxPop = Math.max(...authorBooks.map((book) => book.popularity));
    let bestBook = authorBooks.find((book) => book.popularity === maxPop);
    console.log(`Самая популярная книга у ${auth} - ${bestBook.title} рейтинг ${maxPop}`);
  }

  //c. Отсортируйте библиотеку по году выпуска книг
  console.log('-----------Отсортированная библиотека по году выпуска книг------------');
  let sortBooks = [...arrObj].sort((book1, book2) => book1.year - book2.year);
  //console.log(` ${sortBooks.name} - ${sortBooks.year}`);
  sortBooks.forEach((book) => {
    console.log(`${book.year} — "${book.title}" (${book.author})`);
  });
}
info(library);
