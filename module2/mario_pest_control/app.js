let form = document['baddiecount']

const totalPrice = (e) => {
    e.preventDefault()
    let goomba = Number(form.goomba.value)
    let bobomb = Number(form.bobomb.value)
    let cheap = Number(form.cheapcheap.value)
    
    if(goomba > 0) {
        goomba *= 5
    }
    if(bobomb > 0) {
        bobomb *= 7
    }
    if(cheap > 0) {
        cheap *= 11
    }

    let total = goomba+bobomb+cheap;
    const span = document.createElement('span')
    log.textContent= `${total} coins`
    form.reset()
}

form.addEventListener('submit', totalPrice)