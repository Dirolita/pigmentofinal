import "../chome/Chome.css";
import {Link} from  'react-router-dom'; 

function Chome(){
    return(
     
        <section id="slider">
        <input type="radio" name="slider" id="slider1" checked />
        <input type="radio" name="slider" id="slider2" />
        <input type="radio" name="slider" id="slider3"/>
        <input type="radio" name="slider" id="slider4"/>
        
        <div id="slides">
        <div class="inner">
            <div class="slide slide_1">
                <div class="slide-contenido"> 
                    <h1>REGÍSTRATE</h1>
                    <p>Conoce los beneficios por ser parte de nuestra comunidad de artistas</p>
                </div>
            </div>
        
            <div class="slide slide_2">
                <div class="slide-contenido"> 
                    <h1>¡AGÉNDATE!</h1>
                    <p>Estaremos participando el próximo 20 y 21 de junio en la feria empresarial "Buro" en la Calle 125 #21-45 de 9am a 7pm</p>
                </div>
            </div>
        
            <div class="slide slide_3">
                <div class="slide-contenido"> 
                    <h1>APROVECHA</h1>
                    <p>Nuestras promociones en kits de pinceles profesionales, valido hasta el 23 de mayo.</p>
                </div>
            </div>
        
            <div class="slide slide_4">
                <div class="slide-contenido"> 
                    <h1>QUEREMOS CONOCERTE</h1>
                    <p>Comparternos tus obras de arte a nuestro correo y las más creativas se mostrarán en nuestro canal de YouTube</p>
                </div>
            </div>
        
        </div>
        </div>
        <div class="controles">
            <label for="slider1">1</label>
            <label for="slider2">2</label>
            <label for="slider3">3</label>
            <label for="slider4">4</label>
        </div>
        
        <div class="bullets">
            <label for="slider1"></label>
            <label for="slider2"></label>
            <label for="slider3"></label>
            <label for="slider4"></label>
        </div>
    
        <section>
        <div class="i-titulo-sec">
            <h1><a href="#">Galeria</a></h1>
            <h3>"Añade color y arte a tu vida"</h3>
        </div>
        
        <div class="i-index-sec">
        <div class="i-img-galeria-one">
            <img src={require("./images/indexgaleria1.png")}  />
        </div>
    
        <div class="i-img-galeria">
            <img src={require("./images/indexgaleria2.png")}  />
        </div>
    
        <div class="i-img-galeria">
            <img src={require("./images/indexgaleria3.png")}  />
        </div>
    </div>
    </section>
    
    
    <section>
        <div class="i-titulo-sec">
            <h1><Link to="/productos" className="link">Productos</Link></h1>
            <h3>"Un buen artista siempre usa las mejores herramientas"</h3>
        </div>
        
        <div class="i-index-sec">
        <div class="i-img-galeria-one">
            <img src={require("./images/indexproductos1.png")} />
        </div>
    
        <div class="i-img-galeria">
            <img src={require("./images/indexproductos2.png")} alt="" />
        </div>
    
        <div class="i-img-galeria">
            <img src={require("./images/indexproductos3.png")} alt="" />
        </div>
    </div>
    </section>
    
    <section>
        <div class="i-titulo-sec">
            <h1><Link to="/talleres">Talleres</Link></h1>
            <h3>"El aprendizaje continuo es el camino al éxito"</h3>
        </div>
        
        <div class="i-index-sec-talleres">
                    <div class="i-img-galeria-one">
                    <div><h1>Presenciales</h1></div>
                        <div class="contenedor">
                            <figure>
                                <img src={require("./images/indextarlleres1.png")} />
                                <div class="capa">
                                    <h1>Diferentes Horarios</h1>
                                    <p>Sabemos que deseas estar en nuestro taller, por eso te facilitamos diferentes horarios.</p>
                                </div>
                            </figure>
                        </div>
                    </div>
          
    
                    <div>
                    <div><h1>Virtuales</h1></div>
                        <div class="contenedor">
                        
                            <figure>
                                
                                <img src={require("./images/indextalleres2.png")} alt="" />
                                <div class="capa">
                                    <h1>Desde la comodidad de casa</h1>
                                    <p>No te perderas de ningun detalle con nuestros talleres virtuales.</p>
                                </div>
                            </figure>
                        </div>
                    </div>
        </div>
    </section>
        <section>
            <div class="i-titulo-sec">
                <h1><a href="src/pages/galeria.html">Sobre Nosotros</a></h1>
                <h3>"Conoce un poco de nuestro trabajo"</h3>
            </div>
            <div class="i-video">
                <iframe width="320" height="215" src="https://www.youtube.com/embed/NdIjV1OHLWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
        </section>
    );
    }
export default Chome;