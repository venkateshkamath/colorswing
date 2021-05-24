import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));
  const formHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>ColorSwing</h3>

        <form onSubmit={formHandler}>
          <input
            className={`${error && "error"}`}
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          //We will pass the color object by unpacking or spreading it
          return (
            <SingleColor index={index} key={index} hex={color.hex} {...color} />
          );
        })}
      </section>
    </>
  );
}

export default App;
