import React, { useState } from "react";
import "./style.css";
function Counter({ max }) {
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState(40);
  const changeWidthHandler = (x) => {
    x += "x";
    setSize(x.length * 10);
    console.log("sizeChanged");
  };
  const handleClickRight = () => {
    if (counter === "") {
      setCounter(1);
    } else if (counter < max) {
      if ((counter + 1).toString().length >= 4) {
        changeWidthHandler((counter + 1).toString());
      }
      if ((counter + 1).toString().length < 3) {
        setSize(40);
      }
      setCounter(counter + 1);
    } else {
      alert(`Counter value limit is set to ${max}`);
      console.log(max);
    }
  };
  const handleClickLeft = () => {
    if (counter > 0 && counter <= max) {
      if ((counter - 1).toString().length >= 4) {
        changeWidthHandler((counter - 1).toString());
      }
      if ((counter - 1).toString().length < 3) {
        setSize(40);
      }
      setCounter(counter - 1);
    } else {
      alert("Invalid Range");
    }
  };
  const changeCounterHandler = (e) => {
    if (e.target.value.length >= 5) {
      changeWidthHandler(e.target.value);
    }
    if (e.target.value.length < 5) {
      setSize(40);
    }
    if (e.target.value === "") {
      setCounter("");
    } else if (Number(e.target.value) > max) {
      alert("Cannot exceed Limit");
    } else {
      setCounter(Number(e.target.value));
    }
  };
  const userStyle = {
    maxWidth: `${size}px`,
    transition: ".2s",
  };
  console.log(counter);
  console.log(size);
  return (
    <div>
      <div className='btn-group'>
        <button className='left' onClick={handleClickLeft}>
          -
        </button>
        <input
          style={userStyle}
          autoComplete='off'
          type='number'
          value={counter}
          onChange={changeCounterHandler}
          id='input'
        />
        <button className='right' onClick={handleClickRight}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
