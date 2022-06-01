
import React from 'react'; 
import './footer.css';
import Linea from './images/Line 1.svg';
import Bandera from './images/bandera.svg';

function Footer(){
    return(
<footer>
        <section class="footer-op">
        <img src={Linea}/>

            <section id="footer-con-info">
                <article class="footer-info">
                    <h2 class="footer-title">CUENTA</h2>
                    <ul>
                        <li><a href="#">Mi cuenta</a></li>
                        <li><a href="#">Registrate</a></li>
                        <li>Busqueda</li>
                    </ul>
                </article>

                <article class="footer-info">
                    <h2 class="footer-title">ENVIOS</h2>
                    <ul>
                        <li>Bogota</li>
                        <li>Pereira</li>
                        <li>Medellin</li>
                    </ul>
                </article>
                <article class="footer-info">
                    <h2 class="footer-title">CONTACTO</h2>
                    <div class="footer-contact-sm">
                        <p>+57 310 562 31 20</p>
                        <p>+57 305 767 60 63</p>
                        <p>emprearte@gmail.com</p>
                    </div>
                </article>
                <article class="footer-info">
                    <h2 class="footer-title">CONTACTANOS</h2>
                    <form id="footer-form">
                        <input class="footer-form-input" type="email" placeholder="correo electronico" />
                        <textarea class="texta" name="mensaje" placeholder="Escribe aqui tu mensaje"></textarea><br/>
                        <input class="btn-enviar" type="submit" value="Enviar"/>
                    </form>
                </article>
            </section>
            <img src={Bandera}/>
        </section>
</footer>
    )
}
export default Footer;