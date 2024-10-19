import { useNavigate } from "react-router-dom";

const Cancelar = () => {
    const navigate = useNavigate();

    const cancelaryhome = () => {
        localStorage.clear();

        alert('Has Cancelado la Compra. Te redirigimos a nuestra Página principal');
        navigate('../');
    };

    return (
        <>
        <div className="botscarrito">
            <button className='cancelar' onClick={cancelaryhome}>
                CANCELAR
            </button>
        </div>
        </>
    );
};

export default Cancelar;