import "./Cpinturas.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardProduct from "./cardproducto";

function Cpinturas(){
        
    
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
        <div className="p-baner-pint">
            
        </div>
        <div className="p-titulo">
            <h1>PINTURAS</h1>
            <h3>"La alta calidad de nuestro productos permitira que tu trabajo sea muy profesional"</h3>
        </div>
        <section className="p-container">
            
                   {
                      list.map((es, index) => (

                        <CardProduct
                            key={index}
                            producto={es}
                        />
                    ))
                   }

        </section>
        </div>
    )
}
export default Cpinturas;