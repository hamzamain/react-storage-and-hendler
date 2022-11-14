import React, { useEffect, useState } from "react";
import { add, multiply } from "../../utilities/Calculate";
import { getTotal } from "../../utilities/fakeDb";
import Cosmetic from "../Cosmetic/Cosmetic";
import Shoes from "../Shoes/Shoes";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div>
      <h1>welcome to my Cosmatics store</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
      <h2>Total price of cosmetic: {getTotal(cosmetics)}</h2>
      <Shoes></Shoes>
    </div>
  );
};

export default Cosmetics;
