//mean calculator using 4 values
//if mean >=7, return "Pass", else if mean >=5"Summer Classes", else return "Fail!"

//ENTRY
const grade1 = Number(prompt("Inform grade1"));
const grade2 = Number(prompt("Inform grade2"));
const grade3 = Number(prompt("Inform grade3"));
const grade4 = Number(prompt("Inform grade4"));

//PROCESSING
const mean = (grade1 + grade2 + grade3 + grade4) / 4;
console.log(mean);

let print = "";
if (mean >= 7) {
  print = "Passed Student! ✅ - Mean:" + mean;
} else if (mean >= 5) {
  print = "Summer classes for Student 🌤️ - Mean:" + mean;
} else {
  print = "Failed Student ❌ - Mean:" + mean;
}

document.body.appendChild(document.createTextNode(print));
