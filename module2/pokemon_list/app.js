
const xhr = new XMLHttpRequest()
        //method   //url                          //async?
xhr.open("GET", 'https://api.vschool.io/pokemon', true)
xhr.send()

// xhr.onload = () => {
//     console.log(`Data Loaded: ${xhr.status} ${xhr.response}`)
// }




xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        // console.log(data.pokemon)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }
}


function showData(arr) {
    for(let i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        h1.textContent = `Pokemon Name: ${arr[i].name}`
        p.textContent = `Detail: ${arr[i].resource_uri}`
        document.body.appendChild(h1)
        document.body.appendChild(p)
    }
  
}