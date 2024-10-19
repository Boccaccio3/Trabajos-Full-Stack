let cpm3 = 1;

const agregar3 = () => {
    
    const perfumem3 = {       
        precio: (164000* cpm3),
        contadora: cpm3++,
        marca: 'VERSACE',
        edicion: 'THE DREAMER EDT',
    }
    console.clear();
    console.log(perfumem3.contadora, perfumem3.marca, perfumem3.edicion, perfumem3.precio);
}


export default agregar3;
