import { SELECT_PIZZERIA } from "../constants/constants.js";

const selectPizzeria = id => {
  return {
    type: SELECT_PIZZERIA,
    id: id
  };
};

export default selectPizzeria;
