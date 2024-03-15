import React, { useState } from "react";
import Heading from "./Heading"
function App() {
  const [word, setWord] = useState("Eat");

  const clickHandler = () => {
    setWord("Drinkkk");
  }
  return (
    <div>
      <Heading message={word + " at Little Lemon Restraunt"} />
      <icons />
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
