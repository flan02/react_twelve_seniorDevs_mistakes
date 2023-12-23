/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function ErrorEleven() {
  const [count, setCount] = useState(0);
  console.log("Component rendered...");
  /*
  ! Large way to solve this problem
  useEffect(() => {
    //? 1. This is a stale closure because the count variable is not updated. The function is created once and it will always use the initial value of count.
    const interval = setInterval(() => {
      console.log("Interval function running...");
      setCount(count + 1);
      //setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval); //? 3. The solution is to use a cleanup function to clear the interval.
  }, [count]); //? 2. The solution is to add count to the dependency array. This will cause the function to be recreated every time count changes.
  */

  //* There is a cleaner way to solve this problem. We can use a function in the setCount method. This function will receive the previous value of the state and return the new value. This way we don't need to add count to the dependency array.

  useEffect(() => {
    //? 1. This is a stale closure because the count variable is not updated. The function is created once and it will always use the initial value of count.
    /*
    setInterval(() => {
      console.log("Interval function running...");
      setCount((prev) => prev + 1);
    }, 1000);
    */
  }, []);

  return (
    <>
      <h1>Error 11: Stale closure</h1>
      <p>Count is: {count}</p>
      <br />
      <br />
      <hr />
    </>
  );
}

export default ErrorEleven;
