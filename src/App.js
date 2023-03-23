import React from "react";
import CounterContainer from "./containers/CounterContainer";
import { Context } from "./context/index";

function App() {
  return (
    <>
      <CounterContainer />
      <br />
      <br />
      <Context />
    </>
  );
}

export default App;
