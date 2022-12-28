function createGrid(axis) {
    gridContainer.textContent = '';
    for (let i = 0; i < axis; i++) {
        for (let j = 0; j < axis; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }
    }
    gridContainer.setAttribute('style',
        `grid-template-rows: repeat(${axis}, 1fr); 
        grid-template-columns: repeat(${axis}, 1fr);`);

}

function changeColor() {
    const gridSquares = document.querySelectorAll('.grid-item');

    gridSquares.forEach(function (gridSquare) {
        gridSquare.addEventListener('mouseenter', function () {
            let colorRed = Math.floor(Math.random() * 255);
            let colorBlue = Math.floor(Math.random() * 255);
            let colorGreen = Math.floor(Math.random() * 255);
            gridSquare.style.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`;
        },);
    });
}

let squares = 16;
const gridContainer = document.querySelector('.grid-container');

