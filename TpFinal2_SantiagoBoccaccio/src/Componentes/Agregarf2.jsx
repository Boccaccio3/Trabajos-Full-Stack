let cpm5 = 1;

const agregar5 = () => {
    
    const perfumem5 = {       
        precio: (51920* cpm5),
        contadora: cpm5++,
        marca: 'CACHAREL',
        edicion: 'AMOR AMOR EDT',
    }

    console.clear();
    console.log(perfumem5.contadora, perfumem5.marca, perfumem5.edicion, perfumem5.precio);
}


export default agregar5;
