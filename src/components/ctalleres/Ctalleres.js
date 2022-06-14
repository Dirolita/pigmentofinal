import "./Ctalleres.css";
import {Formulario,Btn,ConTerminos,ConBtnC,MsjEx,MsjErr} from "../../elementosform/elementosForm"
import Coinput from "../Coinput/Coinput";
import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Ctalleres(){

    const[ nombre,cambiarNombre] =
    useState({
        campo:'',
        valido:null
    });
    
    const[ apellido,cambiarApellido] =
    useState({
        campo:'',
        valido:null
    });
       
    const[ celular,cambiarCelular] =
    useState({
        campo:'',
        valido:null
    });
       
    const[ correo,cambiarCorreo] =
    useState({
        campo:'',
        valido:null
    });
    const[ frmValido,cambiarFrmValido] =
    useState(null);

    const [terminos, cambiarTerminos] =
    useState(false)

    const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		celular: /^\d{7,10}$/ // 7 a 14 numeros.
	}
const onChangeTerminos=(e)=>{
    cambiarTerminos(e.target.checked);
}
const onSumit=(e)=>{
    e.preventDefault();
    
	if(
		nombre.valido === 'true' &&
		correo.valido === 'true' &&
		celular.valido === 'true' &&
		terminos
	){
		cambiarFrmValido(true);
		cambiarNombre({campo: '', valido: null});
        cambiarApellido({campo: '', valido: null});
		cambiarCorreo({campo: '', valido: null});
		cambiarCelular({campo: '', valido: null});

		// ... 
	} else {
		cambiarFrmValido(false);
	}
}

    return(
        <div>
           <main>
            <div class="t-titulo-tall">
                <h1>Talleres</h1>
                <p>Diligencia el siguiente formulario, y te estaremos enviando información a tu correo y/o WhatsdApp</p>
            </div>
            <Formulario action="" onSubmit={onSumit}>
                  <div className="inputs">
                   <Coinput 
                   tipo="texto"
                   placeholder="NOMBRE"
                   name="nombre"
                   leyendaError="Solo se admiten letras en este campo"
                   expresionRegular={expresiones.nombre}
                   estado={nombre}
                   cambiarEstado={cambiarNombre}
                 
                

                   />
                   <Coinput 
                   tipo="texto"
                   placeholder="APELLIDO"
                   name="apellido"
                   leyendaError="Solo se admiten letras en este campo"
                   expresionRegular={expresiones.apellido}
                   estado={apellido}
                   cambiarEstado={cambiarApellido}
                   
                   />
                   <Coinput 
                     tipo="number"
                     placeholder="CELULAR"
                     name="celular"
                     leyendaError="Solo se admiten numeros en este campo, tiene que ser de 10 digitos"
                     expresionRegular={expresiones.celular}
                     estado={celular}
                     cambiarEstado={cambiarCelular}
                   />
                   <Coinput 
                   tipo="email"
                   placeholder="CORREO"
                   name="correo"
                   leyendaError="el correo debe contener un @ y un dominio"
                   expresionRegular={expresiones.correo}
                   estado={correo}
                   cambiarEstado={cambiarCorreo}
                   
                   />
                   </div>
                   <div className="inte-moda">
                    <div class="t-check-s">
                        <label for="deporte">Intereses:</label><br />
                        <input name="deporte" id="deporte" type="checkbox" />Dibujo Artistico
                        <input name="deporte" id="deporte" type="checkbox" />Arte con acuarelas
                        <input name="deporte" id="deporte" type="checkbox" />Pintura al óleo
                    </div><br />

                    <div class="t-check-s">
                        <label for="deporte">Modalidad:</label><br />
                        <input name="deporte" id="deporte" type="checkbox" />Presencial
                        <input name="deporte" id="deporte" type="checkbox" />Virtual
                    </div>
                    </div>

                    <ConTerminos>
                        <label>
                        <input type="checkbox" name="termino" id="terminos" checked={terminos} onChange={onChangeTerminos}/>
                        Acepto recibir la informacion a mi correo y/o WhatsdApp
                        </label>
                    </ConTerminos>

                    {frmValido === false && <MsjErr>
                        <h3><img src={require("./images/error.ico")} />
                            <b>Error: </b>Por favor rellene el formulario correctamente</h3>
                    </MsjErr>}
                    <ConBtnC>
                    <div><Btn type="submit" value="Enviar"class="t-btn-sum">Enviar</Btn></div>
                    <div>{ frmValido && <MsjEx>Formulario enviado exitosamente</MsjEx>}</div>
                    </ConBtnC>
                
            </Formulario>
            </main>



        </div>
    );
    }


export default Ctalleres;