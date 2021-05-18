const container = document.getElementById('container');
for(let i = 0; i < 16; i++){
    
    const box = document.createElement('div');
    box.classList = 'box';
    box.addEventListener("mouseover", function(){
        box.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);;
    })
    
    box.addEventListener("mouseout", function(){
        box.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);;
    })
    
    container.appendChild(box);
}

let restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click',function(){
    const box = document.getElementsByClassName('box');
    box.style.background = 'white';
})
















