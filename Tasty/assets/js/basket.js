const product = document.getElementById('product')

function get() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    product.innerHTML = ''
    cart.map((item, index) => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>$ ${item.price}</p>
    <p>Count: ${item.count}</p>
    <div class="butons">
        <button class='add' onclick="remove(${index})">Remove</button>
    </div>
        `
        product.appendChild(box)
    })
}
function remove(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    get()
}
get()