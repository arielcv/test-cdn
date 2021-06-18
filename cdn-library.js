const logoBlanco = "https://cdn.jsdelivr.net/gh/arielcv/test-cdn/logo-blanco-2.svg"
const logoAzul = "https://cdn.jsdelivr.net/gh/arielcv/test-cdn/logo-azul-1.svg"

/**
 * Generates a graviti button pay
 * @param {string} src - The source of the button image
 * @param {string} product - The id of the product related to button
 * @param {string} price - The price of the product related to button
 */
const buttonCreator = (src, product, price) => (
    `<button class="gpbutton" onclick="send('${product}',${price})">
        <img class="g-logo-button" src=${src}>
        <div id='x'>
            Paga con Graviti
        </div>
    </button>`
)

/**
 * Authenticate your website
 * if the response status is 200, all your future requests will be successfull
 * else it will print Error (just for developers)
 */
function authenticate(){
    fetch("https://api.agify.io/?name=michael",{
        method:'GET',
    })
    .then( response => {
        console.log(response)
        if (response.ok){
            response.json()
            .then(({name}) => {
                console.log(name)
                localStorage.setItem('token','token')
            })
        } else {
            console.log('Error')
    }})
}

function send(product, price){
    console.log(`The price of ${product} is $${price}`)
    window.location = 'https://www.google.com'
}

function sum(product, price){
    console.log(`The price of ${product} is ${price}`)
}

function buttonCreation(id, productId){
    const buttonHTML = buttonCreator(logoBlanco, id, productId)
    const button = document.createElement('div')
    button.innerHTML = buttonHTML
    buttonFunction = () => sum(id, productId)
    return button
}

const element = document.querySelectorAll('.product')



Object.keys(element).map(e => {
    el = element[e]
    el.appendChild(buttonCreation(el.dataset.product, el.dataset.price))
    console.log("🚀 ~ file: cdn-library.js ~ line 38 ~ Object.keys ~ el", el)
})
authenticate()