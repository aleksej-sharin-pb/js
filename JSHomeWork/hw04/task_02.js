/*Задача 2
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
*/
//=====================================================
function filter(arr, cb) {
    if (typeof cb !== "function")    throw new Error("cb  - parameter type is not function"); //может принимать только функцию
    if (Array.isArray(arr) != true)  throw new Error("arr - parameter type is not Array"); //может принимать только массив
    if (arr.length == 0)             throw new Error("parameter length is FALSE"); //выбрасываем ошибку по второму параметру
  
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if(cb(arr[i], i, arr)){
        res.push(arr[i]);
      }
    }
    return res;
  }
  //=====================================================
  function func(item, i, arr) {
       return item >= 2 ? true : false;
    // console.log({ i, item });
    // console.log({ arr });
  }
  //=====================================================
  const arr = [1, 2, 3];
  let  arr2 = filter(arr, function(item, i, arr) {}); //нет условий, пустой массив
  console.log(arr2); //[]
  //-----------------------
  let  arr3 = filter(arr, func); //применяем функцию с условием для значений >= 2
  console.log(arr3);             //[ 2, 3 ]
  //=====================================================