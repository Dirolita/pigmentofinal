
import { getLienzos } from "./dataLienzos";
import Cardlienzos from "./cardlienzos";
import "./lienzos.css"

function Clienzos(){
    const lienzos=getLienzos();


return(
    <div>
    <div class="p-baner-lienzos">
        
    </div>
    <div class="p-titulo">
        <h1>Lienzos</h1>
        <h3>"La alta calidad de nuestro productos permitira que tu trabajo sea muy profesional"</h3>
    </div>
    <section class="p-container">
        {
        lienzos.map(p=>(
                <Cardlienzos
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
export default Clienzos;