import { BUY_CAKES } from "./cakeTypes";

export const buyCakes = (number) => {
  return {
    type: BUY_CAKES,
    payload: number,
  };
};
