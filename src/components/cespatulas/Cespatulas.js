import "./cespatulas.css";
import { getEspatulas } from "./dataEspatulas";
import CardEspatula from "./cardEspatula";


function Cespatulas(){
    const espatulas=getEspatulas();
    return(
        <div>
          
        <div class="p-baner-esp"></div>
        <div class="p-titulo">
            <h1>ESPATULAS</h1>
            <h3>"La alta calidad de nuestro productos permitira que tu trabajo sea muy profesional"</h3>
        </div>
        <section class="p-container">
        {
            espatulas.map(p=>(
                    <CardEspatula
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
    );
}
export default Cespatulas;