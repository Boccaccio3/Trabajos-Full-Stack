import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Contacto = () => {
    const [nya, setNya] = useState('');
    const [edad, setEdad] = useState('');
    const [mail, setMail] = useState('');
    const [numero, setNumero] = useState('');
    const [comentario, setComentario] = useState('');

    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        console.log(nya);
        console.log(edad);
        console.log(mail);
        console.log(numero);
        console.log(comentario);
    };

    return (
        <>
            <main>
                <div className="opinion">
                    <h2 className="h2general">Ayudanos a Mejorar</h2>
                    <p className="pform">
                        ¡Queremos saber de ti! <br />
                        En Scentify, nos esforzamos por ofrecerte la mejor experiencia posible. 
                        Tu opinión es muy importante para nosotros y nos ayuda a mejorar continuamente nuestros servicios. <br />
                        ¿Cómo fue tu experiencia? ¿Qué te gustó? ¿Qué podríamos hacer mejor? 
                        Por favor, dedica unos minutos para dejarnos tus comentarios y sugerencias.
                    </p>
                    <br />

                    <div className="datos">
                        <h2 className="h2form">
                            Formulario 
                            <svg className="detalle" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                        </h2>
                        <hr />
                        <form onSubmit={loginUser}>
                            <div className="datos">
                            <span className="detalles">Nombre y Apellido*</span><br />
                            <input 
                                className="formcont" 
                                type="text" 
                                placeholder="Ingrese su nombre completo"
                                value={nya}
                                onChange={(e) => setNya(e.target.value)}
                                required 
                            />
                            </div>

                            <div className="datos">
                                <span className="detalles">Edad*</span><br />
                                <input 
                                    className="formcont" 
                                    type="number" 
                                    placeholder="Ingrese su Edad" 
                                    min="18" 
                                    value={edad}
                                    onChange={(e) => setEdad(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="datos">
                                <span className="detalles">E-mail*</span><br />
                                <input 
                                    className="formcont" 
                                    type="email" 
                                    placeholder="Ingrese su mail" 
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                    required 
                                />                    
                            </div>

                            <div className="datos">
                                <span className="detalles">Número de teléfono</span><br />
                                <input 
                                    className="formcont" 
                                    type="number" 
                                    placeholder="Ingrese su telefono (Ej: 1122554329)"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)} 
                                    required 
                                />
                            </div>

                            <div className="datos">                        
                                <p className="pinform">
                                    Para ayudarnos a servirte mejor, te pedimos que completes la caja de comentarios con 
                                    cualquier pregunta, sugerencia o información adicional que desees compartir. <br />
                                    Tu opinión es muy valiosa para nosotros y nos ayudará a mejorar nuestros servicios.
                                </p>
                                <textarea 
                                    className="boxcom" 
                                    cols="20" 
                                    rows="5" 
                                    placeholder="Ingrese un comentario"
                                    value={comentario}
                                    onChange={(e) => setComentario(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="divform">
                                <button className="botform" type="submit">Enviar Formulario</button>
                            </div>
                        </form>
                        <p className="campos2">* Campos Obligarorios</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contacto;
