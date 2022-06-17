import React from "react";
import './Dashboard.css';
import Headernav from "../../components/headernav/Headernav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Dashboard(){
    return(
        <div>       
        <Headernav/>
        <body>
    <div className="principal">

        <div className="title">
            <h1>Mi cuenta</h1>
        </div>
        <div className="sidebar">
            <ul>
            <li><Link to="/dashboard" className='items'><FontAwesomeIcon icon={faUser} className='item'/> Mi perfil </Link></li>
            <li><Link to="/carrito" className='item'> <FontAwesomeIcon icon={faCartShopping} className='item'/>  Mi Carrito </Link></li>
            </ul> 
        </div> 
        <div className="user">
            <div className="user_title">
                <h1>Datos de usuario</h1>
            </div>
            <div className="user_information">
                <div className="user_information_name">
                    <h5>Nombre:</h5>
                    <p>Maria Paula Sanchez Avila</p>
                </div>
                <div className="user_information_email">
                    <h5>Correo:</h5>
                    <p>mpsancheza@gmail.com</p>
                </div>
                <div className="user_information_adress">
                    <h5>Dirección</h5>
                    <p>Diagonal 82 #72a 55  Bogotá, Colombia</p>
                     <a href="">editar</a>
                </div>
                <div className="user_information_phone">
                    <h5>Número  de teléfono</h5>
                    <p>+57 3112582303</p> <a href="">editar</a>
                </div>
                <div className="user_information_editPassword">
                    <h5>Contraseña</h5>
                    <a href="">Cambiar contraseña</a>
                </div>

            </div>
        </div>

    </div>
</body>
        <Footer/>
        </div>
    );
}

export default Dashboard;