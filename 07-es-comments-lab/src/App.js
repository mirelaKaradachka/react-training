import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CommentsList from "./components/CommentsList/CommentsList";

function App() {
  const [comments, setComments] = useState([]);
  const [selected, setSelected] = useState();
  function handleChangeSelected(sel) {
    setSelected(sel);
  }
  return (
    <div className="App">
      <CommentsList
        comments={comments}
        selected={selected}
        onChangeSelected={handleChangeSelected}
      />
    </div>
  );
}

export default App;
