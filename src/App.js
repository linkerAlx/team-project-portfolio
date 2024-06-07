import React from "react";
import Navigation from "./components/navigation-bar";
import Expertize from "./components/expertize";
import Services from "./components/services";
import Contacts from "./components/contacts";
import Hero from "./components/hero";


function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Expertize />
      <Services />
      <Contacts />
    </div>
  );
}


export default App;
