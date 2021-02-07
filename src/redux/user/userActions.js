import axios from "axios";
import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS } from "./userTypes";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchError = (errorMessage) => {
  return {
    type: FETCH_ERROR,
    payload: errorMessage,
  };
};

export const fetchUsers = () => {
  // in here we return a function
  return (dispatch) => {
    //   set loading to true
    dispatch(fetchData);
    // call get data request
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //   if responce success, set users to payload
        const users = response.data;
        console.log(users);
        dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        //   if responce unsuccess, set errorMessage to payload
        const errorMessage = error.message;
        dispatch(fetchError(errorMessage));
      });
  };
};

// export const getItemsAction = () => dispatch => {
//   axios.get('api/items').then(response => {
//           dispatch({
//               type: 'GET_ITEMS',
//               payload: response.data
//           })
//   });
// };
