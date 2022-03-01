import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [result, SetResult] = useState("");

  const handleClick = (e) => {
    SetResult(result.concat(e.target.name));
  };

  const clear = () => {
    SetResult("");
  };

  const backspace = () => {
    SetResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      SetResult(eval(result).toString());
    } catch (err) {
      SetResult(err);
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" id="display" name="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button className="primary" onClick={backspace} id="backspace">
            C
          </button>
          <button className="colors" name="/" onClick={handleClick} id="divide">
            &divide;{" "}
          </button>
          <button name="7" onClick={handleClick} id="seven">
            7
          </button>
          <button name="8" onClick={handleClick} id="eight">
            8
          </button>
          <button name="9" onClick={handleClick} id="nine">
            9
          </button>
          <button
            className="colors"
            name="*"
            onClick={handleClick}
            id="multiply"
          >
            &times;
          </button>
          <button name="4" onClick={handleClick} id="four">
            4
          </button>
          <button name="5" onClick={handleClick} id="five">
            5
          </button>
          <button name="6" onClick={handleClick} id="six">
            6
          </button>
          <button
            className="colors"
            name="-"
            onClick={handleClick}
            id="subtract"
          >
            &ndash;
          </button>
          <button name="1" onClick={handleClick} id="one">
            1
          </button>
          <button name="2" onClick={handleClick} id="two">
            2
          </button>
          <button name="3" onClick={handleClick} id="three">
            3
          </button>
          <button className="colors" name="+" onClick={handleClick} id="add">
            +
          </button>
          <button name="0" onClick={handleClick} id="zero">
            0
          </button>
          <button name="." onClick={handleClick} id="decimal">
            .
          </button>
          <button name="=" onClick={calculate} id="equal">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
