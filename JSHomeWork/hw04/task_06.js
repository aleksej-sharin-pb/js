/*Задача 6
Создать имплементацию функции `reduceRight`,
логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/
//==============================================================
function reduceRight(arr, cb, acc) {
    if (Array.isArray(arr) != true)                         throw new Error("arr - parameter type is not Array");    //может принимать только массив
    if (typeof cb !== "function")                           throw new Error("cb  - parameter type is not function"); //может принимать только функцию
    if (typeof acc !== "string" && typeof acc !== "number") throw new Error("acc  - parameter type is not string or number"); //только строку или число
  
    let res = acc; //начальное значение в результат
    //перебор с права на лево
    for (let i = arr.length-1; i >= 0; i--) { 
      if (cb(res, arr[i], i, arr)) res = cb(res, arr[i], i, arr); //значение по callback функции в результат
    }
    return res; //возвращаем результат
  }
  //==============================================================
  const arr = [1, 2, 3];
  const acc = 0;
  let reduceRight1 = reduceRight(arr, function (acc, item, i, arr) {}, acc); //нет условий, 0
  console.log(reduceRight1); // 0
  //==============================================================
  // callback  функция для получения суммы/кокатенации елементов
  //==============================================================
  function funcV1(acc, item, i, arr) {
    return (acc = acc + item);
  }
  //-----------------------
  let reduceRight2 = reduceRight(arr, funcV1, acc); //применяем функцию с числовым значение если результат должено быть число
  console.log(reduceRight2); //6
  //-----------------------
  let reduceRight3 = reduceRight(arr, funcV1, ""); //ели результат строка
  console.log(reduceRight3); //321  по reduce 123 (с лева на право)
  //==============================================================