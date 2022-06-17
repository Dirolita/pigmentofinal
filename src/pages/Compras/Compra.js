import React, { useState } from 'react';
import './Compra.css';
import Headernav from '../../components/headernav/Headernav';
import ItemCount from '../../components/ItemCount/ItemCount';
import Lienzo from '../../components/img/lienzoscaballete_18.png';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';


function Compra(count) {
//funciones del contador
    const onAdd = (quantity) => {
        console.log('Compraste ' + quantity + ' unidades');
        const price = quantity * 18000;
       Swal.fire('Total Parcial $' + price);
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
                        <h1>Mi Carrito</h1>
                    </div>
                    <div class="product">

                        <div class="image">
                            <img src={Lienzo} />
                        </div>

                        <div class="description">
                            <div class="description_name">
                                <h2>Lienzo con caballete</h2>
                            </div>
                            <div class="description_edit_cancel">
                                <div class="description_cancel">
                                    <button className="btn-remov" onClick={handleShow}>Remover</button>
                                </div>
                                <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>¿Esta seguro que desea eliminar este producto?</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Lienzo con caballete <br/>
                                    <img src={Lienzo}  alig-items="center"/> 
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='btn-cancelar' onClick={handleClose} >
                                            Cancelar
                                        </button>
                                        <button className='btn-eliminar'><Link to='/vacio' className='link'>
                                            Eliminar</Link>
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div class="description_price_unit">
                                <h3>Precio und.</h3>
                                <p>$18.000</p>
                            </div>
                            <div class="description_amount">
                                <h3>Cantidad</h3>
                                <ItemCount initial={1} stock={8} onAdd={onAdd} className='itemCount' />
                            </div>
                        </div>

                        

                    </div>

                    <div class="summary">
                        <h2>¿Qué quieres hacer?</h2>
                        <div class="summary_boton_one">
                            <button><Link to='/' className='botonc2'>Seguir comprando</Link></button>
                        </div>
                        <div class="summary_boton_two">
                            <button><Link to='/resucompra' className='botonc2'>Finalizar compra</Link></button>
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

export default Compra;