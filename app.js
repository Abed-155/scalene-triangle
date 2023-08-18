const inputA = document.querySelector("#side-a");
const inputB = document.querySelector("#side-b");
const inputC = document.querySelector("#side-c");
const calcBtn = document.querySelector(".calc-btn");
const outputA = document.querySelector(".side-a");
const outputB = document.querySelector(".side-b");
const outputC = document.querySelector(".side-c");
const outputField = document.querySelector(".output-field");
const result = document.querySelector(".result");

calcBtn.addEventListener("click", () => {
  let a = +inputA.value;
  let b = +inputB.value;
  let c = +inputC.value;

  let s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  outputField.style.display = "block";

  outputA.innerHTML = `Side a = ${a}`;
  outputB.innerHTML = `Side b = ${b}`;
  outputC.innerHTML = `Side c = ${c}`;

  inputA.value = "";
  inputB.value = "";
  inputC.value = "";

  result.innerHTML = `Area: ${area.toFixed(2)} square unit`;
});
