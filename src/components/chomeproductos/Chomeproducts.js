import './Chomeproductos.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

function Productos(){
    return(
<div>
<div className="p-baner-pint">  
</div>
<h1 className="p-h1">Productos de Arte</h1>
<section className="p-sections">
<NavLink to="#" className="p-box-paintwork">
<article className="sec-paints">
<h2 className="p-h2">Pinturas</h2>
</article>
</NavLink>

<NavLink to="#" className="p-box-spatula">
<article className="sec-spatulas">
<h2 className="p-h2">Espátulas</h2>
</article>
</NavLink>

<NavLink to="#" className="p-box-brush">
<article className="sec-brushes">
<h2 className="p-h2">Pinceles y brochas</h2>
</article>
</NavLink>

<NavLink to="#" className="p-box-canvas">
<article className="sec-canvas">
<h2 className="p-h2">Lienzos</h2>
</article>
</NavLink>
</section>
</div>

);
}
export default Productos;


