import React from 'react';
import Child from './Child'
import Child2 from './child2'
const Parent= (prop) => {
    return(
        <div>

            <Child value={prop.value}/>

            <Child2 />

           
        </div>
        
    )
}

export default Parent;