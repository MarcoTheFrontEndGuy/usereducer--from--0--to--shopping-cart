import React, { useReducer } from 'react'

const TYPES = {
   INCREMENT: 'INCREMENT',
   INCREMENT_5: 'INCREMENT_5',
   DECREMENT: 'DECREMENT',
   RESET: 'RESET',
}

const initialState = {
   count: 0,
}

function reducer(state, action) {
   switch (action.type) {
      case TYPES.INCREMENT: 
         return { count: state.count + 1 }
      case TYPES.INCREMENT_5: 
         return { count: state.count + action.payload}
      default: 
         return state;
   }
}

const Counter = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
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