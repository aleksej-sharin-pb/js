/*Задача 9
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/
//=====================================================
function arrayFill(val, cnt) {
  if (typeof cnt !== "number" || cnt <= 0)
    throw new Error("cnt - parameter type is FALSE"); //выбрасываем ошибку по второму параметру
  if (
    typeof val === "number" ||  //число
    typeof val === "string" ||  //строку
    typeof val === "object" ||  //объект 
    Array.isArray(arr) === true //массив
  ) {
    let arr = new Array();
    var i = 0;
    while (i < cnt) {
      arr.push(val);
      i++;
    }
    console.log(arr);
  } else {
    throw new Error("val - parameter type is FALSE"); //выбрасываем ошибку по первому параметру
  }
}
//=====================================================
arrayFill("x", 5); //[ 'x', 'x', 'x', 'x', 'x' ]
arrayFill(2, 2);   //[ 2, 2 ]
arrayFill(3, '3'); //cnt - parameter type is FALSE - может принимать только число
arrayFill(3, 0);   //cnt - parameter type is FALSE - не должен быть меньше 0
//=====================================================
