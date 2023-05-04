
let cartList = document.querySelector('.cart-list')
let totalprice = document.querySelector('.total-price')

document.querySelectorAll('.add-to-card').forEach(item => {
    item.addEventListener('click', (e) => {
        let productcontent = item.parentElement.parentElement
        let productbody = productcontent.parentElement

        let title = productcontent.querySelector('.product-title').textContent.trim()
        let price = productcontent.querySelector('.amount').childNodes[2].textContent.trim()
        let img = productbody.querySelector('.poster-img')
        let href = img.parentElement.href
        let imgsrc = img.src



        let cartItems = cartList.querySelectorAll('.basket-item-name')
        let productsInCard = []
        cartItems.forEach(item => {
            productsInCard.push(item.textContent.trim())
        })

        if (productsInCard.includes(title)) {

            let item = cartItems[productsInCard.indexOf(title)]
            item.parentElement.querySelector('.quantity').textContent = `SAY:  ${parseInt(item.parentElement.querySelector('.quantity').textContent.split(':')[1].trim()) + 1}`
        }
        else {
            let newItem = document.createElement('li')
            let removelink = document.createElement('a')
            newItem.classList.add('mini-cart-list')

            removelink.href = '#'
            removelink.innerHTML = '<i class="fa-solid fa-x"></i>'
            removelink.classList.add('remove')
            newItem.appendChild(removelink)
            newItem.innerHTML += `<a class="basket-item-img" href="${href}">
            <div class="img-box">
            <img class="img-fluid" src="${imgsrc}" alt="shock">
            </div>
            </a>
            <a class="basket-item-name" href="${href}">${title}</a>
            <div class="quantity">Say: 1</div>
            <span class="price">₼${price}</span>`
            cartList.appendChild(newItem)
            document.querySelector('.top-total-cart').innerText = `Səbət (${cartItems.length + 1})`
            document.querySelectorAll('.cart-count').forEach(item => item.innerText = cartItems.length + 1)

        }
        totalprice.innerText = `₼${parseFloat(totalprice.innerText.split('₼')[1].trim()) + parseFloat(price)}`
        localStorage.setItem('cart', cartList.innerHTML)

        document.querySelectorAll('.remove').forEach(item => {
            item.parentElement
            item.onclick = (e) => {
                e.preventDefault()
                let cart = item.parentElement
                let quantity = parseInt(cart.querySelector('.quantity').textContent.split(':')[1].trim())
                if (quantity == 1)
                    cart.remove()
                else
                    cart.querySelector('.quantity').textContent = `SAY:  ${quantity - 1}`

                totalprice.innerText = `₼${parseFloat(totalprice.innerText.split('₼')[1].trim()) - parseFloat(cart.querySelector('.price').textContent.split('₼')[1].trim())}`

                let cartItems = cartList.querySelectorAll('.basket-item-name')

                document.querySelector('.top-total-cart').innerText = `Səbət (${cartItems.length})`
                document.querySelectorAll('.cart-count').forEach(item => item.innerText = cartItems.length)

                localStorage.setItem('cart', cartList.innerHTML)
            }
        })
    })
})


if (localStorage.getItem('cart')) {
    cartList.innerHTML = localStorage.getItem('cart')

    let cartItems = document.querySelectorAll('.mini-cart-list')
    let price = 0

    cartItems.forEach(item => {
        let quantity = parseInt(item.querySelector('.quantity').textContent.split(':')[1].trim())
        price += parseFloat(item.querySelector('.price').textContent.split('₼')[1].trim()) * quantity

    })

    totalprice.innerText = `₼${price}`

    document.querySelector('.top-total-cart').innerText = `Səbət (${cartItems.length})`
    document.querySelectorAll('.cart-count').forEach(item => item.innerText = cartItems.length)
    document.querySelectorAll('.remove').forEach(item => {
        item.parentElement
        item.onclick = (e) => {
            e.preventDefault()
            let cart = item.parentElement
            let quantity = parseInt(cart.querySelector('.quantity').textContent.split(':')[1].trim())
            if (quantity == 1)
                cart.remove()
            else
                cart.querySelector('.quantity').textContent = `SAY:  ${quantity - 1}`

            totalprice.innerText = `₼${parseFloat(totalprice.innerText.split('₼')[1].trim()) - parseFloat(cart.querySelector('.price').textContent.split('₼')[1].trim())}`

            let cartItems = cartList.querySelectorAll('.basket-item-name')

            document.querySelector('.top-total-cart').innerText = `Səbət (${cartItems.length})`
            document.querySelectorAll('.cart-count').forEach(item => item.innerText = cartItems.length)

            localStorage.setItem('cart', cartList.innerHTML)
        }
    })
}


document.querySelector('#product-detail-slider > div > div > div:nth-child(2) > div > form > div.detail-addtocard > button').addEventListener('click', (e) => {
    e.preventDefault()
    let title = document.querySelector('.product-name').textContent.trim()
    let price = document.querySelector('.price-single').childNodes[4].textContent
    let img = document.querySelector('#slider > div > ul > li.flex-active-slide > img')
    let href = document.location.href.split('/').at(-1).replace('#', '')
    let imgsrc = img.src



    let cartItems = cartList.querySelectorAll('.basket-item-name')
    let productsInCard = []
    cartItems.forEach(item => {
        productsInCard.push(item.textContent.trim())
    })

    if (productsInCard.includes(title)) {

        let item = cartItems[productsInCard.indexOf(title)]
        item.parentElement.querySelector('.quantity').textContent = `SAY:  ${parseInt(item.parentElement.querySelector('.quantity').textContent.split(':')[1].trim()) + 1}`
    }
    else {
        let newItem = document.createElement('li')
        let removelink = document.createElement('a')
        newItem.classList.add('mini-cart-list')

        removelink.href = '#'
        removelink.innerHTML = '<i class="fa-solid fa-x"></i>'
        removelink.classList.add('remove')
        newItem.appendChild(removelink)
        newItem.innerHTML += `<a class="basket-item-img" href="${href}">
            <div class="img-box">
            <img class="img-fluid" src="${imgsrc}" alt="shock">
            </div>
            </a>
            <a class="basket-item-name" href="${href}">${title}</a>
            <div class="quantity">Say: 1</div>
            <span class="price">₼${price}</span>`
        cartList.appendChild(newItem)
        document.querySelector('.top-total-cart').innerText = `Səbət (${cartItems.length + 1})`
        document.querySelectorAll('.cart-count').forEach(item => item.innerText = cartItems.length + 1)

    }
    totalprice.innerText = `₼${parseFloat(totalprice.innerText.split('₼')[1].trim()) + parseFloat(price)}`
    localStorage.setItem('cart', cartList.innerHTML)

    document.querySelectorAll('.remove').forEach(item => {
        item.parentElement
        item.onclick = (e) => {
            e.preventDefault()
            let cart = item.parentElement
            let quantity = parseInt(cart.querySelector('.quantity').textContent.split(':')[1].trim())
            if (quantity == 1)
                cart.remove()
            else
                cart.querySelector('.quantity').textContent = `SAY:  ${quantity - 1}`

            totalprice.innerText = `₼${parseFloat(totalprice.innerText.split('₼')[1].trim()) - parseFloat(cart.querySelector('.price').textContent.split('₼')[1].trim())}`

            let cartItems = cartList.querySelectorAll('.basket-item-name')

            document.querySelector('.top-total-cart').innerText = `Səbət (${cartItems.length})`
            document.querySelectorAll('.cart-count').forEach(item => item.innerText = cartItems.length)

            localStorage.setItem('cart', cartList.innerHTML)
        }
    })
})