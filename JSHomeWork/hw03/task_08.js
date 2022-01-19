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
//=====================================================
function f(a) {
  if (typeof a === "object") {
    if (a.length !== 0) {
      console.log(a.length);
    } else {
      throw new Error("parameter can't be an empty"); //выбрасываем ошибку
    }
  } else {
    throw new Error("parameter type should be an array"); //выбрасываем ошибку
  }
}
//=====================================================
f([1, 2, 3]);
f([]); //Error: parameter can't be an empty
f(1, 2, 3); // Error: parameter type should be an array
//=====================================================
