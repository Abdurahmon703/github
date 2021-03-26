import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Block1 from "./components/Block1/Block1";
import Block2 from "./components/Block2/Block2";
import Block3 from "./components/Block3/Block3";
import Home from "./components/Home/Home";
import News1 from "./components/News/News1/News1";
import Advertising from "./components/advertising/advertising";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Block1 />
        <Block2 />
        <Block3 />
        <Home />
        <News1 />
        <Advertising />
      </Router>
    </div>
  );
};

export default App;
