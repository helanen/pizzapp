import React from "react";
import TableButtonContainer from "../containers/TableButtonContainer.js";

const Layout = () => {
  var style = {
    display: "flex",
    alignContent: "space-around",
    justifyContent: "center",
    flexWrap: "wrap",
    width: 640,
    height: 480,
    backgroundColor: "#aadff7"
  };
  return (
    <div style={style}>
      Pizza goes here
    </div>
  );
};

export default Layout;
