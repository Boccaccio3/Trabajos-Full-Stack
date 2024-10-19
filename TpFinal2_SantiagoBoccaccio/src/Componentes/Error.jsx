import imagenerror from '../assets/imagenes/error.gif'

const Error = () => {

    return(
    
    <>
    <h2 className='h2general'>Error 404: Página no encontrada.</h2>
    <p className='perror'>Lo sentimos, pero esta no es la página que buscabas. Verifica la URL o vuelve a la página de inicio.</p>
    <div className='diverror'>
    <img className='error' src={imagenerror} alt="Error" />
    </div>
    </>
    );
    }
    
    export default Error;