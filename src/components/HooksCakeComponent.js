import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../redux/index";

function HooksCakeComponent() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>Cake Ice Cream Shop</h1>
      <h2>Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCakes())}>Click Me</button>
    </React.Fragment>
  );
}

export default HooksCakeComponent;
