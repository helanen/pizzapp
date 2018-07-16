import { TOGGLE_PIZZERIA } from "../constants/constants.js";

const togglePizzeria = id => {
  return {
    type: TOGGLE_PIZZERIA,
    id: id
  };
};

export default togglePizzeria;
