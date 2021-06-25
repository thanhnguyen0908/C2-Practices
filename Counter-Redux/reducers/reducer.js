import {INCREASE_COUNTER, DECREASE_COUNTER} from '../constants/index'

const initialState = {
  counter: 0,
};

export const mainReducer =(state=initialState, action) =>{
  switch(action.type){
    case INCREASE_COUNTER:
      return{...state, counter: state.counter + 1};
    case DECREASE_COUNTER:
      return{...state, counter: state.counter - 1};
    default:
      return state;
  }
};