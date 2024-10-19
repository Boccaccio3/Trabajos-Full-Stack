let cpm4 = 1;

const agregar4 = () => {
    
    const perfumem4 = {       
        precio: (75140* cpm4),
        contadora: cpm4++,
        marca: 'MOSCHINO',
        edicion: 'FRESH GOLD EDP',
    }
    console.clear();
    console.log(perfumem4.contadora, perfumem4.marca, perfumem4.edicion, perfumem4.precio);
}


export default agregar4;
