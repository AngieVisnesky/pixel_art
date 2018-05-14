const table = document.getElementById("pixelCanvas");
const columns = parseInt(document.getElementById("inputWidth").value); //use parseInt to get a number instead of a string
const rows = parseInt(document.getElementById("inputHeight").value);
let cellColor = document.getElementById("colorPicker").value;

function makeGrid(event) {
    event.preventDefault(); //prevents default action of form submission
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

table.addEventListener("click", function(event) {
    let target = event.target; // where was the click?
    if (!(target.tagName = 'td')) {
    } else {
        target.style.background = cellColor;
    }
});