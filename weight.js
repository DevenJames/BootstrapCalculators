let selectedUnit = document.getElementById('selectedUnit');
let selectLb = document.getElementById('selectLb');
let selectKg = document.getElementById('selectKg');
let selectGrams = document.getElementById('selectGrams');
let selectMg = document.getElementById('selectMg');

weightInput = document.getElementById('weightInput');
weightOutput = document.getElementById('weightOutput');

let lbActive = false;
let kgActive = false;
let gramsActive = false;
let mgActive = false;

let convert = document.getElementById('convertWeightInput');

selectLb.onclick = function(){
    selectedUnit.innerHTML = 'Lb' + '<span class="caret"></span>';
    lbActive = true;
    kgActive = false;
    gramsActive = false;
    mgActive = false;
    
}
selectKg.onclick = function(){
    selectedUnit.innerHTML = 'Kg' + '<span class="caret"></span>';
    kgActive = true;
    lbActive = false;
    gramsActive = false;
    mgActive = false;
}
selectGrams.onclick = function(){
    selectedUnit.innerHTML = 'Grams' + '<span class="caret"></span>';
    gramsActive = true;
    lbActive = false;
    mgActive = false;
    kgActive = false;
}
selectMg.onclick = function(){
    selectedUnit.innerHTML = 'Mg' + '<span class="caret"></span>';
    mgActive = true;
    lbActive = false;
    kgActive = false;
    ramsActive = false;
}

convert.onclick = function(){
    if(lbActive === true){
        weightOutput.innerHTML = 
        'Kg = ' + weightInput.value / 2.205 + '<br>' +
        'Grams = ' + weightInput.value * 453.592 + '<br>' +
        'Mg = ' + weightInput.value * 453592.37;
    }
    if(kgActive === true){
        weightOutput.innerHTML = 
        'Lb= ' + weightInput.value * 2.205 + '<br>' +
        'Grams = ' + weightInput.value * 1000 + '<br>' +
        'Mg = ' + weightInput.value * 1e+6;
    }
    if(gramsActive === true){
        weightOutput.innerHTML = 
        'Lb = ' + weightInput.value * 2.205 + '<br>' +
        'Kg = ' + weightInput.value / 1000 + '<br>' +
        'Mg = ' + weightInput.value * 1000;
    }
    if(mgActive === true){
        weightOutput.innerHTML = 
        'Lb = ' + weightInput.value / 453592.37 + '<br>' +
        'Kg = ' + weightInput.value / 1e+6 + '<br>' +
        'Grams = ' + weightInput.value / 1000;
    }
}