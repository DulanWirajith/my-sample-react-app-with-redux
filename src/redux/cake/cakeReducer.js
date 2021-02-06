import { BUY_CAKES } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};
