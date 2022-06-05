import "./Cpinturas.css";
import img from "./amarillocadmio.png"
function Cpinturas(){
    return(<>
        <div class="p-baner-pint">
            
        </div>
        <div class="p-titulo">
            <h1>PINTURAS</h1>
            <h3>"La alta calidad de nuestro productos permitira que tu trabajo sea muy profesional"</h3>
        </div>
        <section class="p-container">
        <div class="p-card p-card-acc" id="acc">
            <img src={img}/>
            <h2>AMARILLO CADMIO CLARO</h2>
            <p>ACRILICO 140ML AMARILLO CADMIO CLARO 14204</p>
            <button>Añadir al carrito</button>
        </div>
        
        
        </section>
    </>);
}
export default Cpinturas;