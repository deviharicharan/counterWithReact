import { useState } from "react";
import Counter from "./Component/Counter";
function App() {
  const [limit, setlimit] = useState(1000);
  const [size, setSize] = useState(40);
  const changeWidthHandler = (x) => {
    if (x.length >= 5) {
      setSize(x.length * 15);
    }
  };
  const limitChangeHandler = (e) => {
    if (e.target.value.length >= 5) {
      changeWidthHandler(e.target.value);
    }
    if (e.target.value.length < 5) {
      setSize(40);
    }
    if (e.target.value === "") {
      setlimit("");
    } else {
      setlimit(Number(e.target.value));
    }
  };
  const userStyle = {
    maxWidth: `${size}px`,
    transition: ".2s",
  };
  return (
    <div
      className='App'
      style={{ margin: "auto", width: "800px", textAlign: "center" }}
    >
      <div style={{ display: "inline-block", fontSize: "50px" }}>
        Max Counter Limit is set to <span id="value" contentEditable >{limit}</span>{" "}
      </div>
      {/* <input
        style={userStyle}
        type='number'
        onChange={limitChangeHandler}
        value={limit}
      /> */}
      <p>
        <p>You can change the Limit here</p>
      </p>
      <Counter max={limit} />
    </div>
  );
}
export default App;
