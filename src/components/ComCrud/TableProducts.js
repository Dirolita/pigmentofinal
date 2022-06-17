import "../../pages/HomeCrud/crud.css"
import Swal from 'sweetalert2';
import axios from 'axios';
import "../../pages/HomeCrud/crud.css";
import Trash from "../../pages/HomeCrud/trash.png";



function TableProduc({producto,setUplist,upList,handleClose,setDataModal,handleOpen}){

    const url="http://localhost:5000/producto";

    const handlelDelate=async()=>{
        Swal.fire({
            title: '¿Estas seguro que desea eliminar este producto?',
            text: "No puede revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,Eliminar',
            cancelButtonText:'Cancelar la accion'
            })
            .then((result) => {
            if (result.isConfirmed) {
                axios.delete((`${url}/${producto.id}`)).then((response)=>{
                        console.log(response);
                        if (response.status===200){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              setUplist(!upList)
                        }
                        else{
                            Swal.fire(
                                'ERROR',
                                'Hubo un error.'
                              )
                        }
                    }
                    
                )
            
            }
          })
    }
   /* Función para editar un registro*/
    const handleEdit=()=>{
        handleOpen();
        setDataModal(producto);
      
    }
    return(
        <tr>
            <td className='td-crud'>{producto.id}</td>
            <td className='td-crud'><img src={producto.image} width="100px"/></td>
            <td className='td-crud'>{producto.title}</td>
            <td className='td-crud'>{producto.descip}</td>
            <td className='td-crud'>{producto.price}</td>
            <td className='td-crud'><button className="bo-crud" onClick={handleEdit}>Editar</button></td>
            <td className='td-crud'><img src={Trash} className='trash-crud' onClick={handlelDelate}/></td>
        </tr>
    );
}
export default TableProduc;