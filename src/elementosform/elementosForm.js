import styled, {css}from "styled-components";

const colores ={
borde: "#0075ff",
error: "#bb2929",
exito: "#1ed12d"
}
const Formulario =styled.form
`
display:grid;
grid-template-columns:auto auto;
padding:20px;
gap:20px;

@media screen and (max-width:500px){
    grid-template-columns:auto;
}

`

;
const Input= styled.input
`
font-size: 16px;
width: 90%;
height: 45px;
padding:0 30px;
margin-bottom: 5px;
box-shadow: none;
line-height: 45px;
border:3px solid transparent;

&:focus {
border:3px solid ${colores.borde};
outline:none;
box-shadow: 3px 0px 30px rgba(163, 163,163,0.4);
}

${props=> props.valido === 'true' && css 
`
border:1px solid transparent;
`
}
${props=> props.valido === 'false' && css 
    `
    border:1px solid ${colores.error} !important;
    `
    }
`
;
const Grupoi = styled.div
`
position: relative;
z-index: 90;
`
const LeyendaError = styled.p
`
font-size: 18px;
margin-bottom: 0;
color:${colores.error} ;
display: none;
font-weight: 700;

${props=> props.valido === 'true' && css 
`
display: none;
`
}
${props=> props.valido === 'false' && css 
    `
    display: block;
    `
    }
`
const MsjErr =styled.div
`
grid-column: span 2;
height: 50px;

border: 1px solid ${colores.error};
background-color:	#FFFFFF ;
padding: 2px 15px;
display: flex;
justify-content: center;
align-items: center;
h3{
    font-size: 16px;
    margin:0
 
}
img{
    margin-right: 5px;
    width: 22px;
}
@media screen and (max-width:500px){
    h3{
        font-size: 10px;
        
    }
}


`
const IconoV = styled.img
    `
    width: 22px;
    position: absolute;
	right: 75px;
	bottom: 18px;
	z-index: 100;
    opacity: 0;

    ${props=> props.valido === 'true' && css 
`
opacity: 1;
`
}
${props=> props.valido === 'false' && css 
    `
    opacity: 0;
    `
    }
`
    
const Btn = styled.button`
width: 150px;
border: 1px solid #3333;
padding: 8px 8px;
text-decoration: none;
background-color:var(--amarillo-color);
font-weight: 700;
color: var(--cafeoscuro-color);
border-radius: 0.4em;
margin-top: 10px;
font-size: 18px;

`
const ConTerminos = styled.div
`
grid-column: span 2;
font-size: 20px;
font-weight: 500;

input{

    margin-right: 10px;
}
@media screen and (max-width:500px){
    h3{
        grid-column: span 1;
        
    }
}
`
const ConBtnC = styled.div
`
display: flex;
flex-direction: column;
align-items: center;
grid-column: span 2;

@media screen and (max-width:500px){
    
        grid-column: span 1;
        
    
}
`
const MsjEx = styled.h3
`
font-size: 20px;
color:${colores.exito}
`
export{
    Formulario,
    Input,
    Grupoi,
    LeyendaError,
    IconoV,
    Btn,
    ConTerminos,
    ConBtnC,
    MsjEx,
    MsjErr
}