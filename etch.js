


container.style.width = "1000px";
container.style.display = "grid";
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

// create button element
let button = document.createElement('button');
container.appendChild(button);
button.style.position ='float';
button.style.float = 'right';
button.textContent = 'Click me to clear everything';
button.style.width = container.style.width;
button.style.height = '90px';



// function to create a box in the container
function createBox(){
    let box = document.createElement('div');
    box.className = "Box";
    // box.textContent = 'Im a little Box';
    box.style.width = '240px';
    box.style.height = "240px";
    box.style.border = '1px solid black';
    box.style.display = 'flex';
    box.addEventListener("mouseover", mouseOver);
    function mouseOver(){
        box.style.backgroundColor = 'lightblue';
    }
    container.appendChild(box);

}

// loop to create a number of boxes
i = 0
while(i < 16) {
    createBox();
    i++;
}

button.style.backgroundColor = 'red';


















