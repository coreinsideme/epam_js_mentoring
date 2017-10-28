function calculate(inputString) {
    if(inputString === '') {
        return 0;
    }

    var inputString = inputString.split(' ').join('');

    if(inputString.indexOf('+') > -1 || inputString.indexOf('-') > -1) {

        if(inputString.lastIndexOf('+') > inputString.lastIndexOf('-')) {
            return process(inputString, '+', function(left, right) { return left + right; });
        }

        if(inputString.lastIndexOf('-') > inputString.lastIndexOf('+')) {
            return process(inputString, '-', function(left, right) { return left - right; });
        }
    }

    if(inputString.indexOf('*') > -1 || inputString.indexOf('/') > -1) {

        if(inputString.lastIndexOf('*') > inputString.lastIndexOf('/')) {
            return process(inputString, '*', function(left, right) { return left * right; });
        }

        if(inputString.lastIndexOf('/') > inputString.lastIndexOf('*')) {
            return process(inputString, '/', function(left, right) { return left / right; });
        }
    }

    if(inputString.indexOf('^') > -1) {
        var num = inputString.split('^')[1];
        return Math.exp(num);
    }

    var result = parseInt(inputString);
    return isNaN(result) ? NaN : result; 
}

function process(inputString, signString, callback) {
    var leftOperand = inputString.substring(0, inputString.lastIndexOf(signString));
    var rightOperand = inputString.substring(inputString.lastIndexOf(signString) + 1, inputString.length);

    var leftResult = calculate(leftOperand);
    var rightResult = calculate(rightOperand);

    return callback(leftResult, rightResult);
}

var button = document.getElementById('calcButton');
button.addEventListener('click', function() {
    var areaValue = document.getElementById('inputArea').value;
    var result = document.getElementById('result');
    result.innerText = calculate(areaValue);
});
