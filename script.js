// generate the grid 

const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");
const sizeBtn = document.querySelector("#sizeBtn");

function createGrid(size){

    container.innerHTML='';
    const squareSize = 640 / size;

    for(let i=0; i< size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        square.style.opacity=0;

        let hoverCount = 0;


        //if someone hovers 100 times, it caps at 10
        square.addEventListener('mouseenter',()=>{
            hoverCount = Math.min(hoverCount+1,10);

            r= Math.floor(Math.random()*256)
            g= Math.floor(Math.random()*256)
            b= Math.floor(Math.random()*256)

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            square.style.opacity = hoverCount * 0.1;
        });
        container.appendChild(square);
    }
}

resetBtn.addEventListener('click',()=>{
    container.innerHTML='';       
});

sizeBtn.addEventListener('click',()=>{
    let input = prompt("enter the grid size in number");
    let size = parseInt(input);

    if(!isNaN(size) && size >0 && size <=100){
        createGrid(size);
    } else {
        alert('please enter valid number btwn 1 to 100.');
    }        
});

