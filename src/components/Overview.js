import React from "react";

const Overview = props => {
  var style = {
    width: 960,
    height: 160,
    backgroundColor: "#67bde5",
    textAlign: "center"
  };
  var numTables = 0;
  for (let i = 0; i < props.tableStatusData.length; i++) {
    numTables += props.tableStatusData[i];
  }
  return (
    <div style={style}>
      <h1>PizzApp</h1>
      <h2>Pizzerias Available: {numTables} /16</h2>
    </div>
  );
};

export default Overview;
