import {
  EXAMPLE_ACTION,
  EXAMPLE_ACTION_TWO,
} from '../helpers/actionTypes';

const exampleDefaultState = { counter: 0, lastAdded: 0, lastMinus: 0 };
const exampleReducer = (state = exampleDefaultState, action) => {
  switch(action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        counter: state.counter + action.payload.add,
        lastAdded: action.payload.add,
      };
    case EXAMPLE_ACTION_TWO:
      return {
        ...state,
        counter: state.counter - action.payload.minus,
        lastMinus: action.payload.minus,
      };
    default:
      return state;
  };
};

export default exampleReducer;
