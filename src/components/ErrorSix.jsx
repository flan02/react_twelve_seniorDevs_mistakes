/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const ErrorSix = () => {
  console.log("Component Rendering ...");

  //const [price, setPrice] = useState(0); //? Primitive
  const [price, setPrice] = useState({ name: "Dan", lastname: "Chanivet" }); //? Non-Primitive

  //* The difference between primitive and non-primitive is that non-primitive are stored in memory heap and they are referenced in the stack
  //? Non-Primitive: Objects, Arrays, Functions //* They are stored in memory heap and they are referenced in the stack
  //? Primitive: Numbers, Strings, Booleans, null, undefined //* They are stored in the stack memory directly
  //* Primitive values are compared by their value
  //* Non-Primitive values are compared by their reference

  /*
  TODO When a state variable is updated, React will re-render the component and all its children if the value of the state variable is different from the previous render.
  TODO React will not re-render the component and its children unless the state variable is a non-primitive value.
  TODO In the case of a non-primitive value, React will re-render the component and its children even if the value is the same because React compares the reference of the non-primitive value and not the value itself
  */

  const handleClick = () => {
    //setPrice(1); //* it will not re-render the component and its children because it is a primitive value and the value is the same only will render if the init prop value is different
    setPrice({ name: "Dan", lastname: "Chanivet" }); //! Same value than init props but different reference (distinct object) then React will re-render the component and its children
  };

  useEffect(() => {
    console.log("useEffect called ...");
  }, [price.name]); //* If we pass price.name, React will re-render the component and its children only if the name property of the price object changes

  /*
  useEffect(() => {
    console.log("useEffect called ...");
  }, [price]); //! If we pass only price object, React will re-render the component and its children even if the 'name' property of the price object does not change
  */

  return (
    <>
      <h1>Error 6: Primitives vs non-Primitives</h1>
      <button onClick={handleClick} type="button">
        Click me
      </button>
      <br />
      <br />
      <hr />
    </>
  );
};

export default ErrorSix;
