/*Задача 4
Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
а затем возвращает день недели на русском языке.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
*/
//=====================================================
function f(a) {
  if (typeof a !== "number") throw new Error("parameter type is not a Number"); //выбрасываем ошибку
  if (a >= 1 && a <= 7) {
    switch (a) {
      case 1:
        msg = "Воскресенье";
        break;
      case 2:
        msg = "Понедельник";
        break;
      case 3:
        msg = "Вторник";
      case 4:
        msg = "Среда";
        break;
      case 5:
        msg = "Чертверг";
        break;
      case 6:
        msg = "Пятница";
        break;
      case 7:
        msg = "Суббота";
        break;
    }
    console.log(msg);
  } else {
    throw new Error("parameter should be in the range of 1 to 7"); //выбрасываем ошибку
  }
}
//=====================================================
f(1);   // Воскресенье
f(2);   // Понедельник
f(7);   // Суббота
f(8);   // Error: parameter should be in the range of 1 to 7
f("1"); // Error: parameter type is not a Number
//=====================================================
