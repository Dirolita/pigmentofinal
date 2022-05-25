import './Chomeproductos.css';
import React from 'react';

function Chomeproductos(){
    return(
<div>
<div className="p-baner-pint">  
</div>
    <h1 className="p-h1">Productos de Arte</h1>
    <section className="p-sections">
<a className="p-box-paintwork" href="../productos/pinturas.html">
<article className="sec-paints">
    
<h2 className="p-h2">Pinturas</h2>
</article>
 </a>
 <a className="p-box-spatula" href="../productos/espatulas.html">
<article className="sec-spatulas">
<h2 className="p-h2">Espátulas</h2>
</article>
</a>

<a className="p-box-brush" href="../productos/pinceles.html">
<article className="sec-brushes">
<h2 className="p-h2">Pinceles y brochas</h2>
</article>
</a>

<a className="p-box-canvas" href="../productos/lienzos.html">
<article className="sec-canvas">
<h2 className="p-h2">Lienzos</h2>
</article>
</a>
</section>
</div>

);
}
export default Chomeproductos;

