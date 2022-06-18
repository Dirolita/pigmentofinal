import "./Cpinturas.css";
import ModalPinturas from "./ModalPinturas";
import axios from 'axios';
import { useEffect, useState } from 'react';



function CardProduct({producto}){
  
  const url="http://localhost:5000/producto";

   

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

return(
  <div>
    <div className="p-card" id={producto.id}>
    <img src={producto.image}/>
    <h2>{producto.title}</h2>
    <p>{producto.descip}</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${producto.id}`}>
  VER
</button>
</div>
<div>

      {
        list.map((es, index) => (

          <ModalPinturas
              key={index}
              producto={es}
              
          />
      ))
     }


</div>
</div>  
);
}
export default CardProduct;