// Color Toggler


// Variable Block
const blackBox = document.querySelector('.square');
// const colorInput = document.querySelector('.square')[0];
// const colorDemo = document.querySelector('li')[0];

// Basic Functions
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// blackBox Functions
blackBox.addEventListener('click', function () {
    const newColor = makeRandColor();
    blackBox.style.backgroundColor = newColor;
    console.log(`The Black Box is now ${newColor}`);
});

// const addInput = document.querySelector('#add');

// const removeInput = document.querySelector('#remove');

// const scoreInput = document.querySelector('#score');

// const boardObject = document.querySelector('#board');

// const sensorObject = document.querySelectorAll('.sensor');

// Square Object - needs random evasion mechanism and clicks to points mechanism
// const squareObject = document.querySelector('.square');

// squareObject.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     squareObject.style.backgroundColor = newColor;
// })

// const clickerObject = document.querySelectorAll('.clicker');
