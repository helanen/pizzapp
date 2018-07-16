import React from "react";

const OrderList = props => {
  var style = {
    textAlign: "left",
    marginLeft: 20
  };

  if (props.selectedPizzeria === null) return null;
  console.log(props);
  return (
    <div style={style}>
      {props.items.map((items, i) => {
        return (
          <div>
            <button onClick={() => props.onDelete(props.selectedPizzeria, i)}>
              x
            </button>
            &nbsp; {items.name} | ${items.price}
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
