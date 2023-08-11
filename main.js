const box = document.querySelector('.box');
let diameter = 100;
let border = 0;
let moveRight = 0;
let moveLeft = 100;
let moveBottom = 0;
let moveTop = 100;

//box dimensions
box.style.width = `${diameter}px`;
box.style.height = `${diameter}px`;
box.style.borderRadius = `${border}px`;

//box positions
box.style.marginLeft = `${moveRight}%`;
// box.style.marginRight = `${moveLeft}%`;
box.style.marginTop = `${moveBottom}%`;
box.style.marginBottom = `${moveBottom}%`;


//box-dimension functions

function aumentar(event){
  if (event.keyCode === 65) {
    diameter += 10;
    border += 10;
    box.style.width = `${diameter}px`;
    box.style.height = `${diameter}px`;
    box.style.borderRadius = `${border}px`
  }
};

function diminuir(event){
  if (event.keyCode === 68) {
    diameter -= 10;
    border -= 10;
    box.style.width = `${diameter}px`;
    box.style.height = `${diameter}px`;
    box.style.borderRadius = `${border}px`
  }
};

//box-position functions

function slideRight(event){
  if (event.keyCode === 39) {
    moveRight += 1;
    box.style.marginLeft = `${moveRight}%`
  }
};

function slideLeft(event) {
  if (event.keyCode === 37) {
    moveRight -= 1;
    box.style.marginLeft = `${moveRight}%`
  }
};

function slideBottom(event) {
  if (event.keyCode === 40) {
    moveBottom += 1;
    box.style.marginTop = `${moveBottom}%`
  }
};

function slideTop(event) {
  if (event.keyCode === 38) {
    moveBottom -=1;
    box.style.marginTop = `${moveBottom}%`
  }
}

//box-dimension event listeners

window.addEventListener('keydown', aumentar)
window.addEventListener('keydown', diminuir)

//box-position event listeners

window.addEventListener('keydown', slideRight)
window.addEventListener('keydown', slideLeft)
window.addEventListener('keydown', slideBottom)
window.addEventListener('keydown', slideTop)