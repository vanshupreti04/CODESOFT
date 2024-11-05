function insert(num) {
    document.getElementById('display').value += num;
}

function calculate() {
    let expression = document.getElementById('display').value;
    if (expression) {
        document.getElementById('display').value = eval(expression);
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function square() {
    let value = document.getElementById('display').value;
    if (value) {
        document.getElementById('display').value = Math.pow(value, 2);
    }

}