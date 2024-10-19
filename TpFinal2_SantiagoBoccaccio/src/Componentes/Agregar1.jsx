let cpm1 = 1;

const agregar1 = () => {
    
    const perfumem1 = {       
        precio: (116000* cpm1),
        contadora: cpm1++,
        marca: 'VERSACE',
        edicion: 'BLUE JEANS EDT',
    }
    localStorage.setItem('pedido1', JSON.stringify(perfumem1)); 

    console.clear();
    console.log(perfumem1.contadora, perfumem1.marca, perfumem1.edicion, perfumem1.precio);
}

export default agregar1;
