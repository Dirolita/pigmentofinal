import Headernav from "../../components/headernav/Headernav";
import Footer from "../../components/footer/Footer"; 
import CproductosIndex from "../../components/cproductos/cproductosIndex";
import Productos from "../../components/chomeproductos/Chomeproducts";


function ProductosIndex(){
    return(
    <div>
        <Headernav />
        <Productos />
        <Footer />
        
    </div>
    );
}
export default ProductosIndex;