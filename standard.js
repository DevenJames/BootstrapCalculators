let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');

let plus = document.getElementById('+');
let minus = document.getElementById('-');
let multiply = document.getElementById('*');
let divide = document.getElementById('/');
let backspace = document.getElementById('backspace');
let clear = document.getElementById('clear');
let equal = document.getElementById('=');

let output = document.getElementById('standardCalcOutput');

one.onclick = function(){
    output.value += 1;
}
two.onclick = function(){
    output.value += 2;
}
three.onclick = function(){
    output.value += 3;
}
four.onclick = function(){
    output.value += 4;
}
five.onclick = function(){
    output.value += 5;
}
six.onclick = function(){
    output.value += 6;
}
seven.onclick = function(){
    output.value += 7;
}
eight.onclick = function(){
    output.value += 8;
}
nine.onclick = function(){
    output.value += 9;
}
zero.onclick = function(){
    output.value += 0;
}

plus.onclick = function(){
    output.value += '+';
}
minus.onclick = function(){
    output.value += '-';
}
multiply.onclick = function(){
    output.value += '*';
}
divide.onclick = function(){
    output.value += '/';
}

backspace.onclick = function(){
    output.value = output.value.slice(0,-1);
}
clear.onclick = function(){
    output.value = '';
}
equal.onclick = function(){
    output.value = eval(output.value);
}
