import { useState } from "react";
function ErrorOne() {
  const [count, setCount] = useState(0);
  const [countCorrect, setCountCorrect] = useState(0);

  //* In the following handleClick function, the count state variable is updated three times but only the last update is reflected in the UI. This is because the state updates are not immediate.
  //* count always has the value 0
  const handleClickWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  //TODO correct way to update state
  const handleClickCorrect = () => {
    setCountCorrect((prev) => prev + 1); // prev takes the previous value of countCorrect
    setCountCorrect((prev) => prev + 1); // prev takes the previous value of countCorrect
    setCountCorrect((prev) => prev + 1); // prev takes the previous value of countCorrect
    //? The callback function syntax is used to update the state variable. The arrow function takes the previous value of the state variable as an argument and returns the updated value.
    //? It's simulate immediate update
  };
  return (
    <>
      <h1>Error 1: State update are not immediate</h1>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClickWrong}>Increment not immediate</button>
      </div>

      <div>
        <h2>Count: {countCorrect}</h2>
        <button onClick={handleClickCorrect}>Increment immediate</button>
      </div>
      <br />
      <br />

      <hr />
    </>
  );
}

export default ErrorOne;
