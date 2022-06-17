import { useState } from 'react';
import './ItemCount.css';
import React from 'react';


export const ItemCount= ({initial, stock, onAdd})=> {
    //hook 
    const [count, setCount]= useState(initial);

    //funciones de incremento y decremento
    const decrease= ()=>{
        setCount(count-1);
        
    }

    const increase= ()=>{
        setCount(count+1);
    }



    return(
        <div className='pcounter'>
        <div className='counter'>
            <button className='btn-counter' onClick={decrease} disabled={count<=initial}>-</button>
            <span className='span'>{count}</span>
            <button className='btn-counter' onClick={increase} disabled={count>=stock}>+</button>
        </div>
        <div className='calculate'>
        <button className='btn-calculate'  disabled={stock <= 0} onClick={()=> onAdd(count)}>Calcular</button>
        </div>
        </div>
    );
}

export default ItemCount;