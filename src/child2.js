import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

const Child2 = () =>{

    let [state, dispatch] = useReducer(counterReducer, 1);
    console.log(state);

    return(
        <div>
            <h3> the value of Reducer is : {state}</h3>

            <button onClick={()=> dispatch('INCREMENT')}>Reducer ++ </button>
            <button onClick={()=> dispatch('DECREMENT')}>Reducer -- </button>
        </div>
    )
}

export default Child2;