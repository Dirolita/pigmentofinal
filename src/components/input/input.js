import React from 'react';
import{GrupoInput, Input,LeyendaError,IconoValidacion} from '../../Elementos/Formulario';
import { faSquareCheck, faSquareXmark} from '@fortawesome/free-solid-svg-icons';



function CompInput({estado, cambiarEstado, tipo,placeholder, name, leyendaError,expresionRegular}) {
    
  const onChange = (event) =>{
    cambiarEstado({...estado, campo: event.target.value});
    console.log (event.target.value);
  }
  
  const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: 'true'});
        console.log('valido')
			} else {
				cambiarEstado({...estado, valido: 'false'});
        console.log('invalido')
			}
		}
	}

  return (
        <div>           
        <GrupoInput>
          <Input type={tipo} 
          placeholder={placeholder} 
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
          />
          <IconoValidacion 
          icon={
            estado.valido=== 'true'? faSquareCheck : faSquareXmark
          } 
            valido={estado.valido}
            />
        </GrupoInput>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>

        </div>
    );
  }
  
  export default CompInput;