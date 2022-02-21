const number = document.getElementById('number');
const animated = document.querySelector('.animated');
let counter = 1;

function increase() {
    number.innerHTML = counter;
    counter++;
}

setInterval(increase, 50);

function hide() {
    animated.style.display = 'none';
}

setTimeout(hide, 5085);