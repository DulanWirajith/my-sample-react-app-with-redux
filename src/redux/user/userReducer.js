import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
