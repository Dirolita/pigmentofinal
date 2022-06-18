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
            <li class="item"><Link to="/home" className='lik-nav'>Inicio</Link></li>
            <li class="item"><Link to="/galeria"  className='lik-nav'>Galeria</Link></li>
            <li class="item"><Link to="/productos" className='lik-nav'>Productos</Link></li>
            <li class="item"><Link to="/talleres" className='lik-nav'>Talleres</Link></li>
            <li class="item"><Link to="/registro" className='lik-nav'>Regístrate</Link></li>
            <li class="item"><Link to="/login" className='lik-nav'>Login</Link></li>
            <li class="item"><Link to="/crud" className='lik-nav'><img src={Cuenta}/></Link></li>
              
          
      
    </nav>
</header>
)
}
export default Headernav; 