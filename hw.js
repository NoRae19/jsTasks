//task1 start
var age = prompt('Введите ваш возраст')

if(age >= 0 && age <= 18) {
    alert('Вы еще молоды, вы должны учиться');
}
else if (age > 18 && age <=50 ) {
    alert('Вам нужно работать');
}else if (age > 50 && age <=59) {
    alert('Вам скоро на пенсию');
}else if (age > 59 && age <= 100) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}
//task1 complete

//task 2 start
var time = prompt('Введите время от 0 до 23: (Первый вариант решения задания)')

switch (true) {
    case time >= 0 && time <= 6:
        alert(time + ' час/а/ов ночи');
        break;
    case time > 7 && time <= 10:
        alert(time + ' часов утра');
        break
    case time >= 11 && time <= 17:
        alert(time -12 + ' часа/ов дня');
        break
    case time > 17 && time <= 23:
        alert(time -12 + ' часов вечера');
        break
    default:
        alert('Некорректное время');
        break;
}



var time = parseInt(prompt('Введите время от 0 до 23: (Второй вариант решения задания. Чтобы понять, посмотрите, пожалуйста код :))'));

switch (time) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    alert(time + " час/a/ов ночи");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    alert(time + " часов утра");
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    alert((time - 12) + " час/а/ов дня");
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    alert((time - 12) + " часов вечера");
    break;
  default:
    alert("Некорректное время");
    break;
}
//task2 complete

//task3 start
var firstNumber = +prompt('Введите первое число:');
var secondNumber = +prompt('Введите второе число:');
var thirdNumber = +prompt('Введите третье число:');

var middleNumber;

if ((firstNumber > secondNumber && firstNumber < thirdNumber) || (firstNumber < secondNumber && firstNumber > thirdNumber)) {
  middleNumber = firstNumber;
} else if ((secondNumber > firstNumber && secondNumber < thirdNumber) || (secondNumber < firstNumber && secondNumber > thirdNumber)) {
  middleNumber = secondNumber;
} else {
  middleNumber = thirdNumber;
}

alert('Найденное среднее число: ' + middleNumber);
//task3 complete