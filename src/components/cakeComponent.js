import React from "react";
import { buyCakes } from "../redux/index";
import { connect } from "react-redux";

function CakeComponent(props) {
  return (
    <React.Fragment>
      <h1>Cake Ice Cream Shop</h1>
      <h2>Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCakes}>Click Me</button>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
