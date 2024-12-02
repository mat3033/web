// Variables globales
let cart = [];
let cartCount = document.getElementById('cart-count');
let totalPrice = document.getElementById('total-price');
let cartItems = document.getElementById('cart-items');
let cartModal = document.getElementById('cart-modal');

// Función para mostrar/ocultar el modal
function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

// Función para agregar al carrito
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    let total = 0;
    cartItems.innerHTML = '';  // Limpiar los productos listados

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    totalPrice.textContent = total.toFixed(2);
}






// Función para realizar la búsqueda (CORRECTO)
function filterProducts(query) {
    // Seleccionar todos los productos
    const products = document.querySelectorAll(".product-card");

    // Recorrer los productos y mostrarlos/ocultarlos según la búsqueda
    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(query.toLowerCase().trim())) {
            product.style.display = "block"; // Mostrar si coincide
        } else {
            product.style.display = "none"; // Ocultar si no coincide
        }
    });
}

// Agregar evento de clic al botón de búsqueda
document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
    filterProducts(query);
});

// También puedes habilitar búsqueda en tiempo real
document.getElementById("search-input").addEventListener("input", () => {
    const query = document.getElementById("search-input").value;
    filterProducts(query);
});







// Función para realizar la búsqueda (CORRECTO)
function filterProducts(query) {
    // Seleccionar todos los productos
    const products = document.querySelectorAll(".product-card");

    // Recorrer los productos y mostrarlos/ocultarlos según la búsqueda
    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(query.toLowerCase().trim())) {
            product.style.display = "block"; // Mostrar si coincide
        } else {
            product.style.display = "none"; // Ocultar si no coincide
        }
    });
}

// Agregar evento de clic al botón de búsqueda
document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
    filterProducts(query);
});

// También puedes habilitar búsqueda en tiempo real
document.getElementById("search-input").addEventListener("input", () => {
    const query = document.getElementById("search-input").value;
    filterProducts(query);
});




