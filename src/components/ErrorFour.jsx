/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
function ErrorFour() {
  //! This is a bad practice
  /*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  */
  //* This is a better practice, we create an object and set it as the whole state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    code: "",
  });

  const handleChange = (e) => {
    //setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); //? This is the same as below but using the callback function
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  return (
    <>
      <h1>Error 4: Object state instead of multiple smaller ones</h1>
      <form action="">
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="first Name"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="last Name"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="youremail@address.com"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            name="address"
            placeholder="address"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="code"
            placeholder="code"
          />
        </div>
      </form>
      <br />
      <br />
      <hr />
    </>
  );
}

export default ErrorFour;
