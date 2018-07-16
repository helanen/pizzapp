import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import Layout from "./Layout.js";
import Menu from "./Menu.js";

const Body = () => {
  var style = {
    display: "flex",
    height: 480,
    minWidth: 960
  };
  return (
    <div style={style}>
      <Layout />
      <Menu />
      <DetailsContainer />
    </div>
  );
};

export default Body;
