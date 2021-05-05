import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Banner slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
