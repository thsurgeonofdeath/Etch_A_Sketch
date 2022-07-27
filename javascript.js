const container = document.querySelector('.container');
const resizeGrid = document.getElementById("size_buton");
const RGBSelector = document.getElementById("rgb_color");
const resetButton = document.getElementById("reset");


function creategrid(){
    for(let i=0; i <256; i++){
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

function hover(){
    const grids = document.querySelectorAll('.grid');
    
    grids.forEach(grid => 
        grid.addEventListener('mouseenter',function(){
            grid.style.cssText = "background-color: black;" 
    }));
}

function changeGrid(){
    do{
        gridLength = parseInt(prompt('select a number between 2 and 64 for the new grid size',16));

    }while(gridLength < 2 || gridLength > 64 || isNaN(gridLength))

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    let size = gridLength * gridLength;
    for(i=0; i<size;i++){
        const div = document.createElement('div');
        div.classList.add('grid');
        // change the style to suit the new grid format
        container.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridLength}, 1fr)`;

        container.appendChild(div);
    }
    // call hover after reset
    hover();
}

function changeToRGB(){
    const grids = document.querySelectorAll('.grid');
    
    grids.forEach(grid => 
        grid.addEventListener('mouseenter',function(){
            
            let r = Math.floor((Math.random() * 255) + 1);
            let g = Math.floor((Math.random() * 255) + 1);
            let b = Math.floor((Math.random() * 255) + 1);
            
            grid.style.background = `rgb(${r}, ${g}, ${b})`;
    }));
}

function reset(){
    const grids = document.querySelectorAll('.grid');

    grids.forEach(grid =>
        grid.style.backgroundColor = 'lightgrey'
    );
}

creategrid();
hover();

// event listenning
resizeGrid.addEventListener('click',changeGrid);
RGBSelector.addEventListener('click',changeToRGB);
resetButton.addEventListener('click',reset);
