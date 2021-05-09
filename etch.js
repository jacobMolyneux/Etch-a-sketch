const container = document.getElementById('container');
container.textContent = "hello_World!";
container.style.display = "flex";


function createBox(){
    let box = document.createElement('div')
    box.className = 'littleBox';
    box.textContent = "Hello!"
    container.appendChild(box);
}

let i = 0;
while(i < 16){
    createBox();
    i++;
}
const littleBox = document.getElementsByClassName('littleBox');
container.style.border = "thin solid #000";
littleBox.textContent = "hello";








