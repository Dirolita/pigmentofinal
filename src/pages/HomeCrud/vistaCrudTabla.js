import ListProducts from "../../components/ComCrud/ListProducts";
import "./crud.css";
import Pincer from "./paintbrush.png";
function VistaCrud(){
return(
    <div>
        <div className="list-crud-tit">
        <h1>Crud Pigmento</h1>
      <img src={Pincer}/>
        </div>
        
        <ListProducts />
    </div>
);
}
export default VistaCrud;