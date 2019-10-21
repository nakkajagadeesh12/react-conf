import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";

// const headers = [
//   { header: "h1" },
//   { header: "h2" },
//   { header: "h3" },
//   { header: "h4" }
// ];

const header = ["h1", "h2", "h3", "h4"];

const App = () => {
  const [switches, setSwitches] = useState([]);

  function loop() {
    let newSwitch = [
      header.map(data => {
        return { header: data, checked: true };
      })
    ];
    setSwitches(newSwitch);
  }
  useEffect(() => {
    loop();
  }, []);
  return <div>{console.log("switches", switches)}</div>;
};

render(<App />, document.getElementById("root"));
