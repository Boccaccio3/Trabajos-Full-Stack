import imagenuno from '../assets/imagenes/Wmoschino.png';
import imagendos from '../assets/imagenes/Wcacharel.png';
import imagentres from '../assets/imagenes/Wcacharelanais.png';
import imagencuatro from '../assets/imagenes/Wdior.png';
import imagencinco from '../assets/imagenes/Wmoschinofcp.png';
import imagenseis from '../assets/imagenes/Wversace.png';
import imagensiete from '../assets/imagenes/Wppicasso.png';
import imagenocho from '../assets/imagenes/Wlancome.png';
import imagennueve from '../assets/imagenes/Wversacew.png';
import imagendiez from '../assets/imagenes/Whugobossa.png';
import imagenonce from '../assets/imagenes/Wcaroherrera.png';
import imagendoce from '../assets/imagenes/envios.gif';
import Agregarf1 from '../Componentes/Agregarf1'
import Agregarf2 from '../Componentes/Agregarf2'
import Agregarf3 from '../Componentes/Agregarf3'


const Femenino = () => {

    return(
    <>
    <h2 className='h2general'>Femenino</h2>

    <main className='container-fluid'>
    <div className='cont'>
        <figure>
        <img src={imagenuno} alt="Moschino" />
        </figure>
        <h2>MOSCHINO</h2>
        <p>FRESH GOLD EDP</p>
        <p className="precio">$75.140</p>
        <p className="cuotas">12 cuotas de $6.262</p>
        <div className="boton">
        <button className="agregar" onClick={Agregarf1}>AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagendos} alt="Cacharel" />
        </figure>
        <h2>CACHAREL</h2>
        <p>AMOR AMOR EDT</p>
        <p className="precio">$51.920</p>
        <p className="cuotas">12 cuotas de $4.327</p>
        <div className="boton">
        <button className="agregar" onClick={Agregarf2}>AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagentres} alt="Cacharel Anais Anais" />
        </figure>
        <h2>CACHAREL</h2>
        <p>ANAIS ANAIS EDT</p>
        <p className="precio">$55.920</p>
        <p className="cuotas">12 cuotas de $4.660</p>
        <div className="boton">
        <button className="agregar" onClick={Agregarf3}>AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagencuatro} alt="Dior" />
        </figure>
        <h2>DIOR</h2>
        <p>ESCALE A PORTOFINO EDT</p>
        <p className="precio">$104.160</p>
        <p className="cuotas">12 cuotas de $17.360</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagencinco} alt="Moschino" />
        </figure>
        <h2>MOSCHINO</h2>
        <p>FRESH COUTURE PINK EDT</p>
        <p className="precio">$75.920</p>
        <p className="cuotas">12 cuotas de $6.327</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagenseis} alt="Versace" />
        </figure>
        <h2>VERSACE</h2>
        <p>RED JEANS EDT</p>
        <p className="precio">$58.000</p>
        <p className="cuotas">12 cuotas de $4.833</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagensiete} alt="Paloma Picasso" /> 
        </figure>
        <h2>PALOMA PICASSO</h2>
        <p>GOlD EDT</p>
        <p className="precio">$41.930</p>
        <p className="cuotas">12 cuotas de $3.494</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagenocho} alt="Lancome" />
        </figure>
        <h2>LANCOME</h2>
        <p>LA VIE BELLE EDP</p>
        <p className="precio">$156.000</p>
        <p className="cuotas">12 cuotas de $13.000</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagennueve} alt="Versace Woman" />
        </figure>
        <h2>VERSACE</h2>
        <p>VERSACE WOMAN EDP</p>
        <p className="precio">$102.269</p>
        <p className="cuotas">12 cuotas de $8.522</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagendiez} alt="Hugo Boss" />
        </figure>
        <h2>HUGO BOSS</h2>
        <p>HUGO BOSS ALIVE EDP</p>
        <p className="precio">$144.480</p>
        <p className="cuotas">12 cuotas de $14.100</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='cont'>
        <figure>
        <img src={imagenonce} alt="Carolina Herrera" />
        </figure>
        <h2>CAROLINA HERRERA</h2>
        <p>212 VIP ROSE EDP</p>
        <p className="precio">$124.700</p>
        <p className="cuotas">6 cuotas de $20.783</p>
        <div className="boton">
        <button className="agregar">AGREGAR AL CARRITO</button>
    </div></div>
    <div className='contenvio'>
        <figure>
        <img src={imagendoce} alt="Envios" />
        </figure>
        <p class="boxenvio">APROVECHA LOS ENVIOS GRATIS  <br /> DE LUNES A VIERNES DE 12:00 a 20:00hs. <br /> EN COMPRAS SUPERIORES A $70.000</p> 
        </div>
    </main>
    </>
    );
    }
    
    export default Femenino;