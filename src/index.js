import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App.js";
import reducer from "./reducers/reducer.js";
var store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
