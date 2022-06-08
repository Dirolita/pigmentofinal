import "./cespatulas.css";
import ModalEspatulas from "./ModalEspatulas";



function CardEspatula(props){
  
return(
  <div>
    <div className="p-card" id={props.p1}>
    <img src={props.p2}/>
    <h2>{props.p3}</h2>
    <p>{props.p4}</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
  VER
</button>
</div>
<div>
<ModalEspatulas
      pm1={`id${props.p1}`}
        pm2={props.p2}
        pm3={props.p3}
        pm4={props.p4}
        pm5={props.p5}
        pm6={props.p6}
        pm7={props.p7}

/>
</div>
</div>  
);
}
export default CardEspatula;