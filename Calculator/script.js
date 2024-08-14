let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        display.innerText = 'Error';
    }
}

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('equals').addEventListener('click', calculateResult);

