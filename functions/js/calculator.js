const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}
function clearOne() {
    display.value = display.value.slice(0, -1);
}

