import { TYPES } from "../actions/counterActions";


export const counterInitialState = {
   count: 0,
}


export function counterReducer(state, action) {
   switch (action.type) {
      case TYPES.INCREMENT: 
         return { count: state.count + 1 }
      case TYPES.INCREMENT_5: 
         return { count: state.count + action.payload}
      default: 
         return state;
   }
}

// 1.import { TYPES } from -----> actions/ actionsFile.js 
// 2. initialize and export initialState 
// 3. create and export reducer function 