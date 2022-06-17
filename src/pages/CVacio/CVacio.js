import React, { useState } from 'react';
import './CVacio.css';
import Headernav from '../../components/headernav/Headernav';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


function CVacio() {
   
    return (
        <div>
            <Headernav />
            <body>
                <div class="principalCart">
                    <div class="Mcart">
                        <h1>Mi Carrito</h1>
                    </div>
                    <div class="empty">
                        <h1>No hay productos en tu carrito</h1>
                        <h5>En nuestro <Link to='/'className='link'> Home</Link> encontrarás obras y productos que esperan por ti</h5>

                    </div>
                    <div class="empty2">
                        

                    </div>



                </div>
            </body>
            <Footer />
        </div>
    );
}

export default CVacio;