import React from "react";
import OrderListContainer from "../containers/OrderListContainer.js";
import TogglePizzeriaContainer from "../containers/TogglePizzeriaContainer.js";

const Details = props => {
  var style = {
    width: 160,
    height: 480,
    backgroundColor: "#9ca7ad",
    textAlign: "center"
  };

  var total = 0;
  if (props.selectedPizzeria !== null) {
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price;
    }
  }
  return (
    <div style={style}>
      <h2>Pizzeria #: {props.selectedPizzeria+1}</h2>
      <TogglePizzeriaContainer />

      <h2>Bill Total: {total}</h2>

      <h2>Orders: </h2>
      <OrderListContainer />
    </div>
  );
};

export default Details;
