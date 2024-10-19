import imagenuno from '../assets/imagenes/Versace.png';
import imagendos from '../assets/imagenes/Azzaro.png';
import imagentres from '../assets/imagenes/Versacetde.png';
import imagencuatro from '../assets/imagenes/HugoBoss.png';
import imagencinco from '../assets/imagenes/KarlLagerfeld.png';
import imagenseis from '../assets/imagenes/Kenzo.png';
import imagensiete from '../assets/imagenes/Diesel.png';
import imagenocho from '../assets/imagenes/CalvinKlein.png';
import imagennueve from '../assets/imagenes/Dieselsotb.png';
import imagendiez from '../assets/imagenes/envios.gif';
import agregar1 from './Agregar1';
import agregar2 from './Agregar2';
import agregar3 from './Agregar3';


const Masculino = () => {

    return(
    <>
    <h2 className="h2general">Masculino</h2>
    <main className='container-fluid'>
        <div className='cont'>
            <figure>
            <img src={imagenuno} alt="Versace" />
            </figure>
            <h2>VERSACE</h2>
            <p>BLU JEANS EDT</p>
            <p className="precio">$116.000</p>
            <p className="cuotas">12 cuotas de $9.666,66</p>
            <div className="boton">
            <button className="agregar" onClick={agregar1}>AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img src={imagendos} alt="Azzaro" />
            </figure>         
            <h2>AZZARO</h2>
            <p>SPORT EDT</p>
            <p className="precio">$163.000</p>
            <p className="cuotas">12 cuotas de $13.583,33</p><div class="boton">
            <button className="agregar" onClick={agregar2}>AGREGAR AL CARRITO</button>
            </div></div>
        <div  className='cont'>
            <figure>
            <img src={imagentres} alt="Versacetde" />
            </figure>          
            <h2>VERSACE</h2>
            <p>THE DREAMER EDT</p>
            <p className="precio">$164.000</p>
            <p className="cuotas">12 cuotas de $13.666,66</p>
            <div className="boton">
            <button className="agregar" onClick={agregar3}>AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img img src={imagencuatro} alt="Hugo Boss" />
            </figure>
            <h2>HUGO BOSS</h2>
            <p>ED. LIMITADA</p>
            <p className="precio">$158.700</p>
            <p className="cuotas">12 cuotas de $13.225</p>
            <div className="boton">
            <button className="agregar">AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img src={imagencinco} alt="Karl Lagerfeld" />
            </figure>
            <h2>KARL LAGERFELD</h2>
            <p>BOIS DE YUZU EDT</p>
            <p className="precio">$57.000</p>
            <p className="cuotas">6 cuotas de $9.500</p>
            <div className="boton">
            <button className="agregar">AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img src={imagenseis} alt="Kenzo" />
            </figure>
            <h2>KENZO</h2>
            <p>HOMME EDT MARINE</p>
            <p className="precio">$109.850</p>
            <p className="cuotas">6 cuotas de $21.750</p>
            <div className="boton">
            <button className="agregar">AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img src={imagensiete} alt="Diesel" />
            </figure>
            <h2>DIESEL</h2>
            <p>FUEL FOR LIFE EDT</p>
            <p className="precio">$76.500</p>
            <p className="cuotas">12 cuotas de $6.375</p>
            <div className="boton">
            <button className="agregar">AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img src={imagenocho} alt="Calvin Klein" />
            </figure>
            <h2>CALVIN KLEIN</h2>
            <p>IN2U MEN EDT ED.LIMITADA</p>
            <p className="precio">$111.960</p>
            <p className="cuotas">12 cuotas de $9.330</p>
            <div className="boton">
            <button className="agregar">AGREGAR AL CARRITO</button>
            </div></div>
        <div className='cont'>
            <figure>
            <img src={imagennueve} alt="Dieselsotb" />
            </figure>
            <h2>DIESEL</h2>
            <p>SPIRIT OF THE BRAVE EDT</p>
            <p className="precio">$41.650</p>
            <p className="cuotas">12 cuotas de $3.471</p>
            <div className="boton">
            <button className="agregar">AGREGAR AL CARRITO</button>
            </div></div>
        <div className='contenvio'>
            <figure>
            <img src={imagendiez} alt="Envios" />
            </figure>
            <p className="boxenvio">APROVECHA LOS ENVIOS GRATIS  <br /> DE LUNES A VIERNES DE 12:00 a 20:00hs. <br />EN COMPRAS SUPERIORES A $70.000</p> 
        </div>
    </main>
    </>
    );
    }
    
    export default Masculino;