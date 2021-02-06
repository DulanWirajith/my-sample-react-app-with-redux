import { BUY_CAKES } from "./cakeTypes";

export const buyCakes = () => async (dispatch) => {
  return { type: BUY_CAKES };
};
