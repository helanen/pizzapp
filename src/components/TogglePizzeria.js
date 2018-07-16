import React from "react";
import { Button } from "reactstrap";

const TogglePizzeria = props => {

  if (props.pizzeriaStatus){
    return (
      <div>
        <Button color="danger"
          disabled={props.selectedPizzeria === null}
          onClick={() => props.onToggle(props.selectedPizzeria, props.pizzeriaData)}
        >
          Choose other pizzeria
        </Button>
      </div>
    );
  }else{
    return (
      <div>
        <Button color="success"
          disabled={props.selectedPizzeria === null}
          onClick={() => props.onToggle(props.selectedPizzeria, props.pizzeriaData)}
        >
          Choose this pizzeria
        </Button>
      </div>
    );
  }
  
};

export default TogglePizzeria;
