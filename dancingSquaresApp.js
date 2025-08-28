// Color Toggler


// Variable Block
const blackBox = document.querySelector('.square');
// const yellowBox = document.querySelector('.sensor');

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
    // console.log(`The Black Box is now ${newColor}`);
});

// yellowBox Functions
// yellowBox.addEventListener('click', function () {
//     console.log('Hello from yellowlandia!');
// })

// 'move the box' functions
document.addEventListener('keydown', function (event) {
    const yellowBox = document.querySelector('.sensor');
    let currentTop = parseInt(yellowBox.style.top);
    let currentLeft = parseInt(yellowBox.style.left);
    const moveAmount = 10; // Pixels to move on each keypress

    switch (event.key) {
        case 'ArrowUp':
            yellowBox.style.top = (currentTop - moveAmount) + 'px';
            event.preventDefault(); // Prevent default scroll behavior
            break;
        case 'ArrowDown':
            yellowBox.style.top = (currentTop + moveAmount) + 'px';
            event.preventDefault();
            break;
        case 'ArrowLeft':
            yellowBox.style.left = (currentLeft - moveAmount) + 'px';
            event.preventDefault();
            break;
        case 'ArrowRight':
            yellowBox.style.left = (currentLeft + moveAmount) + 'px';
            event.preventDefault();
            break;
    }
});

// document.addEventListener(
//     "keydown",
//     (event) => {
//         const keyName = event.key;

//         if (keyName === 'w') {
//             yellowBox.style.postion = relative + '25px';
//             // yellowBox.style.top = '25px';
//             console.log('you moved forwards');
//         }
//         if (keyName === 'a') {
//             console.log('you moved left');
//         }
//         if (keyName === 'd') {
//             console.log('you moved right');
//         }
//         if (keyName === 's') {
//             console.log('you moved backwards');
//         }
//     },
//     false,
// );

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
