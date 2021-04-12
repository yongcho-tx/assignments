let inputBox = document.querySelector('input').addEventListener('keydown', e => {
    console.log(e.currentTarget.value);
});
console.log(inputBox);

function myFunction () {
    let input = document.querySelector('input').value;
    document.getElementById('myP').innerHTML = input;
    console.log(input);
}
