/*Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
*/
//=====================================================
function forEach(arr, cb) {
  if (typeof cb !== "function")    throw new Error("cb  - parameter type is not function"); //может принимать только функцию
  if (Array.isArray(arr) != true)  throw new Error("arr - parameter type is not Array"); //может принимать только массив
  if (arr.length == 0)             throw new Error("parameter length is FALSE"); //выбрасываем ошибку по второму параметру

  for (let i = 0; i < arr.length; i++) {
    console.log(i + 'й елемент, значение:' + arr[i])
    cb(arr[i], i, arr);
  }
}
//=====================================================
function func(item, i, arr) {
  console.log({ i, item });
  // console.log({ arr });
}
//=====================================================
const arr = [1, 2, 3];
forEach(arr, function(item, i, arr) {});
//-----------------------
// 0й елемент, значение:1
// 1й елемент, значение:2
// 2й елемент, значение:3
//-----------------------
forEach(arr, func);
//-----------------------
// 0й елемент, значение:1
// { i: 0, item: 1 }
// 1й елемент, значение:2
// { i: 1, item: 2 }
// 2й елемент, значение:3
// { i: 2, item: 3 }
//-----------------------
forEach(2, func);     //arr - parameter type is not Array
forEach(arr, 2);      //cb  - parameter type is not function
//=====================================================