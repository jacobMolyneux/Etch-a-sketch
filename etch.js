

const container = document.getElementById('container');
container.style.width = "960px";
container.style.display = "grid";
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

// create button element




// function to create a box in the container
function createBox(){
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);

    
}

// loop to create a number of boxes
i = 0
while(i < 16) {
    createBox();
    i++;
}
let box = document.getElementsByClassName('box');
box.style.width = '50px';
box.style.height = '50px';
box.backgroundColor = 'Black'



// button.style.backgroundColor = 'red';


// box.addEventListener("mouseover", mouseOver);
//     function mouseOver(){
//         box.style.backgroundColor = 'lightblue';
//     }
//     container.appendChild(box);
















