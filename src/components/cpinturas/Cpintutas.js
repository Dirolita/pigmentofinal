import "./Cpinturas.css";
import {getAll} from "./dataProductos"
import CardProduct from "./cardproducto";

function Cpinturas(){
        const productos=getAll();
    

    return(
        <div>
        <div class="p-baner-pint">
            
        </div>
        <div class="p-titulo">
            <h1>PINTURAS</h1>
            <h3>"La alta calidad de nuestro productos permitira que tu trabajo sea muy profesional"</h3>
        </div>
        <section class="p-container">
            {
            productos.map(p=>(
                    <CardProduct
                    key={p.id}
                    p1={p.id}
                    p2={p.image}
                    p3={p.title}
                    p4={p.descip}
                    p5={p.color}
                    p6={p.price}
                    />
                ))
                }

        

        
        </section>
        </div>
    )
}
export default Cpinturas;