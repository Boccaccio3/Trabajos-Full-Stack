import Navegacion from './Componentes/Navegacion';
import Masculino from './Componentes/Home';
import Femenino from './Componentes/Femenino';
import Sucursales from './Componentes/Sucursales';
import Alta from './Componentes/Alta';
import Contacto from './Componentes/Contacto';
import Nosotros from './Componentes/Nosotros';
import Footer from './Componentes/Footer';
import Logo from './Componentes/Logo';
import Carrito from './Componentes/Carrito';
import Error from './Componentes/Error';
import './css/App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>

  <h1>Perfumeria Scentify</h1>
    <Navegacion />
    <Routes>
    <Route path='' element={<Masculino />}></Route>
    <Route path='/Femenino.jsx' element={<Femenino />}></Route>
    <Route path='/Sucursales.jsx' element={<Sucursales />}></Route>
    <Route path='/Alta.jsx' element={<Alta />}></Route>
    <Route path='/Contacto.jsx' element={<Contacto />}></Route>
    <Route path='/Nosotros.jsx' element={<Nosotros />}></Route>
    <Route path='/Carrito.jsx' element={<Carrito />}></Route>
    <Route path='/*' element={<Error />}></Route>
  </Routes>
  <Logo />
  <Footer />

    <div className="App">

    </div>
    </>
  );
}

export default App;
