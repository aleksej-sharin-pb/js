//=====================================================
/*Задача 6
Написать код который посчитает сумму всех элементов в масиве.
var arr = [1,2,3,4];
**Внимание**! - Не разрашается использовать специальные методы массивов.
*/
//=====================================================
var arr = [1, 2, 3, 4];
var sum = (i = 0);
for (i of arr) {
  sum = sum + i;
}
console.log("sum_arr:" + sum); //sum_arr:10
//=====================================================
