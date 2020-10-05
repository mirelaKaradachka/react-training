import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = (props) => {
  const { framework, lng } = props;
  // {framework,lng}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React TODOs Demo
        </a>
        <p></p>
        Welcome from {framework} and language {lng}
      </header>
    </div>
  );
};

export default App;
