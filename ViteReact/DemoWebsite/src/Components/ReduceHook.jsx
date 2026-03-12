import React, { useReducer } from 'react'
import countReducer from './CountReducer';

function ReduceHook() {


  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(countReducer, initialState);
    return (
        <>
            <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
            <div >Reduce-Hook count: <span>{state.count}</span></div>
            <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
        </>


    )
}

export default ReduceHook