import { BUY_ICECREAMS } from "./iceCreamTypes";

const initialState = {
  numOfIceCreams: 20,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};
