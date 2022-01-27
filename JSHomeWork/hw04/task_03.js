/*Задача 3
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
*/
//=====================================================
function every(arr, cb) {
  if (typeof cb !== "function")    throw new Error("cb  - parameter type is not function"); //может принимать только функцию
  if (Array.isArray(arr) != true)  throw new Error("arr - parameter type is not Array"); //может принимать только массив
  if (arr.length == 0)             throw new Error("parameter length is FALSE"); //выбрасываем ошибку по второму параметру

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res.length == arr.length ? true : false; //все елементы должны соттв. условиям
}
//=====================================================
const arr = [1, 2, 3];
let every1 = every(arr, function (item, i, arr) {}); //нет условий, false
console.log(every1); // false
//=====================================================
// функция спроверкой елементов массива >=1
//=====================================================
function funcV1(item, i, arr) {
    return item >= 1 ? true : false;
  }
//-----------------------
let every2 = every(arr, funcV1); //применяем функцию с условием для значений >= 1
console.log(every2); //true поскольку все значения больше 1
//=====================================================
// функция спроверкой елементов массива >=2
//=====================================================
function funcV2(item, i, arr) {
  return item >= 2 ? true : false;
}
//-----------------------
let every3 = every(arr, funcV2); //применяем функцию с условием для значений >= 2
console.log(every3);  //false поскольку есть 1, кот. меньше 2
//=====================================================
