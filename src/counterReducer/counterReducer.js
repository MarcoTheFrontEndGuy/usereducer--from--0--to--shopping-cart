import { TYPES } from "../counterActions/counterActions";

export const initialState = {
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
