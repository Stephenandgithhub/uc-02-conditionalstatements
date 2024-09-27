//Even and Odd program
const divRoot = document.getElementById("root");

const number = Number(prompt("Inform a number"));

const remaining = number % 2;

console.log(remaining);
let print = "";

if (remaining === 0) {
  print = `${number} is an even number`;
} else {
  print = `${number} is an odd number`;
}

divRoot.appendChild(document.createTextNode(print));
