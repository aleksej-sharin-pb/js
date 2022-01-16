//=====================================================
/*Задача 4
Перепишите код с использованием одной конструкции `switch`:

var a = 0;

if (a == 0) {
console.log( 0 );
}
if (a == 1) {
console.log( 1 );
}

if (a == 2 || a == 3) {
console.log( '2,3' );
}
*/
//=====================================================
var a = 0;
var msg;
switch(a){
    case 0: msg = '0';   break;
    case 1: msg = '1';   break;
    case 2: msg = '2,3';
    case 3: msg = '2,3'; break;
    default: msg = 'unknown';
}
console.log( 'msg:' + msg ); //msg:0
//=====================================================