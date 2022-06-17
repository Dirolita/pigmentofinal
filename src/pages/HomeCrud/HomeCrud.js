import "./crud.css";
import Portada from "./1471669-imágen-3.jpg";
import Icono from "./paintbrush.png";
import { Link } from "react-router-dom";

function HomeCrud(){
    return(
        <div className="main-crud">
            <div className="box-crud">
                <div className="img-port-crud"> <img src={Portada} /></div>

                <div className="botones-crud">

                    <div className="tit-crud">
                        <h1>Crud Pigmento</h1>
                        <img src={Icono} />
                    </div>
                    <button className="btn-crud-1"><Link to='/crud/new' className="link-crud-1">Ingresar nuevo Producto</Link></button>
                    <button className="btn-crud-2"><Link to='/crud/vista'  className="link-crud-2">Consulta o Editar Productos</Link></button>

                    
                </div>

            </div>
        </div>
    );
}
export default HomeCrud;