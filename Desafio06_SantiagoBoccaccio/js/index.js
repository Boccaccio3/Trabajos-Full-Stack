function iniciar(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    const bienvenida = "Bievenido " + nombre + " " +  apellido + "! Ya estas afiliado a nuestro gym.";
    alert(bienvenida);
} 

function suscripcion(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const mail = document.getElementById('mail').value;


    const confirmacion = "Vas a recibir las novedades del gym al siguiente mail: " + mail + " Las ofertas y combos de suplementos las vas a recibir a través del siguiente WhatsApp: " + telefono;
    const despedida = "Muchas gracias " + nombre + " " + apellido + " vas a estar al día con nuestras novedades.";
    alert(confirmacion);
    alert(despedida);
}