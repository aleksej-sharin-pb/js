/*Задача 5
Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
Создайте из него новый массив, где останутся лежать только положительные числа `[1, 2, 3, 7]`.
Создайте для этого вспомогательную функцию `isPositive(-3)`,
которая параметром будет принимать число и возвращать true, если число положительное,и false — если отрицательное. 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

*Для добавление нового элемента в конец массива используйте метод push*

// Пример использования функции isPositvie()
isPositive(-3) // вернет false
isPositive(3) // вернет true
isPositive('s') // Error: parameter type is not a Number

// Пример использования метода push
var arr = [8];
arr.push(2);
console.log(arr[1]); // выведет число 2
*/
//=====================================================
function isPositive(a) {
  if (typeof a !== "number") throw new Error("parameter type is not a Number"); //выбрасываем ошибку
  return a >= 0 ? true : false;
}
//=====================================================
// Пример использования функции isPositvie()
isPositive(-3);   // вернет false
isPositive(3);    // вернет true
//isPositive('s') // Error: parameter type is not a Number
//=====================================================
function getPositive(arr) {
  if (typeof arr !== "object") throw new Error("parameter type should be an array"); //выбрасываем ошибку
  if (arr.length === 0)        throw new Error("parameter can't be an empty");       //выбрасываем ошибку

  let arrRes = [];
  for (val of arr) {
    if (isPositive(val)) arrRes.push(val);
  }
  //console.log(arrRes);
  return arrRes;
}
//=====================================================
console.log(getPositive([1, 2, -4, 3, -9, -1, 7])); //[ 1, 2, 3, 7 ]
//=====================================================
