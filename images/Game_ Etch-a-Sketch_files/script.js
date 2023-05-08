const container = document.querySelector('#container');

for ( let i = 1; i <=16*16; i++){
    let grids = document.createElement('div');
    grids.classList.add('grids');
    container.appendChild(grids);
}
function mouseOver(){
    document.getElementsByClassName("grids").style.backgroundColor = "blue"; //"rgb(137, 196, 245)";
}

const gridsSelects = document.querySelectorAll('grids');

function mouseOverGrids(){
    gridsSelects.forEach((grid) => {
        grid.addEventListener("click", () => {
            //resultDisplay.textContent = "hi";
            mouseOver();
        });
    });
}
mouseOverGrids();