/*1.	Создать класс Машина со свойствами Модель, Цвет и Год выпуска. Создать класс Жигули, который наследует от класса Машина. Класс Жигули имеет свойства Место выпуска и Максимальная скорость. Вывести на печать печать всю информацию о Жигулях. */
class Car {
  constructor(model, color, year) {
    this._model = model;
    this._color = color;
    this._year = year;
  }
}
class Zhiguli extends Car {
  constructor(model, color, year, place, maxSpeed) {
    super(model, color, year);
    this._place = place;
    this._maxSpeed = maxSpeed;
  }
  showInfo() {
    console.log(
      `Модель: ${this._model}, Цвет: ${this._color}, Год: ${this._year}, Сборка: ${this._place}, Скорость: ${this._maxSpeed}км/ч`
    );
  }
}

let car_1 = new Zhiguli('2101', 'Красный', 1975, 'Тольятти', 140);
car_1.showInfo();

/*2.	Дополнение к задаче №2 из предыдущего домашнего задания
-	Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
-	Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически присваивалось значение square, а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
-	Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.*/

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

class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
  }
  calcArea() {
    console.log(
      `Area of ${this._name} = ${this._sideLength * this._sideLength}`
    );
  }
}

let square_1 = new Square(5);
square_1.calcPerimeter(); //perimetr of square =  20
square_1.calcArea(); //area of square =  25

/*3.	Создать абстрактный класс Human со свойствами Имя, Возраст и Интерес и методом info. Метод Info возвращает все свойства в формате предложения. Вывести на печать печать все свойства для двух людей, Кати и Юры. */

class Human {
  constructor(name, age, interest) {
    this.name = name;
    this.age = age;
    this.interest = interest;
  }
  info() {
    return `Меня зовут ${this.name}, мне ${this.age} лет, и моё хобби - ${this.interest}.`;
  }
}
let person1 = new Human('Юра', 25, 'программирование');
let person2 = new Human('Катя', 22, 'рисование');

console.log(person1.info());
console.log(person2.info());

/*4.	Создать метод getFood, который может принимать аргумент foodType (сухая или консервная). Переписать метод так чтобы он мог также принимать аргументы количество и/или бренд.  Вывести на печать следующие фразы:
Метод без аргументов: "All dogs love to eat!"
Метод с foodType: "Shepherd Masha eats dry food."
Метод с foodType и количеством: "Poodle Demi eats 2 bowls a day of wet food."
Метод с foodType, количеством и брендом: "Corgi Henry eats 3 bowls a day of dry food by Royаl Canin." */

function getFood(foodType, quantity, brand) {
  if (foodType === undefined && quantity === undefined && brand === undefined)
    return `All dogs love to eat!`;
  else if (quantity === undefined && brand === undefined)
    return `Shepherd Masha eats ${foodType} food.`;
  else if (brand === undefined)
    return `Poodle Demi eats ${quantity} bowls a day of ${foodType} food.`;
  return `Corgi Henry eats ${quantity} bowls a day of ${foodType} food by ${brand}.`;
}

console.log(getFood());
console.log(getFood('dry'));
console.log(getFood('wet', 2));
console.log(getFood('dry', 3, 'Royal Canin'));

console.log('\n ----------------------------------\n'); // true

/*5.	Создать классы пользователя и администратора
В этом задании мы будем использовать приватные свойства, чтобы скрыть определенные значения и предотвратить прямой доступ к ним. Приватные свойства могут быть доступны только внутри объявления класса.
Мы обозначаем частную переменную или функцию символом решетки (#).
Например, если бы у нас был класс Person с номером социального страхования и функцией для расчета их налоговой категории, мы бы не обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы можем сделать эти поля приватными 

class Person {
    #socialSecurityNumber;

    #calculateTaxBracket() {
    }
}

Ваша задача:
Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User имеет закрытую функцию updatePassword() и публичную функцию resetPassword(). Класс Admin имеет публичную функцию deleteUser().

Параметры для класса User
    username: String
    (private) password: String

Параметры для класса Admin
    username: String
    (private) password: String

Свойства класса Admin
Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
    isAdmin = true;

Функции класса User
-	resetPassword(newPassword)
Вызывает закрытую функцию updatePassword с новым паролем. 

-	updatePassword(newPassword)
Устанавливает пароль пользователя на newPassword. Это частная функция.

Функции класса Admin
-	deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

Результат
-	[testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

Ограничения
-	Пароль должен быть частной переменной
-	updatePassword должен быть частной функцией
-	Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором.

*/
class User {
  #password; //приватное поле
  constructor(username, password) {
    //проверка на строку
    if (typeof username !== 'string') {
      throw new Error('username должен быть строкой');
    }
    if (typeof password !== 'string') {
      throw new Error('password должен быть строкой');
    }

    this.username = username; // Публичное свойство
    this.#password = password; // Приватное свойство
  }
  //закрытую функцию   // Приватный метод (с #)
  #updatePassword(newPassword) {
    this.#password = newPassword;
  }
  //публичную функцию   // Публичный метод
  resetPassword(newPassword) {
    this.#updatePassword(newPassword); // Вызываем приватный метод
  }

  // 🔐 Добавляем метод для проверки пароля (не возвращает сам пароль!)
  checkPassword(password) {
    return this.#password === password;
  }
}

class Admin extends User {
  isAdmin = true; // Свойство класса (не параметр)

  constructor(username, password) {
    super(username, password); // Вызываем конструктор родителя
    // Не нужно создавать username и password здесь - их создает User
  }
  //публичную функцию
  deleteUser(userToDelete) {
    return `Пользователь ${userToDelete} был удален.`;
  }
}

const testUser = new User('Alice', 'secret123');
const testAdmin = new Admin('Bob', 'admin456');
const result = [testUser, testAdmin];
console.log(result);

// Проверка работы
console.log(testUser.username); // "Alice" - доступно
console.log(testUser.password); // undefined (приватное)
//console.log(testUser.#password);       // ❌ Ошибка! Недоступно

testUser.resetPassword('newPass123'); // ✅ Работает
console.log(testUser.checkPassword('secret123')); // false (старый не работает)
console.log(testUser.checkPassword('newPass123')); // true ✅ (новый работает)

console.log(testAdmin.isAdmin); // true
console.log(testAdmin.deleteUser('Alice')); // "Пользователь Alice был удален."

console.log('\n ----------------------------------\n'); // true
/*6.	Креативное задание. Создать структуру школы.
○	В школе есть люди, студенты, учителя, декан, директор школы. 
○	У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, пол, можно больше.
○	Но так же есть и не повторяющиеся, например, 
-	студенты - номер курса (1-ый год, 2-й год, и т.д.)
-	студенты - специальность (major)
-	студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 4 - очень хорошо)
-	учителя - имеют зарплату
-	декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
-	учитель и декан - часы работы
-	директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
○	Использовать 4 принципа ООП
○	Вывести на печать имена и позицию каждого человека
○	Вывести на печать зарплату директора школы
○	Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa).
*/

class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
class Student extends People {
  constructor(name, age, gender, course, speciality, gpa) {
    super(name, age, gender);
    this.course = course;
    this.speciality = speciality;
    this.gpa = gpa;
  }
}
class Educator extends People {
  #baseSalary;  // Приватное поле (инкапсуляция)
  constructor(name, age, gender, baseSalary, businessHours) {
    super(name, age, gender);
    this.#baseSalary = baseSalary;
    this.businessHours = businessHours;
  }
    // Геттер для получения зарплаты (только чтение!)
    getBaseSalary() {
      return this.#baseSalary;
    }
    
    // Сеттер с валидацией (опционально)
    setBaseSalary(newSalary) {
      if (newSalary > 0) {
        this.#baseSalary = newSalary;
      } else {
        console.log("Ошибка: зарплата должна быть положительной!");
      }
    }
  getMonthlySalary() {
    return this.#baseSalary;
  }
  getPosition() {
    return 'Учитель';
  }
}

class Dean extends Educator {
  /*  constructor(name, age, gender, baseSalary, businessHours){//автоматически наследует, если нет изменений
    super (name, age, gender, baseSalary, businessHours);
  }*/ //-	декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
  getMonthlySalary() {
    return this.getBaseSalary() * 2;
  }
  getYearlyBonus() {
    return this.getBaseSalary();
  }
  getPosition() {
    return 'Декан';
  }
  getYearSalary() {
    return this.getMonthlySalary() * 12 + this.getYearlyBonus();
  }
}
class Director extends Educator {
  /*  constructor(name, age, gender, baseSalary, businessHours){//автоматически наследует, если нет изменений
    super (name, age, gender, baseSalary, businessHours);
  }*/ //	директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
  getMonthlySalary() {
    return this.getBaseSalary() * 2 * 1.5;
  }
  getYearlyBonus() {
    return this.getBaseSalary() * 2;
  }
  getPosition() {
    return 'Директор';
  }
  getYearSalary() {
    return this.getMonthlySalary() * 12 + this.getYearlyBonus();
  }
}

// Создаем студентов
const students = [
  new Student('Анна Иванова', 20, 'Ж', 2, 'Информатика', 3.8),
  new Student('Петр Петров', 21, 'М', 3, 'Математика', 3.2),
  new Student('Ольга Сидорова', 19, 'Ж', 1, 'Физика', 4.0),
  new Student('Иван Козлов', 20, 'М', 2, 'Информатика', 3.9),
  new Student('Мария Смирнова', 22, 'Ж', 4, 'Химия', 3.5),
];

// Создаем работников
const teachers = [
  new Educator('Иван Петрович', 35, 'М', 1000, 40),
  new Educator('Мария Николаевна', 45, 'Ж', 1000, 40),
  new Educator('Павел Сидоров', 55, 'М', 1000, 40),
];
const dean = new Dean('Мария Ивановна', 45, 'Ж', 2000, 40);
const director = new Director('Алексей Сидорович', 55, 'М', 3000, 50);

// Все люди в одном массиве
const allPeople = [...students, ...teachers, dean, director];

//Вывод результатов:
console.log('='.repeat(50));
console.log('1. Имена и позиции каждого человека');
console.log('='.repeat(50));

//Вывести на печать имена и позицию каждого человека
allPeople.forEach((person) => {
  if (person instanceof Student) {
    console.log(
      `${person.name} (${person.age} лет) - Студент ${person.course} курса, ${person.speciality}`
    );
  } else if (person instanceof Director) {
    console.log(`${person.name} (${person.age} лет) - ${person.getPosition()}`);
  } else if (person instanceof Dean) {
    console.log(`${person.name} (${person.age} лет) - ${person.getPosition()}`);
  } else if (person instanceof Educator) {
    console.log(`${person.name} (${person.age} лет) - ${person.getPosition()}`);
  }
});

//Вывести на печать зарплату директора школы
console.log('\n' + '='.repeat(50));
console.log('2. Зарплата директора школы');
console.log('='.repeat(50));

console.log(
  `Ежемесячная зарплата директора ${
    director.name
  }: ${director.getMonthlySalary()} руб.`
);
console.log(`Годовой доход директора: ${director.getYearSalary()} руб.`);

//Лучший студент школы
console.log('\n' + '='.repeat(50));
console.log('3. Лучший студент школы');
console.log('='.repeat(50));

let bestStudent = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].gpa > bestStudent.gpa) {
    bestStudent = students[i];
  }
}

console.log(`🏆 ${bestStudent.name}`);
console.log(`   Курс: ${bestStudent.course}`);
console.log(`   Специальность: ${bestStudent.speciality}`);
console.log(`   Средний балл (GPA): ${bestStudent.gpa}`);


//const testTeacher = new Educator('Тест', 30, 'М', 5000, 40);
// ❌ Прямой доступ к приватному полю НЕВОЗМОЖЕН:
//console.log(testTeacher.#baseSalary); // SyntaxError!