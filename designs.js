function makeGrid(event) {
    event.preventDefault(); //prevents default action of form submission
    const table = document.getElementById("pixelCanvas");
    const columns = parseInt(document.getElementById("inputWidth").value); //use parseInt to get a number instead of a string
    const rows = parseInt(document.getElementById("inputHeight").value);

    //nested for loop to get number of columns and rows
    for (let row = 0; row < rows; row++) {
        const tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        for (let column = 0; column < columns; column++) {
            const cell = document.createElement("td");
            tableRow.appendChild(cell);
        }
    }
}

document.getElementById("sizePicker").addEventListener("submit", makeGrid);