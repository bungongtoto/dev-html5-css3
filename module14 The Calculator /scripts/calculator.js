function equivalenceCheck() {
    if (parseInt(document.getElementById('equivalent').value)) {
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0
    }
} // this allows the last value to remain in view ontill another button is pressed.

function input(x) {
    equivalenceCheck()

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0){
        x += y * 10; //

        document.getElementById('result').value  = x;
    } else {
        let decimalCount = parseInt(document.getElementById('decimalVar').value) ;

        if(decimalCount == 1) {
            x *= 1/10;
            y += x;
            document.getElementById('result').value  = y;
        } else {
            document.getElementById('result').value  += x;
        }

        decimalCount++;
        document.getElementById('decimalVar').value = decimalCount;
    }

    if (document.getElementById("result").value == 0) {
        document.getElementById("result").value = x;
    } else {
        document.getElementById("result").value += x;
    }

}

function decimalPoint(){
    if (document.getElementById('decimalVar').value == 0){ // this function prevents multiple decimal oponits 
        document.getElementById('decimalVar').value = 1;
    }

    if (parseInt(document.getElementById('operation').value)) {
        document.getElementById('result').value = 0;
    }
}

function operantCheck() {
    if (document.getElementById('operand').value == "") {
        document.getElementById('operand').value = document.getElementById('result').value;
        document.getElementById('equivalent').value = 1;
    } else {
        operationCheck()
    }
}

function operationCheck() {
    let a = parseFloat(document.getElementById('operand').value)
    let b = parseFloat(document.getElementById('result').value)

    switch (parseInt(document.getElementById('operation').value)) {
        case 1: // addition
            a += b;
            break;
        case 2: //subtraction
            a -= b;
            break;
        case  3: // multiplication
            a *= b;
            break;
        case 4: // division
            a /= b;
            break;
        default:
            break;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
    
}



function operators(x) {
    switch (x) {
        case 1:
            document.getElementById('operation').value = 1; //addition
            break;
        case 2:
            document.getElementById('operation').value = 2; // subtract
            break;

        case 3:
            document.getElementById('operation').value = 3; // multiply
            break;

        case 4:
            document.getElementById('operation').value = 4; //divide
            break;
        default:
            break;
    }

    operantCheck();
}

function equals() {
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
}

function allClear() {
    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
}

function plusminus() {
    let x = parseFloat(document.getElementById('result').value)

    document.getElementById('result').value = x *= -1;
}

function percent() {
    let x = parseFloat(document.getElementById('result').value);
    x *= 0.01;
    document.getElementById('result').value = x;
}

function square() {
    let x = parseFloat(document.getElementById('result').value);
    x *= x;
    document.getElementById('result').value = x;
}