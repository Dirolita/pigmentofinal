import {Link} from 'react-router-dom'; 
import "./cproductosindex.css";
function CproductosIndex(){
    return(
        <div>

            <div class="p-baner-pint"></div>
            <h1 class="p-h1">Productos de Arte</h1>
            <section class="p-sections">
                
                <Link to='/productos/pinturas' className='link'>
                <div class="p-box-paintwork">
                    <article class="sec-paints">
                        <h2 class="p-h2">Pinturas</h2>
                    </article>
                </div>
                </Link>
                
                <Link to='/productos/espatulas' className='link'>
                <div class="p-box-spatula">
                    <article class="sec-spatulas">
                        <h2 class="p-h2">Espátulas</h2>
                    </article>
                </div>
                </Link>

                <Link to='/productos/brochas' className='link'>
                <div class="p-box-brush">
                    <article class="sec-brushes">
                        <h2 class="p-h2">Pinceles y brochas</h2>
                    </article>
                </div>
                </Link>
                
                <Link to='/productos/lienzos' className='link'>
                <div class="p-box-canvas">
                    <article class="sec-canvas">
                        <h2 class="p-h2">Lienzos</h2>
                    </article>
                </div>
                </Link>

            </section>
        </div>
    );

}
export default CproductosIndex;