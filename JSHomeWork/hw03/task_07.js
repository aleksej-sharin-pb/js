/*Задача 7
Сделайте функцию `getDivisors`,
которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
*/
//=====================================================
function getDivisors(a) {
  if (typeof a !== "number") throw new Error("parameter type is not a Number"); //выбрасываем ошибку
  if (a === 0)               throw new Error("parameter can't be a 0");         //выбрасываем ошибку

  var b = 1;
  var arr = [];
  while (b != a + 1) {
    if (a % b == 0) {
      arr.push(b);
    }
    b++;
  }
  console.log(arr);
}
//=====================================================
getDivisors(12);        // [1, 2, 3, 4, 6, 12]
getDivisors(55);        // [ 1, 5, 11, 55 ]
getDivisors("Content"); // Error: parameter type is not a Number
getDivisors(0);         // Error: parameter can't be a 0
//=====================================================
