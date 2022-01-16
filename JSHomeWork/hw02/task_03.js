//=====================================================
/*Задача 3
Перепишите код, заменив оператор `switch` на оператор `if..else`:

switch (val) {
case 'a': console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
*/
//=====================================================
var val = 'a'
var msg;
if(val == 'a'){
    msg = 'a';
}else if (val == 'b'|| val == 'c' || val == 'd' || val == 'e'){
    msg = 'others';
} else msg = 'unknown';

console.log( 'msg: ' + msg );