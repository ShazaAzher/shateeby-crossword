const solutionGrid = [
    [0, 0, 0, 0, 'p', 0, 'b', 0, 'g', 0, 'p', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'i', 'l', 'o', 'v', 'e', 'y', 'o', 'u', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'n', 0, 'y', 0, 'n', 0, 'r', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'k', 0, 0, 0, 't', 0, 's', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'p', 0, 0, 0, 'l', 0, 'c', 0, 0, 0, 0, 0, 0],
    ['l', 'i', 'e', 't', 'a', 0, 0, 0, 'e', 0, 'h', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 's', 0, 0, 0, 0, 0, 'e', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 't', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['r', 'i', 'c', 'e', 'a', 'n', 'd', 's', 'p', 'i', 'c', 'e', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'u', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 's', 0, 0, 0, 0, 0, 0, 'd', 0, 0, 0, 0, 0, 0],
    [0, 0, 'p', 'i', 'z', 'z', 'a', 'h', 'a', 'n', 'd', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'c', 0, 0, 'u', 0, 0, 0, 'l', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'k', 0, 's', 't', 'a', 'r', 'd', 'e', 'w', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'd', -1, 'i', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['a', 't', 'w', 'e', 'e', 'b', 's', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'c', 0, 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'e', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'm', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 'b', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 't', 'h', 'e', 'l', 'i', 't', 't', 'l', 'e', 'p', 'r', 'i', 'n', 'c', 'e'],
    [0, 0, 0, 0, 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];  // This array represents your crossword grid

const numberingMap = [
    { row: 0, col: 4, number: 1 },
    { row: 0, col: 6, number: 2 },
    { row: 0, col: 8, number: 3 },
    { row: 0, col: 10, number: 4 },
    { row: 1, col: 4, number: 5 },
    { row: 5, col: 0, number: 6 },
    { row: 8, col: 0, number: 7 },
    { row: 8, col: 10, number: 8 },
    { row: 10, col: 3, number: 9 },
    { row: 11, col: 2, number: 10 },
    { row: 11, col: 6, number: 11 },
    { row: 13, col: 5, number: 12 },
    { row: 14, col: 4, number: 13 },
    { row: 15, col: 0, number: 14 },
    { row: 20, col: 2, number: 15 },
  ];

document.addEventListener("DOMContentLoaded", function () {
    const gridData = [
            [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]; 

    const gridContainer = document.querySelector(".grid");

    const numRows = gridData.length;
    const numCols = gridData[0].length;

    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = r;
            cell.dataset.col = c;

            // Check for numbering
            const match = numberingMap.find(n => n.row === r && n.col === c);
            if (match) {
                const numberSpan = document.createElement("span");
                numberSpan.classList.add("clue-number");
                numberSpan.innerText = match.number;
                cell.appendChild(numberSpan);
            }

            if (gridData[r][c] === 1) {
                const input = document.createElement("input");
                input.type = "text";
                input.maxLength = "1";
                cell.appendChild(input);
            } else if (gridData[r][c] === -1) {
                cell.classList.add("filled");
            } else {
                cell.classList.add("empty");
            }

            gridContainer.appendChild(cell);
        }
    }
});

const seeSolutionButton = document.getElementById("see-solution");

// Function to check and highlight correct answers
function showSolution() {
  const cells = document.querySelectorAll('.grid .cell');

  cells.forEach(cell => {
      const row = cell.dataset.row; // Get row from the cell
      const col = cell.dataset.col; // Get column from the cell

      if (row !== undefined && col !== undefined) {
          const solutionChar = solutionGrid[row][col]; // Get the solution character
          const input = cell.querySelector('input'); // Find the input inside the cell

          if (input && solutionChar) {
              input.value = solutionChar; // Set the solution character
              input.disabled = true; // Disable the input to prevent further editing
          }
      }
  });
}

// Event listener for the 'See Solution' button
seeSolutionButton.addEventListener("click", showSolution);

      
document.getElementById("checkBtn").addEventListener("click", function () {
    let allCorrect = true;

    for (let r = 0; r < solutionGrid.length; r++) {
      for (let c = 0; c < solutionGrid[0].length; c++) {
        const cell = document.querySelector(`.cell[data-row='${r}'][data-col='${c}']`);
        const solutionChar = solutionGrid[r][c];
  
        if (solutionChar && cell) {
          const input = cell.querySelector("input");
          if (input) {
            const userVal = input.value.toUpperCase();
            const correctVal = solutionChar.toUpperCase();
  
            if (userVal === correctVal) {
              input.classList.remove("incorrect");
              input.classList.add("correct");
            } else {
              input.classList.add("incorrect");
              input.classList.remove("correct");
              allCorrect = false;
            }
          }
        }
      }
    }
  
    if (allCorrect) {
      document.getElementById("loveLetter").style.display = "block";
    } else {
      alert("BOOOOOOOO DO IT AGAIN!💕");
    }
  });


    
