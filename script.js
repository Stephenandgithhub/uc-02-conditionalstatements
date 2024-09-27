//Program reads 2 numeric value & calculates the sum
//If sum>5 return "Over the limit", else "In the limit"

//INPUT
// -> Get value1
// -> Get value2
const value1 = Number(prompt("First Value:"));
const value2 = Number(prompt("Second Value:"));
console.log(value1, value2);

//PROCESSING
// -> sum value1 & value2 = result variable
const result = value1 + value2;
console.log(result);
// -> validate result: return "Over the limit", else "In the limit"
let print = "";
if (result > 5) {
  print = "Over the limit!";
} else if (result < 0) {
  print = "Damn!";
} else {
  print = "In the limit :)";
}

// -> Create a percentage variable
const percentage = (value1 * 0.1) / value2;
// percentage >= 10, return "Percentage Accepted!", else "Rejected!"

if (percentage >= 10) {
  print = "Percentage Accepted!";
} else {
  print = "Percentage Rejected";
}

//same stuff as ">=" : if (percentage > 10 && percentage === 10) {print = "";}

//OUTPUT
// -> Print result validation
const divRoot = document.getElementById("root");
divRoot.appendChild(document.createTextNode(print));
