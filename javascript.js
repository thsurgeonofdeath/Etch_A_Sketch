const container = document.querySelector('.container');

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
            console.log('changed!!!');
    }));
}

creategrid();
hover();


