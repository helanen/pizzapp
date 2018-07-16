import React from "react";

const Overview = props => {
  var style = {
    width: 980,
    height: 155,
    backgroundColor: "#58a9ce",
    textAlign: "center",
    borderBottom: "5px solid black"
  };
  var numTables = 6;
  for (let i = 0; i < props.pizzeriaStatusData.length; i++) {
    numTables -= props.pizzeriaStatusData[i];
  }
  return (
    <div style={style}>
      <h1>Welcome to PizzApp</h1>
      <h2>Pizzerias Available: {numTables}/6</h2>
    </div>
  );
};

export default Overview;
