import { useState } from "react";

function App() {
  // usestate hooks
  let [couter, setCounter] = useState(0);

  let increase = () => {
    setCounter(couter + 1);
  };
  let decrease = () => {
    setCounter(couter - 1);
  };
  let reset = () => {
    setCounter((couter = 0));
  };
  return (
    <>
      <h1>Chai aur Code</h1>
      <h1>Couter value is : {couter}</h1>

      <button onClick={increase}>increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
