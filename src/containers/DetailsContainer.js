import { connect } from "react-redux";
import Details from "../components/Details.js";

const mapStateToProps = state => {
  return {
    selectedPizzeria: state.selectedPizzeria,
    items: state.pizzeriaData[state.selectedPizzeria]
  };
};

const DetailsContainer = connect(mapStateToProps, null)(Details);

export default DetailsContainer;
