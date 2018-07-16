import { connect } from "react-redux";
import OrderList from "../components/OrderList.js";
import deleteOrderItem from "../actions/deleteOrderItem.js";

const mapStateToProps = state => {
  return {
    selectedPizzeria: state.selectedPizzeria,
    items: state.pizzeriaData[state.selectedPizzeria]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (orderId, id) => {
      console.log(orderId);

      dispatch(deleteOrderItem(orderId, id));
    }
  };
};
const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderList
);

export default OrderListContainer;
