/*Задача 3
Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
*/
//=====================================================
function f(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let res = c !== 0 ? (a - b) / c : "Деление на ноль."; //проверка деления на ноль
    console.log(res);
  } else {
    throw new Error("all parameters type should be a Number"); //выбрасываем ошибку
  }
}
//=====================================================
// Вызов функции
//=====================================================
f(9, 3, 2);   // 3
f(9, 2, 0);   // Деление на ноль.
f("s", 9, 3); // Error: all parameters type should be a Number
//=====================================================
