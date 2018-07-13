import { connect } from "react-redux";
import Overview from "../components/Overview.js";

const mapStateToProps = state => {
  return {
    pizzeriaStatusData: state.pizzeriaStatusData
  };
};

const OverviewContainer = connect(mapStateToProps, null)(Overview);

export default OverviewContainer;
