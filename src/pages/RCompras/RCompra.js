import React, { useState } from 'react';
import './RCompra.css';
import Headernav from '../../components/headernav/Headernav';
import ItemCount from '../../components/ItemCount/ItemCount';
import Lienzo from '../../components/img/lienzoscaballete_18.png';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';


function RCompra(count) {
//funciones del contador
    const onAdd = (quantity) => {
        console.log('Compraste ' + quantity + ' unidades');
        const price = quantity * 18000;
        alert('Total Parcial $' + price);
    }

const [num, setNum]=useState(count);           
const num1 = ()=> setNum (count*18000);



//hooks del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Headernav />
            <body>
                <div class="principalCart">
                    <div class="mycart">
                        <h1>Detalles de la compra</h1>
                    </div>
                    <div class="product">

                        <div class="image">
                            <img src={Lienzo} />
                        </div>

                        <div class="description">
                            <div class="description_product">
                                <div class="description_product_name">
                                <h3>Lienzo con caballete</h3>
                                <p>60x24 cm</p>
                                </div>

                            </div>
                            <div class="description_direction">
                                <h3>Dirección de entrega</h3>
                                <p>Dg 82 #72a 55</p>
                            </div>
                            <div class="description_wayToPay">
                                <h3>Forma de pago</h3>
                                <p>Contraentrega</p>
                            </div>
                            <div class="description_date">
                                <h3>Fecha entrega</h3>
                                <p>18/06/2022</p>
                            </div>
                        </div>

                        

                    </div>

                    <div class="summary">
                        <h2>Resumen del pedido</h2>

                        <div class="summary_uprice">
                            <p>Valor unidad</p>
                            <p>$18.000</p>
                        </div>
                        <div class="summary_units">
                            <p>Cantidad</p>
                            <p>2</p>
                        </div>
                        <div class="summary_ptotal">
                            <p>Total Parcial</p>
                            <p>$36.000</p>
                        </div>
                        <div class="summary_Shipping">
                            <p>Costo de envio</p>
                            <p>$4.000</p>
                        </div>
                        <div class="summary_totalf">
                            <p>Total</p>
                            <p>$40.000</p>
                        </div>


                    </div>

                    <div class="Notices">
                        <div class="NoticeShipping">

                        </div>
                    </div>


                </div>
            </body>
            <Footer />
        </div>
    );
}

export default RCompra;