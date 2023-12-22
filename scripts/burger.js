const burgerButton = document.getElementsByClassName('burger-button')[0];
const burgerButtonRectangles = document.getElementsByClassName('bb');
const burger = document.getElementsByClassName('burger')[0];
function burgerButtonOpen() {
    setTimeout( function () {
        burgerButtonRectangles[0].style.rotate = '45deg';
        burgerButtonRectangles[0].style.translate = '0 20px';
        burgerButtonRectangles[1].style.opacity = '0';
        burgerButtonRectangles[2].style.rotate = '-45deg';
        burgerButtonRectangles[2].style.translate = '0 -20px';
    }, 500);
    burgerButtonRectangles[0].classList.remove('bb-1-1');
    burgerButtonRectangles[1].classList.remove('bb-2-2');
    burgerButtonRectangles[2].classList.remove('bb-3-3');
    burgerButtonRectangles[0].classList.add('bb-1');
    burgerButtonRectangles[1].classList.add('bb-2');
    burgerButtonRectangles[2].classList.add('bb-3');
    burger.style.display = 'inline-flex';
    setTimeout( function () {
        burger.style.translate = '0';
    }, 1000);
    burger.classList.remove('burger-close');
    burger.classList.add('burger-open');
}
function burgerButtonClose() {
    setTimeout( function () {
        burgerButtonRectangles[0].style.rotate = '0deg';
        burgerButtonRectangles[0].style.translate = '0';
        burgerButtonRectangles[1].style.opacity = '1';
        burgerButtonRectangles[2].style.rotate = '0deg';
        burgerButtonRectangles[2].style.translate = '0';
    }, 500);
    burgerButtonRectangles[0].classList.remove('bb-1');
    burgerButtonRectangles[1].classList.remove('bb-2');
    burgerButtonRectangles[2].classList.remove('bb-3');
    burgerButtonRectangles[0].classList.add('bb-1-1');
    burgerButtonRectangles[1].classList.add('bb-2-2');
    burgerButtonRectangles[2].classList.add('bb-3-3');
    setTimeout(function () {
        burger.style.display = 'none';
        burger.style.translate = '250px 0';
    }, 1000);
    burger.classList.remove('burger-open');
    burger.classList.add('burger-close');
}

burgerButton.addEventListener('click', function () {
    if (getComputedStyle(burger).display === 'none') {
        burgerButtonOpen();
    } else if (getComputedStyle(burger).display !== 'none') {
        burgerButtonClose();
    }
})

burgerButtonClose();