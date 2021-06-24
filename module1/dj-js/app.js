const sq = document.querySelector('.square')

// Blue when the mouse hovers over the square
    sq.addEventListener('mouseenter', e => sq.style.backgroundColor= 'Blue')
// Red when the mouse button is held down over the square
    sq.addEventListener('mousedown', e => sq.style.backgroundColor = 'Red')
// Yellow when the mouse button is released over the square
    sq.addEventListener('mouseup', e => sq.style.backgroundColor = 'Yellow')
// Green when double-clicking on the mouse
    sq.addEventListener('dblclick', e => sq.style.backgroundColor = 'Green')
    
// Orange when scrolling anywhere on the screen
window.addEventListener("scroll", e => sq.style.backgroundColor = 'Orange')

document.addEventListener("keydown", e => (
        (e.key === 'b' || e.key === 'B') 
        ? sq.style.backgroundColor = "Blue"
        :(e.key === 'r' || e.key === 'R') 
        ? sq.style.backgroundColor = "Red"
        : (e.key === 'y' || e.key === 'Y') 
        ? sq.style.backgroundColor = "Yellow"
        : (e.key === 'g' || e.key === 'G')
        ? sq.style.backgroundColor = "Green"
        : (e.key === 'o' || e.key === 'O')
        ? sq.style.backgroundColor = "Orange"
        : null
        )
)