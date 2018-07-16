import { ADD_ORDER_ITEM } from "../constants/constants.js";

const addOrderItem = (name, price, id) => {
  return {
    type: ADD_ORDER_ITEM,
    orderId: id,
    item: {
      name: name,
      price: price
    }
  };
};

export default addOrderItem;
