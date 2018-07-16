import { combineReducers } from "redux";
import {
  ADD_ORDER_ITEM,
  TOGGLE_PIZZERIA,
  DELETE_ORDER_ITEM,
  SELECT_PIZZERIA
} from "../constants/constants.js";

var initialPizzeriaData = [];

for (let i = 0; i < 6; i++) {
  initialPizzeriaData.push([]);
}

var initialPizzeriaStatusData = new Array(6).fill(false);

const pizzeriaData = (state = initialPizzeriaData, action) => {
  switch (action.type) {
    case ADD_ORDER_ITEM:
      var stateCopy = [];
      for (let i = 0; i < 6; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.orderId].push(action.item);
      return stateCopy;
    case DELETE_ORDER_ITEM:
      var stateCopy = [];
      for (let i = 0; i < 6; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.orderId].splice(action.id, 1);
      return stateCopy;
    case TOGGLE_PIZZERIA:
      var stateCopy = [];
      for (let i = 0; i < 6; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.id] = [];
      return stateCopy;
    default:
      return state;
  }
};



const selectedPizzeria = (state = null, action) => {
  switch (action.type) {
    case SELECT_PIZZERIA:
      if (state === action.id) return null;
      else return action.id;
    default:
      return state;
  }
};

const pizzeriaStatusData = (state = initialPizzeriaStatusData, action) => {
  switch (action.type) {
    case TOGGLE_PIZZERIA:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
};

const reducer = combineReducers({
  selectedPizzeria,
  pizzeriaStatusData,
  pizzeriaData
});

export default reducer;
