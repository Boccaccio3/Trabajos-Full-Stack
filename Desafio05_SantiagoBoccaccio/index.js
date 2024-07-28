alert('BIENVENIDO AL DESAFIO 05!!')
alert('Ejercicio 1: Gatos')
let gatos = parseInt(prompt("Ingrese el número hasta el que desea imprimir"));
emojis = ['Gato #1: 😺','Gato #2: 😸','Gato #3: 😹','Gato #4: 😺','Gato #5: 😸','Gato #6: 😹','Gato #7: 😺','Gato #8: 😸','Gato #9: 😹','Gato #10: 😺'];

if (gatos > 0 && gatos <= 10) {
    for (let index = 0; index < gatos; index++) {
    console.log(emojis[index]);
    }
}   else {
    console.log('El número debe estar entre 1 y 10.');
}
    console.log('Fin Ejercicio 1');



alert('Ejercicio 2: Gatos y Pisadas');

let cantgatos = parseInt(prompt('Ingrese la cantidad de gatos'));
let cantpisadas = parseInt(prompt('Ingrese la cantidad de pisadas'));
const gato = '🐈 ';
const pisadas = '🐾';

if (cantgatos > 0 && cantpisadas >= 0) {
let linea = gato + pisadas.repeat(cantpisadas)+ '\n';
let resul = linea.repeat(cantgatos);
    for (let index = 0; index < cantgatos; index++) {
    console.log(resul);
    }
}   else {
    console.log('No hay ningún gato');
}
    console.log('Fin Ejercicio 2');



alert('Ejercicio 3: Gatos y Pisadas. Cada dos gatos se sumará un arenero');

let cantgatose3 = parseInt(prompt('Ingrese la cantidad de gatos'));
let cantpisadase3 = parseInt(prompt('Ingrese la cantidad de pisadas'));
const gatoe3 = '🐈';
const pisadase3 = '🐾';
const gatopare3 = '⬛';

if (cantgatose3 > 0 && cantpisadase3 >= 0) {
    let lineae3 = gatoe3 + pisadase3.repeat(cantpisadase3);
    
    for (let index = 0; index < cantgatose3; index++) {
    if (index % 2 === 1) {
    console.log(gatoe3 + gatopare3 + ' ' + pisadase3.repeat(cantpisadase3));
}   else {
    console.log(lineae3);
}
}
}   else {
    console.log('No hay ningún gato');
}
    console.log('Fin Ejercicio 3');