//=====================================================
/* Задача 9
Отсортировать массив по убыванию.

var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
*/
//=====================================================
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = arr.length - 1; j > i; j--) {
    if (arr[j - 1] < arr[j]) {
      var tmp = arr[j - 1]; //временное значение, для замены местами
      arr[j - 1] = arr[j];
      arr[j] = tmp;
      // console.log(i + ' ' + j);
    }
  }
}                 //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr); //[ 6, 5, 4, 3, 2, 1 ]
//=====================================================
