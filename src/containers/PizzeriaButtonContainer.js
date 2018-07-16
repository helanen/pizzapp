import { connect } from "react-redux";
import PizzeriaButton from "../components/PizzeriaButton.js";
import selectPizzeria from "../actions/selectPizzeria.js";

const mapStateToProps = state => {
  return {
    selectedPizzeria: state.selectedPizzeria,
    pizzeriaStatusData: state.pizzeriaStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(selectPizzeria(id));
    }
  };
};
const PizzeriaButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  PizzeriaButton
);

export default PizzeriaButtonContainer;
