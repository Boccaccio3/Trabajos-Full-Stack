import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Alta = () => {
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cargo, setCargo] = useState('');
    const [descorta, setDescorta] = useState('');
    const [volumen, setVolumen] = useState('');
    const navigate = useNavigate();
    
    const loginUser = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(marca);
        console.log(precio);
        console.log(categoria);
        console.log(cargo);
        console.log(descorta);
        console.log(volumen);
    };

    const confirmacion = (e) => {
        if (nombre === "" || marca === "" || precio === ""|| categoria === "" || cargo === "" || volumen === "") {
            alert("El formulario está incompleto. Por favor, revisa de completar los datos obligarios.");
        } else {
            alert("El " + nombre +  " de " + marca + " se ha subido correctamente." );
            navigate('./Home.jsx');
        }
    }

    return (
        <>
            <h2 className="h2alta">Alta</h2>
            <form className="alta" onSubmit={loginUser}>
                <label className="labelalta" htmlFor="nombre">Nombre del Producto*</label>
                <input 
                    className="inputalta"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese el Nombre del Producto"
                    required
                />

                <label className="labelalta" htmlFor="marca">Marca*</label>
                <input 
                    className="inputalta"
                    type="text"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="Ingrese la Marca"
                    required
                />

                <label className="labelalta" htmlFor="precio">Precio*</label>
                <input 
                    className="inputalta"
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    placeholder="Ingrese el Precio"
                    required
                />

                <label className="labelalta" htmlFor="nombre">Volumen (En cc)*</label>
                <input 
                    className="inputalta"
                    type="text"
                    value={volumen}
                    onChange={(e) => setVolumen(e.target.value)}
                    placeholder="Ingrese el Volumen del Perfume"
                    required
                />

                <label className="labelalta" htmlFor="categoria">Categoria*</label>
                <input 
                    className="inputalta"
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    placeholder="Ingrese la Categoria"
                    required
                />

                <label className="labelalta" htmlFor="desccorta">Descripción Corta</label>
                <textarea 
                    cols={50} 
                    rows={5}
                    placeholder="Ingrese Descripción Corta"
                    value={descorta}
                    onChange={(e) => setDescorta(e.target.value)}
                ></textarea>

                <label className="labelalta" htmlFor="envio">Envío*</label>
                <input 
                    type="radio" 
                    name="cargo" 
                    value="Sin cargo"
                    checked={cargo === "Sin Cargo"} 
                    onChange={() => setCargo("Sin Cargo")}
                />
                <label className="cargo me-3" htmlFor="envioa">Sin Cargo</label>


                <input 
                    type="radio" 
                    name="cargo" 
                    value="Con Cargo" 
                    checked={cargo === "Con Cargo"} 
                    onChange={() => setCargo("Con Cargo")}
                />
                <label className="cargo" htmlFor="envioB">Con Cargo</label>


                <span className="selim mt-3">Selecciona una imagen:</span>
                <input type="file" id="imagen" name="imagen" accept="image/*" />
                <button type="submit">Subir Imagen</button>
                <br />
                <button className="botalta" type="submit" onClick={confirmacion}>Enviar</button>
            </form>
                <p className="campos">* Campos Obligarorios</p>
        </>
    );
};

export default Alta;