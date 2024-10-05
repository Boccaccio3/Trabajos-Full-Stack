let carrito = [];
/*Definimos los contadores de clicks de los botones más */
let clicks1 = 0; let clicks2 = 0; let clicks3 = 0; let clicks4 = 0; let clicks5 = 0; 
let clicks6 = 0; let clicks7 = 0; let clicks8 = 0; let clicks9 = 0; let clicks10 = 0;
/*Asignamos Ids a los botones más de Hamburguesas*/
let bha1 = document.getElementById("maha1"); let bha2 = document.getElementById("maha2"); let bha3 = document.getElementById("maha3");
let bha4 = document.getElementById("maha4"); let bha5 = document.getElementById("maha5"); let bha6 = document.getElementById("maha6"); 
/*Asignamos Ids a los botones más de Bebidas*/
let mabe1 = document.getElementById("mabe1"); let mabe2 = document.getElementById("mabe2"); let mabe3 = document.getElementById("mabe3"); 
let bha10 = document.getElementById("mabe4");

let pedido1 = document.getElementById("pedido1"); let pedido2 = document.getElementById("pedido2");
let pedido3 = document.getElementById("pedido3"); let pedido4 = document.getElementById("pedido4");
let pedido5 = document.getElementById("pedido5"); let pedido6 = document.getElementById("pedido6");
let pedido7 = document.getElementById("pedido7"); let pedido8 = document.getElementById("pedido8");
let pedido9 = document.getElementById("pedido9"); let pedido10 = document.getElementById("pedido10");

let totalmenu = document.getElementById("total");

let phas = [];
for (let i = 1; i <= 6; i++) {
    phas.push(document.getElementById(`pha${i}`));
}
let pha1 = document.getElementById("pha1");

/*
let pha1 = document.getElementById("pha1"); let pha2 = document.getElementById("pha2");
let pha3 = document.getElementById("pha3"); let pha4 = document.getElementById("pha4");
let pha5 = document.getElementById("pha5"); let pha6 = document.getElementById("pha6"); */

/*Funciones para agregar lo pedido de Hamburguesas al Menu*/
bha1.addEventListener('click', () => {
    clicks1++;
    let precio = parseFloat(pha1.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks1 * precio;
    pedido1.innerText += `${clicks1}. Chedar y Bacon. Precio: $${total}\n`;});

bha2.addEventListener('click', () => {
    clicks2++;
    let precio = parseFloat(pha2.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks2 * precio;
    pedido2.innerText += `${clicks2}. Chesee Burger. Precio: $${total}\n`;});

bha3.addEventListener('click', () => {
    clicks3++;
    let precio = parseFloat(pha3.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks3 * precio;
    pedido3.innerText += `${clicks3}. Crispy Chicken. Precio: $${total}\n`;});

bha4.addEventListener('click', () => {
    clicks4++;
    let precio = parseFloat(pha4.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks4 * precio;
    pedido4.innerText += `${clicks4}. Crispy Chicken con BBQ. Precio: $${total}\n`;});

bha5.addEventListener('click', () => {
    clicks5++;
    let precio = parseFloat(pha5.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks5 * precio;
    pedido5.innerText += `${clicks5}. Monche Burger. Precio: $${total}\n`;});

bha6.addEventListener('click', () => {
    clicks6++;
    let precio = parseFloat(pha6.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks6 * precio;
    pedido6.innerText += `${clicks6}. Super Bacon. Precio: $${total}\n`;});

/*Funciones para agregar lo pedido de Hamburguesas al Menu*/

mabe1.addEventListener('click', () => {
    clicks7++;
    let precio = parseFloat(pbe1.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks7 * precio;
    pedido7.innerText += `${clicks7}. Coca Cola 354ml. Precio: $${total}\n`;});

mabe2.addEventListener('click', () => {
    clicks8++;
    let precio = parseFloat(pbe2.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks8 * precio;
    pedido8.innerText += `${clicks8}. Sprite 354ml. Precio: $${total}\n`;});

mabe3.addEventListener('click', () => {
    clicks9++;
    let precio = parseFloat(pbe3.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks9 * precio;
    pedido9.innerText += `${clicks9}. Schweppes Pomelo 354ml. Precio: $${total}\n`;});

mabe4.addEventListener('click', () => {
    clicks10++;
    let precio = parseFloat(pbe4.textContent.trim().replace('$', '').replace('.', '').replace(',', ''));
    let total = clicks10 * precio;
    pedido10.innerText += `${clicks10}. Schweppes Tonica 310ml. Precio: $${total}\n`;});


let enviarmenu = document.getElementById("enviarpedido");
let hambpedidas = document.getElementById("hambpe");
let bebidaspedidas = document.getElementById("bepe");


enviarmenu.addEventListener("click", (e)=> {
    const resultado = confirm("Desea realizar su pedido?");

    if (resultado) {
        let parte1 = "¡Hola Del Vecchio! Te dejamos los datos del Pedido: ";
        let parte2 = hambpedidas.textContent;
        let parte3 = bebidaspedidas.textContent;
        let message = `${parte1}\n${parte2}\n${parte3}`
        const phoneNumber = "1137781420"; //Acá iria el número del restaurante
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    } else {
        alert("")}
    
});
