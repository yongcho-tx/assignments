document.body.onload = addElement;


function addElement() {
    const newH1 = document.createElement("h1");
    const newContent = document.createTextNode("JavaScript Made This!!");
    newH1.appendChild(newContent);
    newH1.style.textAlign = 'Center';
    const newP1 = document.createElement("p");
    const newSpan = document.createElement("span");
    const newSpanContent = document.createTextNode("[Yong Cho]");
    newSpan.appendChild(newSpanContent);
    newSpan.style.color = "orange";
    newP1.append(newSpan);
    const newP1Content = document.createTextNode(" wrote the JavaScript");
    newP1.appendChild(newP1Content);
    newP1.style.textAlign = 'Center';

    const currentH1 = document.getElementById("header");
    currentH1.append(newH1);
    currentH1.append(newP1);
}


//clears the messages within the div while preserving the actual divs
const button = document.getElementById("clear-button");
button.addEventListener('click', function() {
    let message = document.querySelectorAll('.message');
    for (let i = 0; i < message.length; i++) {
        message[i].innerHTML = "";
    }


});

//replace div.message left "I have something serious to talk about" with something fun

window.addEventListener('load', changeContent);
function changeContent() {

    let firstLeft = document.querySelectorAll('.message')[0].textContent = "Can you buy a loaf of bread and get a dozen if they have eggs?";
    let firstRight = document.querySelectorAll('.message')[1].textContent = "I bought a dozen loaves of bread since they had eggs!";
    let secondLeft = document.querySelectorAll('.message')[2].textContent = "You did what!!! Where are my dozen eggs and one loaf of bread?";
    let secondRight = document.querySelectorAll('.message')[3].textContent = "You said to buy a dozen loaves of bread if they had eggs :)"
    console.log(firstLeft);

}