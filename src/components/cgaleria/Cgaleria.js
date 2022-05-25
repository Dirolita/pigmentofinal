/* componentes de clase como classNameName- classNameName Name o de funcion*/
import './Cgaleria.css';
import React from 'react';
//primeras-flores y animales
import Avepluma from'./galeria-imgs/flores-animales/ave, pluma, rosa- óleo.jpeg';
import Caballosarena from'./galeria-imgs/flores-animales/caballos- arena.jpeg';
import Colibri from'./galeria-imgs/flores-animales/colibrí- color y óleo.jpeg';
import Floresferos from'./galeria-imgs/flores-animales/flor- esferos.jpeg';
import Floraguada from'./galeria-imgs/flores-animales/flor-aguada.jpeg';
import Pecesacrilico from'./galeria-imgs/flores-animales/peces-acrilico.jpg';
import Rosasoleo from'./galeria-imgs/flores-animales/rosas--oleo.jpg';
//segundas-frutas
import Canastamanzana from'./galeria-imgs/frutas/canasta-manzana.jpg';
import Manzanasola from'./galeria-imgs/frutas/manzana- óleo.jpeg';
import Manzanasoleo from'./galeria-imgs/frutas/manzanas- óleo.jpeg';
//terceras-paisaje-arquitectura
import Arquitectura from'./galeria-imgs/paisaje-arquitectura/arquitectura-oleo.jpg';
import Cabanaoleo from'./galeria-imgs/paisaje-arquitectura/cabaña- óleo.jpeg';
import Casachina from'./galeria-imgs/paisaje-arquitectura/casa china- óleo.jpeg';
import Cielosoleo from'./galeria-imgs/paisaje-arquitectura/cielos-óleo.jpeg';
import Entradaoleo from'./galeria-imgs/paisaje-arquitectura/entrada- óleo.jpeg';
import Fincaoleo from'./galeria-imgs/paisaje-arquitectura/finca-oleo.jpg';
import Riootono from'./galeria-imgs/paisaje-arquitectura/rio otoño-oleo.jpg';
import Veneciaoleo from'./galeria-imgs/paisaje-arquitectura/venecia-oleo.jpg';
//cuartas-pastel seco
import Arqpastel from'./galeria-imgs/pastel seco/arq. -pastel seco(lapiz y tiza).jpeg';
import Rosapastel from'./galeria-imgs/pastel seco/jarron, rosa- pastel seco.jpeg';
import Pecespastel from'./galeria-imgs/pastel seco/peces-pastel seco.jpg';
import Tigrepastel from'./galeria-imgs/pastel seco/tigre(pastel-seco).jpg';
function Cgaleria(){
    return(

<div className=''>


<h1 className="g-h1">Galería</h1>

<div className="g-titulo-sec">
    <nav className="g-menu">
<h3 className="g-h3"><a href="#flores-animales">Flores y animales</a></h3>
<h3 className="g-h3"><a href="#frutas">Frutas</a></h3>
    <h3 className="g-h3"><a href="#paisaje-arquitec">Paisaje y arquitectura</a></h3>
        <h3 className="g-h3"><a href="#tecnica-pastel">Técnica pastel seco</a></h3>
</nav>
</div>            



<h3 className="g-h3-centrado" id="flores-animales">Flores y animales</h3>
<article className="g-container">
    
<section className="g-pics-left">
    <article id="g-modal_picture" className="g-modal_picture">
        <a href="#g-modal" className="g-cta">
         <img className="ave-pluma" src={Avepluma} />
        </a>
    </article>
    <div className="g-info-img">
        <p className="g-modalP">
            Nombre de la obra:<span><em> "Ave y pluma"</em></span><br/>
            Autor:<span> Nataly Quiroga</span><br/>
            Técnica:<span> Óleo sobre papel</span><br/>
            Dimensión:<span> 52cm x 35cm</span><br/>
            Año:<span> 2015</span><br/>
            Precio:<span> $140.000</span>
        </p>
<div className="g-button">
        <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
        <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
        </div>
    </div>
<img className="caballos-arena" src={Caballosarena} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Caballos"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Arena de colores sobre madera</span><br/>
        Dimensión:<span> 24.5cm x 30cm</span><br/>
        Año:<span> 2013</span><br/>
        Precio:<span> $100.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>

</section>


<section className="g-pics-central-a">
  <img className="colibri" src={Colibri} />
  <div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Colibrí"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" classNamee="g-modalClose">Agregar al carrito</a>
    </div>
</div>
  <img className="flor-esferos" src={Floresferos} />  
  <div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Flor"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Esferos sobre papel</span><br/>
        Dimensión:<span> 24.5cm x 30cm</span><br/>
        Año:<span> 2016</span><br/>
        Precio:<span> $100.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" classNameName="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" classNameName="g-modalClose">Agregar al carrito</a>
    </div>
</div>
  <img className="flor-aguada" src={Floraguada} />
  <div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Flor aguada"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
</section>

<section className="g-pics-right">
   <img className="peces-acrilico" src={Pecesacrilico} /> 
   <div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Peces"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Acrílico sobre papel</span><br/>
        Dimensión:<span> 52cm x 35cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
   <img className="rosas--oleo" src={Rosasoleo} />
   <div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Rosas y otras"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
</section>
</article>

<h3 className="g-h3-centrado" id="frutas">Frutas</h3>
<div className="g-container">
    <section className="g-pics-left g-pics-left2">
<img className="manzana-oleo" src={Manzanasola} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Manzana sola"</em></span><br />
        Autor:<span> Nataly Quiroga</span><br />
        Técnica:<span> Óleo sobre papel</span><br />
        Dimensión:<span> 40cm x 35cm</span><br />
        Año:<span> 2015</span><br />
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>    
</section>
<section className="g-pics-central-a g-pics-central-a2">
    <img className="manzanas-oleo" src={Manzanasoleo} />
    <div className="g-info-img">
        <p className="g-modalP">
            Nombre de la obra:<span><em> "Bodegón de manzanas"</em></span><br />
            Autor:<span> Nataly Quiroga</span><br />
            Técnica:<span> Óleo sobre papel</span><br />
            Dimensión:<span> 35cm x 52cm</span><br />
            Año:<span> 2015</span><br />
            Precio:<span> $140.000</span>
        </p>
<div className="g-button">
        <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
        <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
        </div>
    </div>
</section>

<section className="g-pics-right g-pics-right2">
    <img className="canasta-manzana" src={Canastamanzana} />
    <div className="g-info-img">
        <p className="g-modalP">
            Nombre de la obra:<span><em> "Canasta de manzanas"</em></span><br />
            Autor:<span> Nataly Quiroga</span><br />
            Técnica:<span> Óleo sobre papel</span><br />
            Dimensión:<span> 35cm x 52cm</span><br />
            Año:<span> 2015</span><br />
            Precio:<span> $140.000</span>
        </p>
<div className="g-button">
        <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
        <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
        </div>
    </div>
</section>
</div>


<h3 className="g-h3-centrado" id="paisaje-arquitec">Paisaje y arquitectura</h3>
<div className="g-container">
    <section className="g-pics-left g-pics-left3">
<img className="arquitectura-oleo" src={Arquitectura} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Arquitectura"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>       
<img className="cabana" src={Cabanaoleo} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Cabaña"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 45cm x 62cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>        
<img className="casa-china" src={Casachina} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Casa china"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2017</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>   
</section>
    <section className="g-pics-central-a g-pics-central-a3">
<img className="cielos-oleo" src={Cielosoleo} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Cielos"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 52cm x 35cm</span><br/>
        Año:<span> 2014</span><br/>
        Precio:<span> $100.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>        
<img className="entrada-oleo" src={Entradaoleo} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Entrada"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Óleo sobre papel</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
</section>


<section className="g-pics-right g-pics-right3">
        <img className="finca-oleo" src={Fincaoleo} />
        <div className="g-info-img">
            <p className="g-modalP">
                Nombre de la obra:<span><em> "Finca"</em></span><br/>
                Autor:<span> Nataly Quiroga</span><br/>
                Técnica:<span> Óleo sobre papel</span><br/>
                Dimensión:<span> 35cm x 52cm</span><br/>
                Año:<span> 2015</span><br/>
                Precio:<span> $140.000</span>
            </p>
    <div className="g-button">
            <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
            <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
            </div>
        </div>
        <img className="rio-oleo" src={Riootono} />
        <div className="g-info-img">
            <p className="g-modalP">
                Nombre de la obra:<span><em> "Río"</em></span><br/>
                Autor:<span> Nataly Quiroga</span><br/>
                Técnica:<span> Óleo sobre papel</span><br/>
                Dimensión:<span> 35cm x 52cm</span><br/>
                Año:<span> 2015</span><br/>
                Precio:<span> $140.000</span>
            </p>
    <div className="g-button">
            <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
            <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
            </div>
        </div>
        <img className="venecia-oleo" src={Veneciaoleo} />
        <div className="g-info-img">
            <p className="g-modalP">
                Nombre de la obra:<span><em> "Venecia"</em></span><br/>
                Autor:<span> Nataly Quiroga</span><br/>
                Técnica:<span> Óleo sobre papel</span><br/>
                Dimensión:<span> 35cm x 52cm</span><br/>
                Año:<span> 2015</span><br/>
                Precio:<span> $140.000</span>
            </p>
    <div className="g-button">
            <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
            <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
            </div>
        </div>

    </section>
</div>



<h3 className="g-h3-centrado" id="tecnica-pastel">Técnica pastel seco</h3>
<div className="g-container">
    <section className="g-pics-left g-pics-left4">
<img className="arq-pastel" src={Arqpastel} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Arquitectura"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Pastel seco sobre papel kraft</span><br/>
        Dimensión:<span> 35cm x 52cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
<img className="tigre" src={Tigrepastel} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Tigre"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Pastel seco sobre papel kraft</span><br/>
        Dimensión:<span> 42cm x 35cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $180.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
</section>

    <section className="g-pics-central-a g-pics-central-a3">
   <img className="jarron-rosa" src={Rosapastel} /> 
   <div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Jarrón con rosas"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Pastel seco sobre papel</span><br/>
        Dimensión:<span> 52cm x 35cm</span><br/>
        Año:<span> 2015</span><br/>
        Precio:<span> $140.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>
</div>
</section>
   <section className="g-pics-right g-pics-right4">   
<img className="peces-pastel" src={Pecespastel} />
<div className="g-info-img">
    <p className="g-modalP">
        Nombre de la obra:<span><em> "Peces bajo el agua"</em></span><br/>
        Autor:<span> Nataly Quiroga</span><br/>
        Técnica:<span> Pastel seco sobre papel</span><br/>
        Dimensión:<span> 52cm x 35cm</span><br/>
        Año:<span> 2021</span><br/>
        Precio:<span> $150.000</span>
    </p>
<div className="g-button">
    <a href="../pages/dashboard/compras.html" className="g-modalClose">Comprar</a>
    <a href="#g-modal_picture" className="g-modalClose">Agregar al carrito</a>
    </div>

</div>
</section>
</div>

</div>

    );
}
export default Cgaleria;



