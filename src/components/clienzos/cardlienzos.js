import "../cpinturas/Cpinturas.css";

function Cardlienzos(props){
  
return(
    <div className="p-card " id={props.p1}>
    <img src={props.p2}/>
    <h2>{props.p3}</h2>
    <p>{props.p4}</p>
    <button>Añadir al carrito</button>
</div>

);
}
export default Cardlienzos;