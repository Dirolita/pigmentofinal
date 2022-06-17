import React from 'react'; 
import lupa from '../headernav/images/lupa.png';
import menu from '../headernav/images/menu.png';
import Cuenta from './images/user-account-solid-24.png';
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
            <li class="item"><Link to="/galeria">Galeria</Link></li>
            <li class="item"><Link to="/productos">Productos</Link></li>
            <li class="item"><Link to="/talleres">Talleres</Link></li>
            <li class="item"><Link to="/registro">Registrate</Link></li>
            <li class="item"><Link to="/login">Login</Link></li>
            <li class="item"><Link to="/crud"><img src={Cuenta}/></Link></li>
              
          
      
    </nav>
</header>
)
}
export default Headernav; 