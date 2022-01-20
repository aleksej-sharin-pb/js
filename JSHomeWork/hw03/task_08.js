/*Задача 8
Дан массив с числами `[1, 2, 3]`.
Создайте функцию `f`, которая принимает данный массив в качестве параметров,
а затем последовательно выводит на экран его элементы.
Обязательно нужно использовать рекурсию. Использовать цикл запрещено.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
*/
//==========================================================================
// 1) Вариант с переменной для условия выхода из рекурсии, пример есть в лекции
//==========================================================================
var i = 0; 

function f(arr) {
  if (typeof arr !== "object")    throw new Error("parameter type should be an array"); //выбрасываем ошибку
  if (arr.length === 0)           throw new Error("parameter can't be an empty");       //выбрасываем ошибку
  //console.log(arr.length);
  console.log(arr[i]);
  i++;
  if (i < arr.length) f(arr);
}
//=========================================================================
f([1, 2, 3]);
// 1
// 2
// 3
f([]);      // Error: parameter can't be an empty
f(1, 2, 3); // Error: parameter type should be an array
//==========================================================================
// 2) Вариант без переменной, через удаление выведенного елемента
//==========================================================================
function f(arr) {
  if (typeof arr !== "object")    throw new Error("parameter type should be an array"); //выбрасываем ошибку
  if (arr.length === 0)           throw new Error("parameter can't be an empty");       //выбрасываем ошибку
  //console.log(arr.length);
  if (1 < arr.length){
  console.log(arr[0]);
  //arr.shift();
  arr.splice(0, 1);
  f(arr);
  } else   console.log(arr[0]);
}


f([5, 6, 7]);
// 5
// 6
// 7
//=====================================================