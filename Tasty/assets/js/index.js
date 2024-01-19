const product = document.getElementById('product')
const load = document.getElementById('load')

let limit = 3
let page = 1

async function get() {
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4?limit=${limit}&page=${page}`)
    const data = res.data
    db = data
    db.map(item => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>$ ${item.price}</p>
    <div class="butons">
        <button class='add' onclick="add(${item.id})">Add</button>
        <button class='wish' onclick="wish(${item.id})"><i class="fa-regular fa-heart"></i></button>
    </div>
        `
        product.appendChild(box)
    })
    page++
}
load.addEventListener('click', function () {
    get()
})
function add(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const profilter = cart.find(item => item.id == index)
    if (profilter) {
        profilter.count = (profilter.count || 1) +1
    } else {
        cart.push(db.find(item => item.id == index))
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}


function wish(index) {
    const wish = JSON.parse(localStorage.getItem('wish')) || []
    const productfilter = wish.find(item => item.id == index)
    if (productfilter) {
        alert('Only 1 count')
    } else {
        wish.push(db.find(item => item.id == index))
localStorage.setItem('wish', JSON.stringify(wish))
    }
}
get()



