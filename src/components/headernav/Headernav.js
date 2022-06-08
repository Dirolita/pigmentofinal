import React from 'react'; 
import lupa from '../headernav/images/lupa.png';
import menu from '../headernav/images/menu.png';
import './header.css';
import {Link} from 'react-router-dom'; 

function Headernav(){
    return(
<header id="box-header">
<div class="logo">
        <h1>Pigmento</h1>
    </div>
    <nav class="menu">
        <input type="checkbox" id="chk-menu"/>
        <label for="chk-menu" class="btn-menu">
        <img src={menu}/>
        </label>
            <li class="item"><Link to="/home" >Inicio</Link></li>
            <li class="item"><a href="index.html">Galeria</a></li>
            <li class="item"><Link to="/productos">Productos</Link></li>
            <li class="item"><Link to="/talleres">Talleres</Link></li>
            <li class="item">
               <select class="tu-cuenta">
                <option value="0" >Tu Cuenta</option>
                <option value="1" >Crear Cuenta</option></select>
                </li>
            <li class="item"><input  type="text" placeholder="Buscar"/><img src={lupa}/></li>
      
    </nav>
</header>
)
}
export default Headernav; 