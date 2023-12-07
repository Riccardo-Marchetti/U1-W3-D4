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
const randomNumber = function () {
  const genNumber = Math.floor(1 + Math.random() * 91);
  const cella = document.getElementById(genNumber);
  cella.classList.add("sfondo");
  console.log("ci");
};

const but = document.getElementById("b");
but.addEventListener("click", randomNumber);
