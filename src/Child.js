
import React, { useContext } from 'react';
import counterContext from './counterContext';

const Child =(prop)=>{
    let counterValue= useContext(counterContext);
    console.log(counterValue[0])
    return(

        <div>
            <h2> the value is {prop.value} </h2>
            <h3>the value of counter context is {counterValue[0]}</h3>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Context Increment</button>
        </div>
    )
}

export default Child;