// Color Toggler

const colorInput = document.querySelectorAll('button')[0];
const colorDemo = document.querySelectorAll('li')[0];

colorInput.addEventListener('click', function () {
    const newColor = makeRandColor();
    colorDemo.style.backgroundColor = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// const addInput = document.querySelector('#add');

// const removeInput = document.querySelector('#remove');

// const scoreInput = document.querySelector('#score');

// const boardObject = document.querySelector('#board');

// const sensorObject = document.querySelectorAll('.sensor');

// Square Object - needs random evasion mechanism and clicks to points mechanism
const squareObject = document.querySelector('.square');

squareObject.addEventListener('click', function () {
    const newColor = makeRandColor();
    squareObject.style.backgroundColor = newColor;
})

// const clickerObject = document.querySelectorAll('.clicker');
