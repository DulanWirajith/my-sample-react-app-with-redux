import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../redux/index";

function HookBuyNoOfCakesComponent() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>Cake Ice Cream Shop</h1>
      <h2>Cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCakes(number))}>Click Me</button>
    </React.Fragment>
  );
}

export default HookBuyNoOfCakesComponent;
