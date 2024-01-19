const product = document.getElementById('product')

function get() {
    const wish = JSON.parse(localStorage.getItem('wish')) || []
    product.innerHTML = ''
    wish.map((item, index) => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>$ ${item.price}</p>
    <div class="butons">
        <button class='add' onclick="remove(${index})">Remove</button>
    </div>
        `
        product.appendChild(box)
    })
}
function remove(index) {
    const wish = JSON.parse(localStorage.getItem('wish')) || []
    wish.splice(index, 1)
    localStorage.setItem('wish', JSON.stringify(wish))
    get()
}
get()