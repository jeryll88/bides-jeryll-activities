const display = document.getElementById("display");
const display1 = document.getElementById("display1");

let firstnum = "";
let operator = "";

function appendValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function add(value) {
    firstnum = display.value;
    operator = value;

    display1.value = operator;
    display.value = "0";
}

function calculate() {
  const secondnum = display.value;
  let result;

  if (operator === "+") {
    result = Number(firstnum) + Number(secondnum);
  } else if (operator === "-") {
    result = Number(firstnum) - Number(secondnum);
  } else if (operator === "*") {
    result = Number(firstnum) * Number(secondnum);
  } else if (operator === "/") {
    result = Number(firstnum) / Number(secondnum);
  }

  display.value = result;
  display1.value = "";
}


function clearDisplay() {
    display.value = "0";
    display1.value = "";
}

function clearOne() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}
