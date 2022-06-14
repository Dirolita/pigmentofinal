import "./cbrochas.css";
import {getBrochas} from "./dataBrochas";
import CardBrochas from "./cardBrochas";

function Cbrochas(){

    const brochas=getBrochas();

    return(
        <>
            <div class="p-baner-pinc"></div>
            <div class="p-titulo">
                <h1>PINCELES Y BROCHAS</h1>
                <h3>"La alta calidad de nuestro productos permitira que tu trabajo sea muy profesional"</h3>
            </div>
            <section class="p-container">
            {
                brochas.map(p=>(
                    <CardBrochas 
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
        </>
    );
}
export default Cbrochas