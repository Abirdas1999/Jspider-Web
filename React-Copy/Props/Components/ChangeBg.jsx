import React from 'react'
import { useState } from 'react';


function ChangeBg() {
    let [color,setColor]=useState("blue");
    function handleChange(){
        let R = Math.floor(Math.random()*256);
        let G = Math.floor(Math.random()*256);
        let B = Math.floor(Math.random()*256);
        setColor(()=>{
            return `rgb(${R},${G},${B})`
            
        });
    }
  return (
    <>
        <h1 className='text-6xl text-center text-amber-600'>Change Background</h1>  
        <div className="button  flex items-center justify-center mt-8 border-2 border-black" style={{backgroundColor: color}}>
            <button onClick={handleChange} className='bg-black text-center text-white px-4 py-2 rounded-lg'>Click</button>
        </div> 
    </>
  )
}

export default ChangeBg