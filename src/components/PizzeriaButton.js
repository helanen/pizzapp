import React from "react";

const PizzeriaButton = props => {
  var style = {
    width: 160,
    height: 80,
    border: props.selectedPizzeria === props.id ? "2px solid blue" : null,
    backgroundColor: props.pizzeriaStatusData[props.id] ? "red" : null
  };
  return (
    <div>
      <button onClick={() => props.onSelect(props.id)} style={style}>
        {props.name}
      </button>
    </div>
  );
};

export default PizzeriaButton;
