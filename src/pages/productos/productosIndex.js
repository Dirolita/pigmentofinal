import Headernav from "../../components/headernav/Headernav";
import Footer from "../../components/footer/Footer"; 
import CproductosIndex from "../../components/cproductos/cproductosIndex";


function ProductosIndex(){
    return(
    <div>
        <Headernav />
        <CproductosIndex />
        <Footer />
        
    </div>
    );
}
export default ProductosIndex;