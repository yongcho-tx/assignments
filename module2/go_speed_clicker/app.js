const counter = document.querySelector('.counter')
const clearButton = document.getElementById('clear')
// const screenClick = () => {
// counter.innerText = parseInt(counter.innerText, 10) + 1
// }

if(localStorage.getItem('clickCounter') === null) {
    localStorage.setItem('clickCounter', 0)
}

let value = JSON.parse(localStorage.getItem('clickCounter'))
counter.textContent = (`Click count: ${value}`)
console.log(`Value's data type:`, typeof value)

const addCount = () => {
    value+=1
    localStorage.setItem('clickCounter', value)
    counter.textContent = (`Click count: ${value}`)
}

document.body.addEventListener('click', addCount)

//clear counter and local storage when you click on the button
clearButton.addEventListener('click', (e) => {
    e.stopPropagation()
    localStorage.removeItem('clickCounter')
    location.reload()
})

