import React from "react";
import {Input, Grupoi, LeyendaError,IconoV} from "../../elementosform/elementosForm";


const Coinput = ({placeholder,name,leyendaError,expresionRegular,tipo,estado,cambiarEstado,valido}) =>
{
const onChange=(e) =>{
cambiarEstado({
...estado
,campo:e.target.value
})
}
const validacion = ()=>{
    if(expresionRegular){
        if(expresionRegular.test(estado.campo)){
            cambiarEstado({
                ...estado, valido:'true'
                });
        }
        else{
            cambiarEstado({
                ...estado, valido:'false'
                });
        }
    }
}
return(
    <div>
        <Grupoi>
            <Input 
            type={tipo} 
            placeholder={placeholder} 
            id={name} 
            value={estado.campo}
            onChange={onChange}
            onBlur={validacion}
            onKeyUp={validacion}
            valido={estado.valido}
            />
            <IconoV src={require("../ctalleres/images/check.ico")} valido={estado.valido}/>
        </Grupoi>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
);

}
export default Coinput;