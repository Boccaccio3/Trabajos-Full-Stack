import { useNavigate } from "react-router-dom";

const Finalizar = () => {
    const navigate = useNavigate();

    const finalizaryacerca = () => {
        localStorage.clear();

            const carritoPedido = localStorage.getItem('pedido1');
            navigate('../');

        if (!carritoPedido) {
            alert("¡Oh Oh! Tu carrito está vacío. Te redirigimos a neustra Página Principal.");
        } else {
            alert('¡Compra completada! Descubre más sobre la historia de nuestra perfumería.');
            navigate('../Nosotros');
        }
    };

    return (
        <>
            <div className="botscarrito">
                <button className="finalizar" onClick={finalizaryacerca}>
                    FINALIZAR COMPRA
                </button>
            </div>
        </>
    );
};

export default Finalizar;
