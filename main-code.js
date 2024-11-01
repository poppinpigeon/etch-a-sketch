//create 16 divs in a grid pattern
const gridContainer = document.getElementById("gridContainer");
const gridSize = 16;

for(let i=0; i<gridSize * gridSize; i++){
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
    gridContainer.appendChild(cell);
}
