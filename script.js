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


        //for hover effect
        square.addEventListener('mouseenter',()=>{
            square.style.backgroundColor = "red";
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

createGrid(16);