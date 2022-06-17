
import React, {useState} from 'react';
import {Ftitulo, Ftitulo2, Ftitulo3, Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/registroform/Formulariovalidacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from '../cregistro/Input';
import "./Cregistro.css"

const Registro =()=>{
  const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [direccion2, cambiarDireccion2] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        direccion: /^[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}$/,
        direccion2: /^[a-zA-Z0-9._%+-ÿ \s]{4,30}$/
        //[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}

	}
const validarPassword2=()=>{
if(password.campo.length>0){
  if(password.campo!==password2.campo){
    cambiarPassword2((prevState)=>{
    return{...prevState,valido:'false'}
    });
  }else{
    cambiarPassword2((prevState)=>{
      return{...prevState,valido:'true'}
      });
  }
}
}

const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}

const onSubmit =(e)=>{
  e.preventDefault();
  if(usuario.valido==='true'&& 
  nombre.valido==='true'&&
  password.valido==='true'&&
  password2.valido==='true'&&
  correo.valido==='true'&&
  telefono.valido==='true'&&
  direccion.valido==='true'&&
  direccion2.valido==='true'&&
  terminos
  ){
	cambiarFormularioValido(true);
	cambiarUsuario({campo:'',valido:''});
	cambiarNombre({campo:'',valido: null});
	cambiarPassword({campo:'',valido: null});
	cambiarPassword2({campo:'',valido:'null'});
	cambiarCorreo({campo:'',valido: null});
	cambiarTelefono({campo:'',valido: null});
    cambiarDireccion({campo:'',valido: null});
    cambiarDireccion2({campo:'',valido:'null'});
}else{
	cambiarFormularioValido(false);
}
}

  return ( 
    <main className='main-registro'>
     
	 <h1>Registro</h1><br/>
     
      <Formulario action="" onSubmit={onSubmit} > 
      
       
      <Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="Usuario"
					placeholder="john123"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario}
         
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre y apellido"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
         
          
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					tipo="password"
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>

<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Dirección"
					placeholder="cra 79 n 10-20"
					name="direccion"
					leyendaError="La direccion debe contener letras, numeros y guion, puntos opcionales"
					expresionRegular={expresiones.direccion}
         
				/>

<Input
					estado={direccion2}
					cambiarEstado={cambiarDireccion2}
					tipo="text"
					label="Detalles Dirección"
					placeholder="casa o apartamento"
					name="direccion2"
					leyendaError="La direccion debe contener letras, numeros, guion y puntos opcionales"
					expresionRegular={expresiones.direccion2}
         
				/>

           

      <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
      {formularioValido===false && <MensajeError>
        <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b>Por favor diligenciar el formulario correctamente</p>
      </MensajeError>}
      <ContenedorBotonCentrado>
        <Boton type="submit">Enviar</Boton>
        {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
      </ContenedorBotonCentrado>
     
      </Formulario>
    </main>
    
    );
}

export default Registro;