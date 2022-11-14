import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakeDb";
import Shoes from "../Shoes/Shoes";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  const addToCart = (id) => {
    addToDb(id);
    // console.log(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div className="product">
      <h2>By this: {name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>it has id:{id}</small>
      </p>
      {/* <button onClick={addToCartWraper}>Add to Cart</button> */}
      <button onClick={() => addToCart(id)}>Purches</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
      <Shoes id={id}></Shoes>
    </div>
  );
};

export default Cosmetic;
