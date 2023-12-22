/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
const ErrorTwo = ({ id }) => {
  //! {id} are provided via props from App.jsx component <ErrorTwo id="id" />
  const [something, setSomething] = useState("something");
  useEffect(() => {}, [something]);

  return (
    <>
      {!id ? (
        <>
          <h1>Error 2 Conditional Rendering: </h1>
          <section>No id provided</section>
        </>
      ) : (
        <>
          <h1>Error 2 Conditional Rendering</h1>
          <section>Id {id}</section>
        </>
      )}
      <br />
      <br />
      <hr />
    </>
  );
};

export default ErrorTwo;
