let cart = [];
let totalPrice = 0;

function addProduct(product, price) {
    // Asignar el nombre y precio del producto
    document.getElementById('productName').value = product;
    document.getElementById('productPrice').value = price;

    // Cambiar la imagen de referencia según el producto seleccionado
    const productImage = document.getElementById('productImage');

    switch (product) {
        case 'Arroz':
            productImage.src = './img/arro.jpg';
            break;
        case 'Carne':
            productImage.src = './img/carne.jpg';
            break;
        case 'Pollo':
            productImage.src = './img/pollo.jpg';
            break;
        case 'Pescado':
            productImage.src = './img/pescado.jpg';
            break;
        case 'Frutas':
            productImage.src = './img/frutas.jpg';
            break;
        case 'Servilletas':
            productImage.src = './img/servilletas.jpg';
            break;
        case 'Agua':
            productImage.src = './img/agua.jpg';
            break;
        default:
            productImage.src = 'placeholder.jpg';
    }
}

function confirmPurchase() {
    const product = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(document.getElementById('productPrice').value);

    if (product && quantity > 0 && price > 0) {
        const totalProductPrice = price * quantity;
        const description = `${quantity} x ${product} - $${totalProductPrice}\n`;
        document.getElementById('purchaseDescription').value += description;
        totalPrice += totalProductPrice;
        document.getElementById('totalPrice').textContent = totalPrice;
        clearProduct(); 

        // notificación de compra 
        Toastify({
            text: `${quantity} x ${product} agregado correctamente.`,
            duration: 2000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ac586a",
            close: true
        }).showToast();
    } else {
        alert('Por favor selecciona un producto.');
    }
}

// Función para limpiar los campos del producto
function clearProduct() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = 1;
}

// Función para limpiar el carrito y mostrar la notificación
function clearCart() {
    document.getElementById('purchaseDescription').value = '';
    document.getElementById('totalPrice').textContent = '0';
    totalPrice = 0;

    // carrito borrado
    Toastify({
        text: "Carrito borrado correctamente.",
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor: "#7770d6",
        close: true
    }).showToast();
}
