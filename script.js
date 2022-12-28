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

let squares = 16;
const gridContainer = document.querySelector('.grid-container');

