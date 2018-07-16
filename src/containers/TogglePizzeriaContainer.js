import { connect } from "react-redux";
import TogglePizzeria from "../components/TogglePizzeria.js";
import togglePizzeria from "../actions/togglePizzeria.js";

const mapStateToProps = state => {
  return {
    selectedPizzeria: state.selectedPizzeria,
    pizzeriaStatus: state.pizzeriaStatusData[state.selectedPizzeria],
    pizzeriaData: state.pizzeriaData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: (id) => {
      
      dispatch(togglePizzeria(id));
     
    }
  };
};
const TogglePizzeriaContainer = connect(mapStateToProps, mapDispatchToProps)(
  TogglePizzeria
);

export default TogglePizzeriaContainer;
