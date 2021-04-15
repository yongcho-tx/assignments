const form = document["addItem"];

form.addEventListener("submit", function (e) {
    
    //this prevents the page from refreshing when clicking 'submit' or hitting 'enter' key
    //also makes the input box blank rather than retaining the previously inputted text
    e.preventDefault();
    const item = form.title.value;
    form.title.value = '';
    //append li 

    const li = document.createElement('li');
    const div = document.createElement('div');
    const buttonX = document.createElement('button');
    const buttonXText = document.createTextNode('X');
    const buttonEdit = document.createElement('button');
    const buttonEditText = document.createTextNode('edit');
    buttonX.appendChild(buttonXText);
    buttonEdit.appendChild(buttonEditText);

    div.textContent = " " + item + " ";
    document.getElementById('list').prepend(li);
    li.append(div);
    div.prepend(buttonX);
    div.append(buttonEdit)

    //remove li on button click
    buttonX.addEventListener('click', (e) => {
        document.querySelector('li').remove();
        
    })
});