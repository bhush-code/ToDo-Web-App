import React, { useState } from 'react';
import {Footer} from './Footer'; // Assuming you have a Footer component

import '../Counter.css'; // Assuming you have a CSS file for styling

export const Counter=()=> {

    console.log("Counter component rendered");

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (

        <>
        <div className='counter'>  
            <div children='child'><p>{count}</p></div>
            <div><button onClick={increment}>Increment</button>
       <button onClick={()=>{ setCount((count)=>count-1)}}>Decrement</button>
       <button onClick={()=>{ setCount(0)}}>Reset</button>
       </div> 
        </div>
            
     <Footer/>
        </>

    );

    
 <Footer/>

}