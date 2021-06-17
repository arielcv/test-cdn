const logoBlanco = "https://cdn.jsdelivr.net/gh/arielcv/test-cdn/logo blanco 2.svg"
const logoAzul = "https://cdn.jsdelivr.net/gh/arielcv/test-cdn/logo azul 1.svg"

const buttonCreator = (btnFunction, src) => `<button class="gpbutton" onclick="${btnFunction}">
<img class="g-logo-button" src=${src}>
<div id='x'">
            Paga con Graviti
        </div>
    </button>`

function authenticate(){
    console.log('Authenticated')
}

function send(id_product){
    console.log(`Sending ${id_product}`)
}

function sum(product, price){
    console.log(`The price of ${product} is ${price}`)
}

function buttonCreation(id, productId){
    buttonFunction = () => sum(id, productId)
    const buttonHTML = buttonCreator(buttonFunction, logoBlanco)
    const button = document.createElement('div')
    button.innerHTML = buttonHTML
    return button
}

const element = document.querySelectorAll('.product')

Object.keys(element).map(e => {
    el = element[e]
    el.appendChild(buttonCreation(el.dataset.product, el.dataset.price))
})