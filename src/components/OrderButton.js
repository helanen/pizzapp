import React from "react";

const OrderButton = props => {
  var style = {
    width: 80,
    height: 80
  };
  return (
    <div>
      <button
        disabled={
          props.selectedPizzeria === null ||
          props.pizzeriaStatusData[props.selectedPizzeria] === false
        }
        onClick={() =>
          props.onAdd(props.name, props.price, props.selectedPizzeria)
        }
        style={style}
      >
        ${props.price} {props.name}
      </button>
    </div>
  );
};

export default OrderButton;
