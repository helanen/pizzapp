import React from "react";
import { Button } from "reactstrap";

const OrderButton = props => {
  var style = {
    width: 80,
    height: 80,
    margin: 10,
    flexWrap: "flex"
  };
  return (
    <div>
      <Button color="secondary"
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
      </Button>
    </div>
  );
};

export default OrderButton;
