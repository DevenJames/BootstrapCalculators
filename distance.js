let selectedDistanceUnit = document.getElementById('selectedDistanceUnit');
let selectMiles = document.getElementById('selectMiles');
let selectFeet = document.getElementById('selectFeet');
let selectKm = document.getElementById('selectKm');
let selectMeters = document.getElementById('selectMeters');

distanceInput = document.getElementById('distanceInput');
distanceOutput = document.getElementById('distanceOutput');

let milesActive = false;
let feetActive = false;
let kmActive = false;
let metersActive = false;

let convertDistanceInput = document.getElementById('convertDistanceInput');

selectMiles.onclick = function(){
    selectedDistanceUnit.innerHTML = 'miles' + '<span class="caret"></span>';
    milesActive = true;
    feetActive = false;
    kmActive = false;
    metersActive = false;
    
}
selectFeet.onclick = function(){
    selectedDistanceUnit.innerHTML = 'miles' + '<span class="caret"></span>';
    feetActive = true;
    kmActive = false;
    milesActive = false;
    metersActive = false;
    
}
selectKm.onclick = function(){
    selectedDistanceUnit.innerHTML = 'Km' + '<span class="caret"></span>';
    kmActive = true;
    milesActive = false;
    feetActive = false;
    metersActive = false;
}
selectMeters.onclick = function(){
    selectedDistanceUnit.innerHTML = 'M/S' + '<span class="caret"></span>';
    metersActive = true;
    milesActive = false;
    feetActive = false;
    kmActive = false;
}

convertDistanceInput.onclick = function(){
    if(milesActive === true){
        distanceOutput.innerHTML = 
        'Feet = ' + distanceInput.value * 5280 + '<br>' +
        'Km = ' + distanceInput.value * 1.609 + '<br>' +
        'Meters = ' + distanceInput.value * 1609.344 + '<br>';
    }
    if(feetActive === true){
        distanceOutput.innerHTML = 
        'Miles= ' + distanceInput.value / 5280 + '<br>' +
        'Km = ' + distanceInput.value / 3280.84  + '<br>' +
        'Meters = ' + distanceInput.value / 3.281  + '<br>';
    }
    if(kmActive === true){
        distanceOutput.innerHTML = 
        'Miles= ' + distanceInput.value / 1.609 + '<br>' +
        'Feet = ' + distanceInput.value * 3280.84  + '<br>' +
        'Meters = ' + distanceInput.value * 1000  + '<br>';
    }
    if(metersActive === true){
        distanceOutput.innerHTML = 
        'Miles= ' + distanceInput.value / 1609.344 + '<br>' +
        'Km = ' + distanceInput.value / 1000  + '<br>' +
        'Feet = ' + distanceInput.value * 3.281  + '<br>';
    }
}