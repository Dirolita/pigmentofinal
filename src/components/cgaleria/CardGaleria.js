
import "./Cgaleria.css"
import ModalGaleria from "./ModalGaleria";

function CardGaleria(props) {
    return (
        <div>
            <div className="g-card" id={props.p1}>
                <img src={props.p2} />
               
 <button type="button" class="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
 Ver más
</button>
            </div>
            <div>
                <ModalGaleria
                    pm1={`id${props.p1}`}
                    pm2={props.p2}
                    pm3={props.p3}
                    pm4={props.p4}
                    pm5={props.p5}
                    pm6={props.p6}
                    pm7={props.p7}
                    pm8={props.p8}
                />
            </div>
        </div>
    );
}
export default CardGaleria;