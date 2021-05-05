// Blue when the mouse hovers over the square
const blueBackground = document.getElementById('mouseTarget');

    blueBackground.addEventListener('mouseenter', e => {
    blueBackground.style.backgroundColor= 'Blue';
});

// Red when the mouse button is held down over the square
const redBackground = document.getElementById('mouseTarget');

    redBackground.addEventListener('mousedown', e => {
    redBackground.style.backgroundColor = 'Red';
    });

// Yellow when the mouse button is released over the square
const yellowBackground = document.getElementsByClassName('square')[0];

    yellowBackground.addEventListener('mouseup', e => {
    yellowBackground.style.backgroundColor = 'Yellow';
    });

// Green when double-clicking on the mouse
const greenBackground = document.querySelector('.square');

    greenBackground.addEventListener('dblclick', e => {
    greenBackground.style.backgroundColor = 'Green';
    });

// Orange when scrolling anywhere on the screen
window.addEventListener("scroll", e => {
        document.querySelector('.square').style.backgroundColor = 'Orange';
    })

document.addEventListener("keydown", e => {
    if(e.key === 'b' || e.key === 'B') {
        document.querySelector('.square').style.backgroundColor = "Blue";
    } if(e.key === 'r' || e.key === 'R') {
        document.querySelector('.square').style.backgroundColor = "Red";
    } if(e.key === 'y' || e.key === 'Y') {
        document.querySelector('.square').style.backgroundColor = "Yellow";
    } if(e.key === 'g' || e.key === 'G') {
        document.querySelector('.square').style.backgroundColor = "Green";
    } if(e.key === 'o' || e.key === 'O') {
        document.querySelector('.square').style.backgroundColor = "Orange";
    }
})