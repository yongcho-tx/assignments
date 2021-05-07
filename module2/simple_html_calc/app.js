const addForm = document['addform']
const subForm = document['subform']
const multiForm = document['multiform']
const logAdd = document.querySelector('.logAdd')
const logSub = document.querySelector('.logSub')
const logMulti = document.querySelector('.logMulti')

const additionSubmit = (e) => {
    e.preventDefault()
    let number1 = Number(addForm.firstNumber.value)
    let number2 = Number(addForm.secondNumber.value)
    sum = number1 + number2
    logAdd.textContent = sum
}
addForm.addEventListener('submit', additionSubmit)


const subtractSubmit = (e) => {
    e.preventDefault()
    let number1 = Number(subForm.firstNumber.value)
    let number2 = Number(subForm.secondNumber.value)

    sub = number1 - number2
    logSub.textContent = sub
    subForm.reset()
}

subForm.addEventListener('submit', subtractSubmit)


const multiplySubmit = (e) => {
    e.preventDefault()

    let number1 = Number(multiForm.firstNumber.value)
    let number2 = Number(multiForm.secondNumber.value)

    multi = number1 * number2
    logMulti.textContent = " " + multi
    multiForm.reset()
}

multiForm.addEventListener('submit', multiplySubmit)
