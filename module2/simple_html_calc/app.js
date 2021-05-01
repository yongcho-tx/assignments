
const addForm = document['add-form']

addForm.addEventListener('submit', function(e) {
    e.preventDefault()

    let number1 = Number(addForm.firstNumber.value)
    let number2 = Number(addForm.secondNumber.value)
   
    sum = number1 + number2
    const span = document.createElement('span')
    span.textContent = ` ${sum}`
    span.style.fontSize = '20px'
    span.style.color = 'blue'
    document.getElementById('addEquals').append(span)
})

const subForm = document['sub-form']

subForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let number1 = Number(subForm.firstNumber.value)
    let number2 = Number(subForm.secondNumber.value)

    sub = number1 - number2
    const span = document.createElement('span')
    span.textContent = ` ${sub}`
    span.style.color = 'red'
    span.style.fontSize = '20px'
    document.getElementById('subEquals').append(span)
})

const multiForm = document['multi-form']

multiForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let number1 = Number(multiForm.firstNumber.value)
    let number2 = Number(multiForm.secondNumber.value)

    multi = number1 * number2
    const span = document.createElement('span')
    span.textContent = " " + multi
    span.style.color = 'green'
    span.style.fontSize = '20px'
    document.getElementById('multiEquals').append(span)
})