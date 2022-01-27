/*Задача 10
Создать имплементацию функции `reverse`,
которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив
```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
*/
//=====================================================
function reverse(arr) {
  //if (typeof arr !== "object")    throw new Error("parameter type is FALSE");   //может принимать только массив
  if (Array.isArray(arr) != true) throw new Error("parameter type is not Array");   //может принимать только массив
  if (arr.length == 0)            throw new Error("parameter length is FALSE"); //выбрасываем ошибку по второму параметру

  let res = new Array();
  var i = 0;
  var elem = arr.length;
  while (i < elem) {
    res.push(arr[elem - 1]);
    elem--;
  }
  console.log(res);
}
//=====================================================
const arr = [3, 2, 1];
reverse(arr); //[ 1, 2, 3 ]
//=====================================================
const arr2 = "x"; 
reverse(arr2);    //parameter type is not Array
/*let res = "x";
console.log(res);
console.log(typeof res);*/