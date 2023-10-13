document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = document.getElementById('cart');
    const cartCount = document.getElementById('cart-count');

    let cartOpen = false;
    let itemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.parentNode;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);

            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${name} - $${price.toFixed(2)}`;
        cart.appendChild(cartItem);

        itemCount++;
        cartCount.innerText = itemCount;

        updateCartButton();
    }

    function toggleCart() {
        cart.style.display = cartOpen ? 'none' : 'block';
        cartOpen = !cartOpen;
    }

    function updateCartButton() {
        cartCount.innerText = itemCount;

    }
});
