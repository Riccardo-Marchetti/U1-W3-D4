const tabella = document.getElementById("tabella");
const createcell = function () {
  for (let i = 1; i <= 90; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.setAttribute("id", i);
    cellDiv.classList.add("cel");

    tabella.appendChild(cellDiv);
    cellDiv.innerText = i;
  }
};
createcell();

const num2 = [];
for (let i = 1; i <= 90; i++) {
  num2.push(i);
}
const tabella2 = document.getElementById("tabella2");
const createcell2 = function () {
  for (let i = 1; i <= 24; i++) {
    const genNumber2 = Math.floor(Math.random() * num2.length);
    const genNumber3 = num2[genNumber2];
    num2.splice(genNumber2, 1);
    const cellDiv2 = document.createElement("div");
    cellDiv2.setAttribute("id", i);
    cellDiv2.classList.add("cel");

    tabella2.appendChild(cellDiv2);
    cellDiv2.innerText = genNumber3;
  }
};
createcell2();
const num1 = [];
for (let i = 1; i <= 90; i++) {
  num1.push(i);
}
const randomNumber = function () {
  const genNumber = Math.floor(Math.random() * num1.length);
  const genNumber1 = num1[genNumber];
  num1.splice(genNumber, 1);

  const cella = document.getElementById(genNumber1);
  cella.classList.add("sfondo");
  cella.style.textDecoration = "line-through";
  const num = document.getElementById("n");
  num.innerText = genNumber1;

  const cella2 = document.getElementById(genNumber1);
  cella2.classList.add("sfondo");
  cella2.style.textDecoration = "line-through";
  console.log(genNumber1);
};

const but = document.getElementById("b");
but.addEventListener("click", randomNumber);
