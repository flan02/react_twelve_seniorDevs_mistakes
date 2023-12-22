/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
const PRICE_PER_ITEM = 5;
function ErrorFive() {
  /*
  ! This is not necessary at all
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleClick = () => {
    setQuantity(quantity + 1);
  };
  
  useEffect(() => {
    setTotalPrice(PRICE_PER_ITEM * quantity);
  }, [quantity]);
  */

  //* This is better because we can derive the total price from the quantity
  const [quantity, setQuantity] = useState(1);
  const totalPrice = PRICE_PER_ITEM * quantity;
  const [firstname, setFirstName] = useState("Dan");
  const [lastname, setLastName] = useState("Chanivet");
  const fullname = `${firstname} ${lastname}`;

  const handleClick = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <h1>Error 5: Info can be derived from state/props</h1>
      <button onClick={handleClick} type="button">
        Add 1 item
      </button>
      <p>Total price: {totalPrice}</p>
      <p>username: {fullname}</p>
      <br />
      <br />
      <hr />
    </>
  );
}

export default ErrorFive;
