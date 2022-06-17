import "../../pages/HomeCrud/crud.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Container,Modal,Form,Row} from "react-bootstrap";
import TableProduc from './TableProducts';
import Swal from 'sweetalert2';

function ListProducts(){

    const url="http://localhost:5000/producto";
    const[data,setData]=useState({id:"",title:"",descrip:"",price:"",image:""})

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }
    const[list,setList]=useState([]);
    const[upList,setUplist]=useState([false]);

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
          
        })
    },[upList])
    console.log(list);

    /**Editarrrrr */

    const [show,setShow]=useState(false);
    const handleChange=()=>{setShow(false)};
    const handleClose=()=>{setShow(false)};
    const handleOpen=()=>{setShow(true)};
    const [dataModal, setDataModal] = useState({})
    
    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        console.log(response);  
        if(response.status===200){
            Swal.fire(
                'Cambio Guardado!',
                `El estudiante <strong> 
                ${response.data.nombre} ${response.data.apellido}</strong> ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }
        else{
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el estudiante!',
                'error'
            )
        }
    }


return(
    <Container>
            <table className='table table-striped table-micrud' >
                <thead>
                <th>Id</th>
                <th>Vista</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th colSpan="2">Acciones</th>
                </thead>
                <tbody>
                {
                    list.map((es,index)=>(
                        
                       <TableProduc
                       key={index}
                       producto={es}
                       setUplist={setUplist}
                       upList={upList}
                       handleclose={handleClose}
                       handleOpen={handleOpen}
                       setDataModal={setDataModal}
                       />
                    ))
                }
                </tbody>
            </table>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Estudiante</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='AMARILLO CADMIO'
                                name="title"
                                value={dataModal.title}
                                onChange={handleChangeModal}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                 type="text"
                                 placeholder='ACRILICO 140ML AMARILLO CADMIO CLARO 14204'
                                 name="descip"
                                 value={dataModal.descip}
                                 onChange={handleChangeModal}
                                  />
                        </Form.Group>


                        <Form.Group class="mb-3">
                            <Form.Label>PRECIO</Form.Label>
                            <Form.Control
                                type="texttarea"
                                placeholder='10000'
                                name="price"
                                value={dataModal.price}
                                onChange={handleChangeModal}
                            />
                        </Form.Group>

                       

                    

                    

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button className="btn btn-primary" type="submit">
                            Guardar Cambios
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>
            </Container>
);
}
export default ListProducts