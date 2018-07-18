import React from "react";
import { Button } from "reactstrap";
import TogglePizzeriaContainer from "../containers/TogglePizzeriaContainer.js";

const PizzeriaButton = props => {
  var style = {
    width: 145,
    height: 70,
    marginLeft: 5,
    button: Button,
    border: props.selectedPizzeria === props.id ? "2px solid blue" : null,
    backgroundColor: props.pizzeriaStatusData[props.id] ? "red" : null
  };
  
  /*return (
    <div>
      <Button color="primary" onClick={() => props.onSelect(props.id)} style={style} >
        {props.name}
      </Button>
    </div>
  );*/
  if (props.pizzeriaStatus){
    return (
      <div>
        <Button color="danger"
        onClick={() => { 
          props.onSelect(props.id);
          props.onToggle(props.selectedPizzeria, props.pizzeriaData)}
        }
          
        >
          {props.name}
        </Button>
      </div>
    );
  }else{
    return (
      <div>
        <Button color="success"
        onClick={() => { 
          props.onSelect(props.id);
          props.onToggle(props.selectedPizzeria, props.pizzeriaData)}
        } 
        >
          {props.name}
        </Button>
      </div>
    );
  }
};

export default PizzeriaButton;
