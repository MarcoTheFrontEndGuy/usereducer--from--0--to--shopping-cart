import React, { useReducer } from 'react'
import { counterReducer, counterInitialState } from '../reducers/counterReducer';
import { TYPES } from '../actions/counterActions';



const Counter = () => {
   const [state, dispatch] = useReducer(counterReducer, counterInitialState);
   const add = () => dispatch({type: TYPES.INCREMENT});
   const add5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});
  return (
    <div>
       <h3>Counter using useReducer hook</h3>

       <h1>{state.count}</h1>

       <button onClick= {add}>+</button>
       <button onClick={add5}>+5</button>
    </div>
  )
}

export default Counter