import React from "react";
import PizzeriaButtonContainer from "../containers/PizzeriaButtonContainer.js";

const Layout = () => {
  var style = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    width: 160,
    height: 480,
    backgroundColor: "yellow"
  }; 
  return (
    <div style={style}>
      <PizzeriaButtonContainer id={0} name="Henrin pizzeria 1" />
      <PizzeriaButtonContainer id={1} name="Ollin pizzeria 1" />
      <PizzeriaButtonContainer id={2} name="Henrin pizzeria 2" />
      <PizzeriaButtonContainer id={3} name="Ollin pizzeria 2" />
      <PizzeriaButtonContainer id={4} name="Henrin pizzeria 3" />
      <PizzeriaButtonContainer id={5} name="Ollin pizzeria 3" />
    </div>
  );
};

export default Layout;
