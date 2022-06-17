import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home/Home'
import Talleres from './pages/talleres/talleres';
import Pinturas from './pages/productos/pinturas';
import {Link} from 'react-router-dom'; 
import Lienzo from './pages/productos/lienzos';
import * as bootstrap from 'bootstrap';
import ProductosIndex from './pages/productos/productosIndex';
import Espatulas from './pages/productos/espatulas';
import Brochas from './pages/productos/brochas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Galeria from './pages/galeria/galeria';
import PaRegistro from './pages/registro/Registro';
import HomeCrud from './pages/HomeCrud/HomeCrud';
import VistaCrud from './pages/HomeCrud/vistaCrudTabla';
import FormProductos from './pages/HomeCrud/formularioIngreso';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormLogin from './pages/FormLogin/FormLogin';
import RCompra from './pages/RCompras/RCompra';
import Dashboard from './pages/Dashboard/Dashboard';
import Cvacio from './pages/CVacio/CVacio';
import Compra from './pages/Compras/Compra';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/talleres' element={<Talleres />}></Route>
            <Route path='/productos/pinturas' element={<Pinturas />}></Route>
            <Route path='/productos/brochas' element={<Brochas/>}></Route>
            <Route path='/productos/lienzos' element={<Lienzo />}></Route>
            <Route path='/productos/espatulas' element={<Espatulas />}></Route>
            <Route path='/productos' element={<ProductosIndex />}></Route>
            <Route path='/galeria' element={<Galeria />}></Route>
            <Route path='/registro' element={<PaRegistro />}></Route>
            <Route path='/crud' element={<HomeCrud />}></Route>
            <Route path='/crud/vista' element={<VistaCrud />}></Route>
            <Route path='crud/new' element={<FormProductos />}></Route>
            <Route path='/login' element={<FormLogin/>}> </Route>
            <Route path='/resucompra' element={<RCompra/>}> </Route>
            <Route path='/dashboard' element={<Dashboard/>}> </Route>
            <Route path='/vacio' element={<Cvacio/>}> </Route>
            <Route path='/carrito' element={<Compra/>}> </Route>
        </Routes>
    </BrowserRouter>
    
  

);



