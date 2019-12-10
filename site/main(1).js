//alert ("привет мир");
//alert ("привет js");

// Переменные
var message; //a-z, A-Z, 0-9, $, _
var myMessage;
myMessage = "Сообщение"; // присвоили "Сообщение"

// Типы переменных
var myNumber = 10.484; // присваиваем числа (числовой тип)
var myString = "Привет, Вася!"; // строковый тип, если "10.484" - будет считатся как строковое, а не числовое.
var myBoolean = true; // false - булиев тип
var myNull = null;
var myUndefined = undefined;

var myObject = {
	name: "вася", // свойства
	age: 25 // свойства
};

// Числовые переменные

//var result = 40 + 10;
//alert(result);

//alert(40+10);

console.log(40 + myNumber); // вывод в консоли 40 + то что было присвоено myNumber
console.log(40 - myNumber); // вывод в консоли 40 - то что было присвоено myNumber
console.log(40 * myNumber); // вывод в консоли 40 умноженно на  то что было присвоено myNumber
console.log(40 / myNumber); // вывод в консоли 40 поделенно на то что было присвоено myNumber
myNumber --; // уменьшение на еденицу
console.log(myNumber);
console.log(Math.round(5.55)); // Math.round - метод стандартного математического округления чисел
console.log(Math.ceil(5.1)); // Math.ceil - метод округления всегда в большую сторону: 5.1 будет 6
console.log(Math.floor(5.9)); // Math.floor - метод округления всегда в меньшую сторону: 5.9 будет 5

var newNumber = 2.437;
newNumber.toFixed(1);
console.log(newNumber.toFixed(1));
