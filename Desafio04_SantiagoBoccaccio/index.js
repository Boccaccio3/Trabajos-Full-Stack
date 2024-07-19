let email = 'admin@gmail.com';
let password =  '123';

let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce  tu Password: ');


if (email == emailUser && password == passwordUser) {
    alert('Bienvenido a Nespresso');
}
else{
    alert('Usuario y/o Contraseña incorrectas')
    window.location.href = './index.html';
}
