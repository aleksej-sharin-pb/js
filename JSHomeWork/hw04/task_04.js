/*Задача 4
Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
*/
//=====================================================
function some(arr, cb) {
    if (typeof cb !== "function")    throw new Error("cb  - parameter type is not function"); //может принимать только функцию
    if (Array.isArray(arr) != true)  throw new Error("arr - parameter type is not Array"); //может принимать только массив
    if (arr.length == 0)             throw new Error("parameter length is FALSE"); //выбрасываем ошибку по второму параметру
  
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i], i, arr)) {
        res.push(arr[i]);
      }
    }
    return res.length >=1 ? true : false; //если есть хотя бы один елемент
  }
  //=====================================================
  const arr = [1, 2, 3];
  let some1 = some(arr, function (item, i, arr) {}); //нет условий, false
  console.log(some1); // false
  //=====================================================
  // функция спроверкой елементов массива >=1
  //=====================================================
  function funcV1(item, i, arr) {
      return item >= 1 ? true : false;
    }
  //-----------------------
  let some2 = some(arr, funcV1); //применяем функцию с условием для значений >= 1
  console.log(some2); //true поскольку все значения больше 1
  //=====================================================
  // функция спроверкой елементов массива >=2
  //=====================================================
  function funcV4(item, i, arr) {
    return item > 4 ? true : false;
  }
  //-----------------------
  let some3 = some(arr, funcV4); //применяем функцию с условием для значений >4
  console.log(some3);  //false поскольку нет елементов больше 4
  //=====================================================