// Color Toggler


// Variable Block
// const blackBox = document.querySelector('.square');
// const yellowBox = document.querySelector('.sensor');

// Basic Functions
// draw a rectangle
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.strokeRect(10, 10, 500, 500);

        ctx.beginPath();
        ctx.arc(250, 250, 50, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

draw();

// // blackBox Functions
// blackBox.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     blackBox.style.backgroundColor = newColor;
//     console.log(`The Black Box is now ${newColor}`);
// });

// yellowBox Functions
// yellowBox.addEventListener('click', function () {
//     console.log('Hello from yellowlandia!');
// })

// 'move the box' functions
// document.addEventListener(
//     "keydown",
//     (event) => {
//         const keyName = event.key;
//         let currentTop = parseInt(yellowBox.style.top);
//         let currentLeft = parseInt(yellowBox.style.left);
//         const moveAmount = 10;

//         if (keyName === 'w') {
//             yellowBox.style.top = (currentTop + moveAmount) + 'px';
//             console.log('you moved forwards');
//         }
//         if (keyName === 'a') {
//             yellowBox.style.left = (currentLeft - moveAmount) + 'px';
//             console.log('you moved left');
//         }
//         if (keyName === 'd') {
//             yellowBox.style.left = (currentLeft + moveAmount) + 'px';
//             console.log('you moved right');
//         }
//         if (keyName === 's') {
//             yellowBox.style.top = (currentTop - moveAmount) + 'px';
//             console.log('you moved backwards');
//         }
//     },
//     false,
// );