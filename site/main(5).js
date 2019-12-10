//alert ("привет мир");
//alert ("привет js");

//alert, prompt, confirm
//let name = prompt('Твое имя пёс?', "");

//alert(name); // Тебе 100 лет!


//Условные операторы: if, '?'

// if 
let company = prompt('Какой счет МС-МЮ ?', '');

if (company == '1:2') {
  alert('Верно!');
} else {
  alert('Вот это ты гонишь, такое не знать!!');
}



// ?
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );