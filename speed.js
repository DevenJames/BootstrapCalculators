let selectedSpeedUnit = document.getElementById('selectedSpeedUnit');
let selectMph = document.getElementById('selectMph');
let selectKmh = document.getElementById('selectKmh');
let selectMs = document.getElementById('selectMs');

speedInput = document.getElementById('speedInput');
speedOutput = document.getElementById('speedOutput');

let mphActive = false;
let kmhActive = false;
let msActive = false;

let convertSpeedInput = document.getElementById('convertSpeedInput');

selectMph.onclick = function(){
    selectedSpeedUnit.innerHTML = 'Mph' + '<span class="caret"></span>';
    mphActive = true;
    kmhActive = false;
    msActive = false;
    
}
selectKmh.onclick = function(){
    selectedSpeedUnit.innerHTML = 'Km' + '<span class="caret"></span>';
    kmhActive = true;
    mphActive = false;
    msActive = false;
}
selectMs.onclick = function(){
    selectedSpeedUnit.innerHTML = 'M/S' + '<span class="caret"></span>';
    msActive = true;
    mphActive = false;
    kmhActive = false;
}

convertSpeedInput.onclick = function(){
    if(mphActive === true){
        speedOutput.innerHTML = 
        'Kmh = ' + speedInput.value * 1.609 + '<br>' +
        'M/S = ' + speedInput.value / 2.237 + '<br>';
    }
    if(kmActive === true){
        speedOutput.innerHTML = 
        'Mph= ' + speedInput.value / 1.609 + '<br>' +
        'M/S = ' + speedInput.value * 1000  + '<br>';
    }
    if(msActive === true){
        speedOutput.innerHTML = 
        'Mph = ' + speedInput.value * 2.237 + '<br>' +
        'Kmh = ' + speedInput.value * 3.6 + '<br>';
    }
}