const form = document.getElementById('form')
const namee = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('pass')
const product = document.getElementById('product')


const btn = document.getElementById('btn')
const btnz = document.getElementById('btnz')
const btnd = document.getElementById('btnd')
const formSearch = document.getElementById('formSearch')
const inp = document.getElementById('inp')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3', {
        name: namee.value,
        email: email.value,
        password: pass.value
    })
    .then(res => {
        console.log(res.data);
    })
})

async function get() {
    product.innerHTML = ''
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3`)
    const data = res.data
    db = data
    db.map(item => {
        const box = document.createElement('tr')
        box.className = 'boxForm'
        box.innerHTML = `
    <img src="${item.name}" alt="">
    <p>${item.email}</p>
    <div class="butons">
        <button class='add' onclick="remove(${item.id})">Add</button>
    </div>
        `
        product.appendChild(box)
    })
}
get()


function remove(id) {
    axios.delete(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3/${id}`)
    .then(res => {
        get()
    })
}

function getaa() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => {
        db = res.data
        const filterData = db.filter(item => item.name.toLowerCase().includes(inp.value.toLowerCase()))
        filterData.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxForm'
            box.innerHTML = `
        <p>${item.name}</p>
        <p>$ ${item.email}</p>
        <div class="butons">
            <button class='add' onclick="remove(${item.id})">Remove</button>
        </div>
            `
            product.appendChild(box)
        })
    })
}

formSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    getaa()
})


function getaa5() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => {
        db = res.data
        const sortes = db.sort((a, b) => a.name.localeCompare(b.name))
        sortes.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxForm'
            box.innerHTML = `
        <p>${item.name}</p>
        <p>$ ${item.email}</p>
        <div class="butons">
            <button class='add' onclick="remove(${item.id})">Remove</button>
        </div>
            `
            product.appendChild(box)
        })
    })
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    getaa5()
})

function getaa6() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => {
        db = res.data
        const sortes = db.sort((a, b) => b.name.localeCompare(a.name))
        sortes.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxForm'
            box.innerHTML = `
        <p>${item.name}</p>
        <p>$ ${item.email}</p>
        <div class="butons">
            <button class='add' onclick="remove(${item.id})">Remove</button>
        </div>
            `
            product.appendChild(box)
        })
    })
}

btnz.addEventListener('click', (e) => {
    e.preventDefault()
    getaa6()
})


function getaa7() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3')
    .then(res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxForm'
            box.innerHTML = `
        <p>${item.name}</p>
        <p>$ ${item.email}</p>
        <div class="butons">
            <button class='add' onclick="remove(${item.id})">Remove</button>
        </div>
            `
            product.appendChild(box)
        })
    })
}

btnd.addEventListener('click', (e) => {
    e.preventDefault()
    getaa7()
})

