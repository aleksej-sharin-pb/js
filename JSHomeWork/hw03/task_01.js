//=====================================================
/*Задача 1
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
f(2); // 8
f('Content'); // Error: parameter type is not a Number
*/
//=====================================================
//Функция расчета куба числа
//=====================================================
function f(a) {
  if (typeof a === "number") {
    let res = a;
    for (let i = 1; i < 3; i++) {
      res *= a;
    }
    console.log(res);
  } else {
    throw new Error("parameter type is not a Number"); //выбрасываем ошибку
  }
}
//=====================================================
// Вызов функции
//=====================================================
f(2);   // 8
f(3);   // 27
f('3'); // Error: parameter type is not a Number
//=====================================================
