let button = document.getElementById("enviar");

button.addEventListener("click", (e)=>{
    e.preventDefault();


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dire = document.getElementById("dire").value;
    let detalles = document.getElementById("detalles").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let mediodepago = document.getElementById("mediodepago").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("dire", dire);
    localStorage.setItem("detalles", detalles);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("mail", mail);
    localStorage.setItem("mediodepago", mediodepago);

    if (!nombre || !apellido || !dire || !mail ) {
        alert("Datos Incompletos. Por favor vuelva y complete los datos obligatorios");
        enviar.preventDefault();
    } else
            alert("Datos Ingresados Correctamente");
            window.location.href = "../index.html";
            

});