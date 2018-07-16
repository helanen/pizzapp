import { DELETE_ORDER_ITEM } from "../constants/constants.js";

const deleteOrderItem = (orderId, id) => {
  return {
    type: DELETE_ORDER_ITEM,
    orderId: orderId,
    id: id
  };
};

export default deleteOrderItem;
