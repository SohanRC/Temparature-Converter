var btn = document.getElementById('button');
var inp = document.getElementById('number-input');
var select = document.getElementById('temp');
var result = document.getElementById('result');
var sum;
function calculateMarks () {
    if(inp.value != "") {
        if(select.value == "Fahrenheit") {
            sum = (Number(inp.value) * (9 / 5)) + 32;
        }
        else{
            sum = (Number(inp.value) - 32) * (5 / 9);
        }
        result.innerHTML = `= ${sum.toFixed(2)}° ${select.value}`;
    }
    else{
        result.innerHTML = `Enter Correct Details`;
    }
    
}
btn.addEventListener('click' , calculateMarks);