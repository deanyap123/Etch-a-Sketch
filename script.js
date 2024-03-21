const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const left = document.createElement("div");
left.className = "left";
container.appendChild(left);

const right = document.createElement("div");
right.className = "right";
container.appendChild(right);

const clearBtn = document.createElement("button");
clearBtn.className = "clear";
clearBtn.textContent = "CLEAR";
left.appendChild(clearBtn);

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    right.appendChild(row);

    for (let j = 0; j < 16; j++) {
      const column = document.createElement("div");
      column.className = "column";
      column.style.width = "3rem";
      column.style.height = "3rem";
      column.style.border = "pink solid 2px";
      row.appendChild(column);
    }
  }
}

createGrid();

const columns = document.querySelectorAll(".column");

// Add event listener to each column

columns.forEach((column) => {
  column.addEventListener("mouseover", () => {
    column.style.backgroundColor = "black";
  });
});

clearBtn.addEventListener("click", () => {
  columns.forEach((column) => {
    column.style.backgroundColor = "white";
  });
});
