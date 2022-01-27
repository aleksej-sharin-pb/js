/*Задача 5
Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
*/
//==============================================================
function reduce(arr, cb, acc) {
  if (Array.isArray(arr) != true)                         throw new Error("arr - parameter type is not Array");    //может принимать только массив
  if (typeof cb !== "function")                           throw new Error("cb  - parameter type is not function"); //может принимать только функцию
  if (typeof acc !== "string" && typeof acc !== "number") throw new Error("acc  - parameter type is not string or number"); //только строку или число

  let res = acc; //начальное значение в результат

  for (let i = 0; i < arr.length; i++) {
    //console.log(cb(res, arr[i], i, arr));
    if (cb(res, arr[i], i, arr)) res = cb(res, arr[i], i, arr); //значение по callback функции в результат
  }
  return res; //возвращаем результат
}
//==============================================================
const arr = [1, 2, 3];
const acc = 0;
let reduce1 = reduce(arr, function (acc, item, i, arr) {}, acc); //нет условий, 0
console.log(reduce1); // 0
//==============================================================
// callback  функция для получения суммы/кокатенации елементов
//==============================================================
function funcV1(acc, item, i, arr) {
  return (acc = acc + item);
}
//-----------------------
let reduce2 = reduce(arr, funcV1, acc); //применяем функцию с числовым значение если результат должено быть число
console.log(reduce2); //6
//-----------------------
let reduce3 = reduce(arr, funcV1, ""); //ели результат строка
console.log(reduce3); //123
//==============================================================