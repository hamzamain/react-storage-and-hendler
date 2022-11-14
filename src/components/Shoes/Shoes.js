import React from "react";
import { add, divition } from "../../utilities/Calculate";
// import add from "../../utilities/Calculate";

const Shoes = (props) => {
  const first = 55;
  const second = 88;
  const total = add(first, second);
  const last = divition(first, second);
  const added = (id) => localStorage.setItem(id, 1);
  return (
    <div>
      <h3>this is Shoes Component</h3>
      <p>total: {total}</p>
      <p>divition: {last}</p>
      <button onClick={() => added(props.id)}>add</button>
    </div>
  );
};

export default Shoes;
