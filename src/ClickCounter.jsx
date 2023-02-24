import { useState } from "react";

function ClickCounter() {
    const [counter,setCounter] = useState(0)
  return (
    <div data-test="component-click-counter">
      <h1 data-test="counter-display">{counter}</h1>
      <button data-test="increment-button">Add Button</button>
    </div>
  );
}
export default ClickCounter