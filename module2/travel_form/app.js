const form = document['travel-form']
const submit = document.getElementById('submit')

const formAlert = (e) => {
    e.preventDefault()
    let fname = form['first-name'].value[0].toUpperCase() + form['first-name'].value.slice(1)
    let lname = form['last-name'].value
    let age = form['age'].value
    let gender = form['gender'].value
    let destination = form['destination'].value
    
    let dietChecked = []
    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            dietChecked.push(form.diet[i].value)
        }
    }

    alert(`First Name: ${fname}\n Last Name: ${lname}\n Age: ${age}\n Gender: ${gender}\n Destination: ${destination}\n Diet: ${dietChecked}`)

}

form.addEventListener('submit', formAlert)