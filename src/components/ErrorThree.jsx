/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
const ErrorThree = () => {
  const [user, setUser] = useState({
    name: "John",
    city: "Manchester",
    age: 30,
  });
  console.log(user);
  const handleChange = (e) => {
    //setUser({ name: e.target.value }); //! This will remove city and age from the state and only update name each time we type in the input field
    setUser({ ...user, name: e.target.value }); //* This will update the name property and keep the rest of the state intact
    /*
    ? This is the same as above but using the callback function
    setUser((prev) => {
      return { ...prev, name: e.target.value };
    });
    */
  };
  return (
    <>
      <h1>Error Three: Updating Object State</h1>
      <form action="">
        <input onChange={handleChange} type="text" placeholder="Your name" />
      </form>
      <br />
      <br />
      <hr />
    </>
  );
};

export default ErrorThree;
