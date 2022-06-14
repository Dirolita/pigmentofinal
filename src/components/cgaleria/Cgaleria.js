
import "./Cgaleria.css";
import { getAll, getFrutas, getFlores , getPaisaje } from "./dataGaleria"
import CardGaleria from "./CardGaleria";

function Bgaleria() {
    const flores  = getFlores();
    const frutas  = getFrutas();
    const paisaje  = getPaisaje();
    const pastel  = getAll();


    return (
        <div>
            <h1 className="g-h1">Galería</h1>
            <div className="g-titulo-sec">
                <nav className="g-menu">
                    <h3 className="g-h3"><a href="#flores-animales">Flores y animales</a></h3>
                    <h3 className="g-h3"><a href="#frutas">Frutas</a></h3>
                    <h3 className="g-h3"><a href="#paisaje-arquitec">Paisaje y arquitectura</a></h3>
                    <h3 className="g-h3"><a href="#tecnica-pastel">Técnica pastel seco</a></h3>
                </nav>
            </div>

            <h3 className="g-h3-centrado" id="flores-animales">Flores y animales</h3>
            
            <section class="g-container">
                {
                    flores.map(p => (
                        <CardGaleria
                            key={p.id}
                            p1={p.id}
                            p2={p.imagen}
                            p3={p.nombre}
                            p4={p.autor}
                            p5={p.tecnica}
                            p6={p.dimension}
                            p7={p.anio}
                            p8={p.precio}
                        />
                    ))
                }
                </section>
<h3 className="g-h3-centrado" id="frutas">Frutas</h3>
            <section class="g-container">
            {
                    frutas.map(p => (
                        <CardGaleria
                            key={p.id}
                            p1={p.id}
                            p2={p.imagen}
                            p3={p.nombre}
                            p4={p.autor}
                            p5={p.tecnica}
                            p6={p.dimension}
                            p7={p.anio}
                            p8={p.precio}
                        />
                    ))
                }
                </section>
            <h3 className="g-h3-centrado" id="paisaje-arquitec">Paisaje y arquitectura</h3>
            <section class="g-container">
            {
                    paisaje.map(p => (
                        <CardGaleria
                            key={p.id}
                            p1={p.id}
                            p2={p.imagen}
                            p3={p.nombre}
                            p4={p.autor}
                            p5={p.tecnica}
                            p6={p.dimension}
                            p7={p.anio}
                            p8={p.precio}
                        />
                    ))
                }
                </section>
                
            <h3 className="g-h3-centrado" id="tecnica-pastel">Técnica pastel seco</h3>
            <section class="g-container">
                {
                    pastel.map(p => (
                        <CardGaleria
                            key={p.id}
                            p1={p.id}
                            p2={p.imagen}
                            p3={p.nombre}
                            p4={p.autor}
                            p5={p.tecnica}
                            p6={p.dimension}
                            p7={p.anio}
                            p8={p.precio}
                        />
                    ))
                }
</section>
            
        </div>
    )
}
export default Bgaleria;