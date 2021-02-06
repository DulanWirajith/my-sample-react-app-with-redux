import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCreams } from "../redux/index";

function HooksIceCreamComponent() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>Cake Ice Cream Shop</h1>
      <h2>IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCreams())}>Click Me</button>
    </React.Fragment>
  );
}

export default HooksIceCreamComponent;
