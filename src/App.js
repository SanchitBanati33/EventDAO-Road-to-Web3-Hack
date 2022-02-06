import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Organizers from "./components/Pages/Organizers";
import Tickets from "./components/Pages/Tickets";



function App() {
  return (
    <div className="App">
      <Header />
      <Tickets />
      {/* <Organizers /> */}






    </div>
  );
}

export default App;
