document.addEventListener('DOMContentLoaded', function () {

//const menuItems = [
//  { id: 1, name: "Chedar y Bacon", description: "Hamburguesa Doble 100% Carne Premium, extra cheddar, doble panceta crocante y salsa.", price: 16560 },
//  { id: 2, name: "Chesee Burger", description: "Hamburguesa de carne 120g, cheddar, y salsa Magic", price: 12150 },
//  { id: 3, name: "Crispy Chicken", description: "100% Pechuga de Pollo crujiente, lechuga y Salsa Dennys. Opcional de Pepinillos", price: 9800 },
//  { id: 4, name: "Crispy Chicken con BBQ", description: "100% Pechuga de Pollo crujiente, lechuga y Salsa Dennys. Opcional de Pepinillos", price: 10700 },
//  { id: 5, name: "Monche Burger", description: "Hamburguesa de carne 120g, cheddar, lechuga, tomate y salsa.", price: 11630 },
//  { id: 6, name: "Super Bacon", description: "Hamburguesa de carne 120g, lechuga, tomate, cheddar, panceta crocante, barbacoa, y salsa.", price: 12250 },

//  { id: 7, name: "Coca Cola 354ml", description: ".", price: 1599 },
//  { id: 8, name: "Sprite 354ml", description: ".", price: 1399 },
//  { id: 9, name: "Schweppes Pomelo 354ml", description: ".", price: 1650 },
//  { id: 10, name: "Schweppes Tonica 310ml", description: ".", price: 1490 },

//];


let total = 0;
    
// Capturar todos los botones mas y menos
const plusButtons = document.querySelectorAll('.mas');
const minusButtons = document.querySelectorAll('.menos');

// actualizar el total del pedido
function updateTotal(amount) {
    total += amount;
    document.getElementById('total').innerText = `Total: $${total}`;
}

// Agregar eventos al boton +
plusButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const priceElement = this.parentElement.innerText.match(/\$([0-9.]+)/);
        const price = parseFloat(priceElement[1]);
        updateTotal(price);
    });
});

// Agregar eventos al boton -
minusButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const priceElement = this.parentElement.innerText.match(/\$([0-9.]+)/);
        const price = parseFloat(priceElement[1]);
        updateTotal(-price);
    });
});


// alerta por si no está logeado
if (!nombre || !apellido || !dire || !email || order.length === 0) {
alert("Por favor, completa los datos de registo para poder hacer el pedido"); 
window.location.href = '../pages/registro.html';
return;
}

// Si todo está correcto, envía el pedido.
sendOrder(nombre, apellido, dire, email);

});


