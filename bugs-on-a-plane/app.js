let form = document.getElementById("airline-form");
let submit = document.getElementById('submit');
// let query = document.querySelector;

function formAlert() {
    
    let firstName = form.elements["first-name"].value;
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    
    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nTravel Location: ${location} \nDiet: ${diet} 
    \nAwesome, now if you die, it won't be an accident.. \n ${confirm(`Prevent this page from creating additional dialogs`)}`);
    
}


submit.addEventListener('click', formAlert);