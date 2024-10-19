import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navegacion = () => {

return(

<>
<nav class="bg-dark">
    <ul class="d-flex flex-direction-row flex-wrap">
        <Link className='text-decoration-none' to="./Carrito.jsx">
        <button id="carrito" class="btn btn-primary float-start" type="button" data-bs-toggle="offCanvas" data-bs-target="#offCanvasExample" aria-controls="offCanvasExample">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 17 17">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg></button>
        </Link>
        
        

        <li className="itembarra mx-auto p-2">
            <Link className='text-decoration-none' to="">
            Masculino 
            </Link>
        </li>
        <li className="itembarra mx-auto p-2">
            <Link className='text-decoration-none' to="./Femenino.jsx">
            Femenino 
            </Link>
        </li>
        <li className="itembarra mx-auto p-2">
            <Link className='text-decoration-none' to="./Sucursales.jsx">
            Sucursales 
            </Link>
        </li>
        <li className="itembarra mx-auto p-2">
            <Link className='text-decoration-none' to="./Alta.jsx">
            Alta 
            </Link>
        </li>
        <li className="itembarra mx-auto p-2">
            <Link className='text-decoration-none' to="./Contacto.jsx">
            Contacto 
            </Link>
        </li>
        <li className="itembarra mx-auto p-2">
            <Link className='text-decoration-none' to="./Nosotros.jsx">
            Nosotros 
            </Link>
        </li>
    </ul>
    </nav>
</>
);
}

export default Navegacion;