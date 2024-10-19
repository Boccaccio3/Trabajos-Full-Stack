let cpm2 = 1;

const agregar2 = () => {
    
    const perfumem2 = {       
        precio: (163000* cpm2),
        contadora: cpm2++,
        marca: 'AZZARO',
        edicion: 'SPORT EDT',
    }
    localStorage.setItem('pedido2', JSON.stringify(perfumem2)); 

    console.clear();
    console.log(perfumem2.contadora, perfumem2.marca, perfumem2.edicion, perfumem2.precio);
}


export default agregar2;
