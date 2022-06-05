import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home/Home'
import Talleres from './pages/talleres/talleres';
import Pinturas from './pages/productos/pinturas';
import {Link} from 'react-router-dom'; 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/talleres' element={<Talleres />}></Route>
            <Route path='/pinturas' element={<Pinturas />}></Route>
        </Routes>
    </BrowserRouter>
    
  

);



