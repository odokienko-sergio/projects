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

//console.log(40 + myNumber); // вывод в консоли 40 + то что было присвоено myNumber
//console.log(40 - myNumber); // вывод в консоли 40 - то что было присвоено myNumber
//console.log(40 * myNumber); // вывод в консоли 40 умноженно на  то что было присвоено myNumber
//console.log(40 / myNumber); // вывод в консоли 40 поделенно на то что было присвоено myNumber
//myNumber --; // уменьшение на еденицу
//console.log(myNumber);
//console.log(Math.round(5.55)); // Math.round - метод стандартного математического округления чисел
//console.log(Math.ceil(5.1)); // Math.ceil - метод округления всегда в большую сторону: 5.1 будет 6
//console.log(Math.floor(5.9)); // Math.floor - метод округления всегда в меньшую сторону: 5.9 будет 5

//var newNumber = 2.437;
//newNumber.toFixed(1);
//console.log(newNumber.toFixed(1));

// Строки
//console.log("40" + myNumber); // Конкатенация -
                              //в данном случае "40" идет не как число, а как строка из за "". 
                              //В таком случае "40" + myNumber оба своайства превращаются в строковые, 
                              //на выходе получается прибавление первого свойства с вторым, а не сумма этих значений.
//console.log(myString + " Как дела?");
//console.log(myString.toLowerCase()); // toLowerCase() - метод превращение строки в строку написанная всеми маленькими буквами.
//console.log(myString.toUpperCase());

//Массивы

//var names = ["Вася", "Петя", "100"];
//console.log(names[1].toUpperCase()); //вывод элемента массива под индексом 1, в данном случае это Петя

//names[0] = "Маша"; // что бы изменить элемент массива на другой, в данном случае Вася на Маша.
//console.log(names[0].toLowerCase());

//names.push("Света"); // добавление нового элемента в конец массива. У него индекс 3.
//console.log(names[3]);

//console.log(names);

//console.log(myObject);

///////////////////////

//var titleTable = "EPL 19-20";
//var team1 = "1. Manchester City";
//var team2 = "2. Liverpool";
//var team3 = "3. Totenham";
//var team4 = "4. Manchester United";
//var periods = "...";
//var teamLoser = "10. Chealse";

//console.log("_________" + titleTable + "_________");
//console.log(team1);
//console.log(team2);
//console.log(team3);
//console.log(team4);
//console.log(periods);
//console.log(teamLoser);
//var players  = ["Aguero 27", "Mane 24", "Kane 23", "Rachford 19", "Salah 16"];
//console.log("_______");
//console.log("Лучшие Бомбардиры:");
//console.log(players);
//console.log("Лучший игрок МЮ:");
//console.log(players[3]);
//players[1] = "Sane 25";
//console.log(players[1].toLowerCase());
//console.log(players);
//players.push("Martial");
//console.log(players[5]);
//console.log(players);

// Условия
if ("5" == 5) { // Данное условие смотрит только на значение данных, строка "5" и число 5 одно и тоже.
	console.log("Условие выполнилось");
}

if ("Вася" !== "Петя" || myNumber > 20) { //Строго не равно, проверятеся не только значение, но и типы данных.
	                                      // знак || означает ИЛИ
	console.log("Условие выполнилось 2");
}

if (myNumber > 20) {  // myNumber ровно 10.484 
   console.log("Число меньше 20 result 1") // Если myNumber больше 20 выводиться эта часть условия, в данном случае НЕТ.

} else { //  В таком случае вывоится эта часть условия.
   console.log("Число больше 20 result 2") 
}









