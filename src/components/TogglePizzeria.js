import React from "react";

const TogglePizzeria = props => {
  return (
    <div>
      <button
        disabled={props.selectedPizzeria === null}
        onClick={() => props.onToggle(props.selectedPizzeria, props.pizzeriaData)}
      >
        {props.pizzeriaStatus ? "Choose other pizzeria" : "Choose this pizzeria"}
      </button>
    </div>
  );
};

export default TogglePizzeria;
