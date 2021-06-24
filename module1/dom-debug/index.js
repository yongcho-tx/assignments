const colors = ["nothing","red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(e) {
    const subItem = createSubItem();
    document.getElementById("list").appendChild(subItem);
})
//creates the subItem when pressing the 'Enter' key
document.getElementById("input").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
    const subItem = createSubItem();
    document.getElementById("list").appendChild(subItem);
    }
})

function createDropDown(){
    
    const dropDown = document.createElement("select");
    
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option") ;
        option.setAttribute('value', colors[i]);
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", function(e){
        e.preventDefault();
        e.target.parentElement.style.backgroundColor = e.target.value;
    })
    return dropDown;
}

function createSubItem(e){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue.value;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");

    return subItem;
}
//remove input text after clicking on 'Add new item'
const removeTextByClick = document.getElementById('add'); 
removeTextByClick.addEventListener('click', function() {
    document.getElementById('input').value = '';
})
//remove input text after pressing the 'Enter' key'
const removeTextByEnter = document.getElementById('input'); 
removeTextByEnter.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    document.getElementById('input').value = '';
    }
})
