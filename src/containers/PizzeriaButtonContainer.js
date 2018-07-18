import { connect } from "react-redux";
import PizzeriaButton from "../components/PizzeriaButton.js";
import selectPizzeria from "../actions/selectPizzeria.js";
import togglePizzeria from "../actions/togglePizzeria.js";

const mapStateToProps = state => {
  return {
    selectedPizzeria: state.selectedPizzeria,
    pizzeriaStatusData: state.pizzeriaStatusData,
    pizzeriaStatus: state.pizzeriaStatusData[state.selectedPizzeria],
    pizzeriaData: state.pizzeriaData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(selectPizzeria(id));
    },
    onToggle: (id) => {
      
      dispatch(togglePizzeria(id));
     
    }
  };
};

const PizzeriaButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  PizzeriaButton
);

export default PizzeriaButtonContainer;
