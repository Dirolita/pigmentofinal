import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores ={
    falla: "#bb2929",
    exito: "#1ed12d",
    borde: "#FFFF",
	pincel: "#301309"
}

const Formulario = styled.form`
background: #eedc90;
box-shadow:  19px 19px 0px #9d915f,
             -19px -19px 0px #ffffc1;
padding: 3rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
height: 60vh;
width: 90%;


@media (min-width: 700px){
	height: 55vh;
	width: 50%;	
}

@media (min-width: 1000px){
	height: 82vh;
	width: 45%;	
}

@media (min-width: 1440px){
	height: 88vh;
	width: 30%;	
}

`;

const H2 = styled.h1`
color:#301309;
padding:1rem;
`;

const IconoUsuario = styled(FontAwesomeIcon)`
	font-size: 5rem;
	z-index: 100;
    color: ${colores.pincel};
	margin: 0.5rem;
`;


const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 2.5rem;
	line-height: 2.5rem;
	padding: 0 40px 0 10px;
    margin-top: 1rem;
	transition: .3s ease all;
	border: 3px solid transparent;
	
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.7);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.falla} !important;
	`}
`;


const LeyendaError = styled.p`
	font-size: 13px;
    font-weight: 600;
	margin-bottom: 0;
	color: ${colores.borde};
	display:none;
	${props => props.valido === 'true' && css`
		display:none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
    color: ${colores.exito};
	opacity: 0;
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.falla};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const MensajeError = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-aling:center;
background-color: rgb(223, 94, 94);
width: 90%;
border-radius: 3px;
color:#fff;
padding-left:0.3rem;
padding-right: 0.3rem;
padding-top:0.4rem;
font-size: 0.9rem;
margin-top: 1rem;
margin-bottom: 0.5rem;

@media (min-width: 1000px){
	width: 70%;
}
`;

const MensajeExito= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(67, 158, 62);;
width: 80%;
border-radius: 3px;
color:#fff;
padding:0.1rem;
font-size: 1.2rem;
margin: 0.5rem;
text-align: center;
`;


const BotonInicio = styled.div`	
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0.5rem;
width: 100%;
h3,a{
	color: #fff;
}

@media (min-width: 1000px){
	margin: 0.5rem;
}


`;

const Boton = styled.button`	
	margin-top:0.5rem
    border-radius: 5px;
	color:#572612;
    padding: 0.2rem;
	font-size: 1rem;
    border: none;
    background-color: #F9D544;
    width: 30%;
    height: max-content;
    cursor: pointer;
	&:hover{
		background-color: #fff;
	}
`;

const Boton2 = styled.button`	
	margin-top:0.5rem
    border-radius: 5px;
	color:#572612;
    padding: 0.2rem;
	font-size: 1rem;
    border: none;
    background-color: rgb(94, 95, 21);
    width: 30%;
    height: max-content;
    cursor: pointer;
	&:hover{
		background-color:rgb(70, 71, 15);
	}
`;

export {
	Formulario,
	H2,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	IconoUsuario,
	BotonInicio,
	Boton, 
	MensajeError,
	MensajeExito,
    Boton2
}
