import React, { useState, useEffect } from 'react';
import Cancelar from './Cancelar';
import Finalizar from './Finalizar';


//Este caso funciona solo para un elemento, pero no sabía como agregar más
const Carrito = () => {
    const [carrito, setCarrito] = useState({});

    useEffect(() => {
        const carritoPedido = localStorage.getItem('pedido1');

        if (carritoPedido) {
            setCarrito(JSON.parse(carritoPedido));
        }
    }, []);

    return (
        <>
        <h2>Carrito</h2>
        <div className="boxcarrito">
            <p className="producto">
            ¡Bienvenido! Aquí está el resumen de los productos que has agregado a tu carrito. Si todo está correcto, puedes proceder con el pago. 
        <br /><br />
            {carrito.contadora}{"- "}
            {carrito.marca}{" "}
            {carrito.modelo}{" "}
            {carrito.edicion}{" "}
            <b>${carrito.precio}{" "}</b>
            </p>

            < Finalizar />
            < Cancelar />
            </div>
        </>
    );
};

export default Carrito;
