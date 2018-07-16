import { connect } from "react-redux";
import OrderButton from "../components/OrderButton.js";
import addOrderItem from "../actions/addOrderItem.js";

const mapStateToProps = state => {
  return {
    selectedPizzeria: state.selectedPizzeria,
    pizzeriaStatusData: state.pizzeriaStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price, orderId) => {
      dispatch(addOrderItem(name, price, orderId));
    }
  };
};
const OrderButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderButton
);

export default OrderButtonContainer;
