import axios from 'axios';
import {Container,Form} from 'react-bootstrap';
import {useState} from 'react';
import {useHistory,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import "./formCrud.css"
function FormProductos(){
   
    const history=useNavigate();
    
    const[data,setData]=useState({id:"",title:"",descip:"",price:"",image:""})
    
    const handleChange=({target})=>{
        setData(
            {
                ...data,
                [target.name]
                :target.value
            }
        )
    }

    const url="http://localhost:5000/producto";

    const handelSubmit=async(e)=>{
        e.preventDefault();

        const response=await axios.post(url,data);
        console.log(response)
        if (response.status===201){
        Swal.fire(
            'Guardado!',
            `El producto
            ha sido guardado exitosamente!`,
                'success'
        )
        history("/crud/new");}
        else
        {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar el producto!`,
                    'error'
            )
        }
    }
    
    return(
        <div className='formulario-stl'>
        <Container/>
        <h1>Ingrese Nuevo Producto</h1>
        <Form onSubmit={handelSubmit}>

        <Form.Group class="mb-3">

        <Form.Label>Nombre</Form.Label>

        <Form.Control 
        type="text"
        placeholder='LIENZO MAX BOTTERO'
        name="title"
        value={data.title}
        onChange={handleChange}

        />
        </Form.Group>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control 
        type="text"
        placeholder='LIENZO BOTTERO MEDIDAS 45CM X 60CM'
        name="descip"
        value={data.descip}
        onChange={handleChange}
        />
        <Form.Group class="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control 
        type="texttarea"
        placeholder='xx xxxxx xxxxx'
        name="price"
        value={data.price}
        onChange={handleChange}
        />
        </Form.Group>

    <Form.Group class="mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Ingrese la URL de la imagen"
            name="image"
            value={data.image}
            onChange={handleChange}
            />
        </Form.Group>

    
         <button className='bt-gur-lst'>
            Guardar
        </button>

        <Link to="/crud/vista" className='lnj-ver-lst'> Ver lista</Link>
        </Form>
        
        </div>
    );
    
}
export default FormProductos;