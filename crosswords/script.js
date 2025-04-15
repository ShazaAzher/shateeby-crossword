const crosswordData = {
    downClues: {
        1: { clue: "Your favourite dish that I make", answer: "PINKPASTA", startRow: 0, startCol: 0, direction: "down" },
        2: { clue: "Your favourite childhood book", answer: "BOY", startRow: 0, startCol: 4, direction: "down" },
        3: { clue: "The first word I’d use to describe your heart", answer: "GENTLE", startRow: 0, startCol: 8, direction: "down" },
        4: { clue: "Car we both will have when we are rich", answer: "PORSCHE", startRow: 0, startCol: 12, direction: "down" },
        8: { clue: "Our favourite thing to do together", answer: "CUDDLE", startRow: 3, startCol: 0, direction: "down" },
        9: { clue: "Our song (I think)", answer: "SICK", startRow: 3, startCol: 7, direction: "down" },
        11: { clue: "Your favourite way to eat", answer: "AUTISM", startRow: 5, startCol: 0, direction: "down" },
        13: { clue: "The month we became 'us'", answer: "DECEMBER", startRow: 7, startCol: 0, direction: "down" }
    },
    acrossClues: {
        5: { clue: "The three-word phrase that means everything", answer: "ILOVEYOU", startRow: 0, startCol: 0, direction: "across" },
        6: { clue: "The first gift you gave me", answer: "LIETA", startRow: 2, startCol: 4, direction: "across" },
        7: { clue: "My favourite dish you make", answer: "RICEANDSPICE", startRow: 4, startCol: 7, direction: "across" },
        10: { clue: "My favourite thing to do to you", answer: "PIZZAHAND", startRow: 5, startCol: 10, direction: "across" },
        12: { clue: "Our (only) game", answer: "STARDEW", startRow: 7, startCol: 4, direction: "across" },
        14: { clue: "My favourite nickname", answer: "ATWEEBS", startRow: 7, startCol: 10, direction: "across" },
        15: { clue: "Book I read to you when you were sleeping on my lap", answer: "THELITTLEPRINCE", startRow: 9, startCol: 0, direction: "across" }
    }
};

const gridSize = 15;
let userAnswers = {}; // Store user input answers

// Function to generate the crossword grid
function generateGrid() {
    const gridContainer = document.getElementById("crossword-grid");
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            let cell = document.createElement("input");
            cell.type = "text";
            cell.maxLength = 1;
            cell.dataset.row = row;
            cell.dataset.col = col;
            gridContainer.appendChild(cell);
        }
    }

    // Place answers in the grid
    placeAnswers(crosswordData.downClues);
    placeAnswers(crosswordData.acrossClues);
}

// Function to place answers in the grid
function placeAnswers(clues) {
    for (let clue in clues) {
        const { answer, startRow, startCol, direction } = clues[clue];
        for (let i = 0; i < answer.length; i++) {
            const cell = document.querySelector(`[data-row="${startRow + (direction === "down" ? i : 0)}"][data-col="${startCol + (direction === "across" ? i : 0)}"]`);
            cell.value = answer[i];
            cell.disabled = true;  // Disable these cells from being edited by user
        }
    }
}

// Add clues to the page
function generateClues() {
    const downClueList = document.getElementById("down-clue-list");
    const acrossClueList = document.getElementById("across-clue-list");

    for (let clue in crosswordData.downClues) {
        let listItem = document.createElement("li");
        listItem.textContent = `${clue}. ${crosswordData.downClues[clue].clue}`;
        downClueList.appendChild(listItem);
    }

    for (let clue in crosswordData.acrossClues) {
        let listItem = document.createElement("li");
        listItem.textContent = `${clue}. ${crosswordData.acrossClues[clue].clue}`;
        acrossClueList.appendChild(listItem);
    }
}

// Initialize the crossword
generateGrid();
generateClues();

// Attach event to "Check Answers" button
document.getElementById("check-answers").addEventListener("click", checkAnswers);

// Function to check answers
function checkAnswers() {
    let correctAnswers = 0;
    let resultMessage = "You got the following answers correct: ";

    // Loop through crossword answers and check them
    for (let clue in crosswordData.downClues) {
        const { answer, startRow, startCol, direction } = crosswordData.downClues[clue];
        let userAnswer = checkAnswerInGrid(answer, startRow, startCol, direction);
        if (userAnswer === answer) {
            correctAnswers++;
        }
    }

    for (let clue in crosswordData.acrossClues) {
        const { answer, startRow, startCol, direction } = crosswordData.acrossClues[clue];
        let userAnswer = checkAnswerInGrid(answer, startRow, startCol, direction);
        if (userAnswer === answer) {
            correctAnswers++;
        }
    }

    document.getElementById("result").innerHTML = `${correctAnswers} out of ${Object.keys(crosswordData.downClues).length + Object.keys(crosswordData.acrossClues).length} answers correct!`;
}

// Helper function to check answers in grid
function checkAnswerInGrid(answer, startRow, startCol, direction) {
    let userAnswer = "";
    for (let i = 0; i < answer.length; i++) {
        const cell = document.querySelector(`[data-row="${startRow + (direction === "down" ? i : 0)}"][data-col="${startCol + (direction === "across" ? i : 0)}"]`);
        userAnswer += cell.value.toUpperCase();
    }
    return userAnswer;
}
