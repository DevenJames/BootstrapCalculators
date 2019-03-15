let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');

document.getElementById('convertFahrenToCel').onclick = function(){
    celsius.value = (fahrenheit.value - 32) * (5 / 9);
}