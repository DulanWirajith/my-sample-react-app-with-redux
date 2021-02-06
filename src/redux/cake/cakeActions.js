import { BUY_CAKES } from "./cakeTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // api
    //   .fetchPosts()
    //   .then((response) => {
    //     console.log("response is" + response);
    //     dispatch({ type: "FETCH_ALL", payload: response });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log("response is" + data);
    dispatch({ type: BUY_CAKES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
