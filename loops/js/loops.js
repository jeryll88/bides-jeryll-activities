function clearOutput(title) {
  output.textContent = title + "\n----------------\n";
}
//how many times you want to loop
function forLoop() {
  clearOutput("FOR LOOP");
  for (let i = 1; i <= 10; i++) {
    output.textContent += `Count: ${i}\n`;
  }
}
//don't know the exact number of iterations
function whileLoop() {
  clearOutput("WHILE LOOP");
  let i = 1;
  while (i <= 6) {
    output.textContent += `Count: ${i}\n`;
    i++;
  } 
}
//loop must run at least once
function doWhileLoop() {
  clearOutput("DO...WHILE LOOP");
  let i = 1;
  do {
    output.textContent += `Count: ${i}\n`;
    i++;
  } while (i <= 5);
}
//values of iterable objects
function forOfLoop() {
  clearOutput("FOR...OF LOOP");
  const fruits = ["Apple", "Banana", "Mango", "Strawberry"];
  for (const fruit of fruits) {
    output.textContent += fruit + "\n";
  }
}
//key and values
function forInLoop() {
  clearOutput("FOR...IN LOOP");
  const person = {
    name: "Jeryll",
    age: 18,
    course: "IT"

  };
  for (const key in person) {
    output.textContent += `${key}: ${person[key]}\n`;
  }
}
//index and num
function forEachLoop() {
  clearOutput("FOREACH LOOP");
  const numbers = [10, 20, 30, 40, 50];
  numbers.forEach((num, index) => {
    output.textContent += `${index}: ${num}\n`;
  });
}
