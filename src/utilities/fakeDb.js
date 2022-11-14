// uer local storage to manage cart data
const addToDb = (id) => {
  let shopingCart;
  const storedInDb = localStorage.getItem("shoping-cart");
  console.log(id);

  if (storedInDb) {
    shopingCart = JSON.parse(storedInDb);
  } else {
    shopingCart = {};
  }

  const quantity = shopingCart[id];
  if (quantity) {
    shopingCart[id] = quantity + 1;
  } else {
    shopingCart[id] = 1;
  }

  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
};

const removeFromDb = (id) => {
  const stored = localStorage.getItem("shoping-cart");
  if (stored) {
    const shopingCart = JSON.parse(stored);
    if (id in shopingCart) {
      delete shopingCart[id];
      localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
    }
  }
};

// const items = [
//   {id:1, name: 'alta', price: 100},
//   {id:1, name: 'alta', price: 100},
//   {id:1, name: 'alta', price: 100},
//   {id:1, name: 'alta', price: 100},
//   {id:1, name: 'alta', price: 100},
// ]

// const total = items.reduce((previous, current)=> previous + current.price, 0)

const getTotalPrice = (products) => {
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
};
export { addToDb, removeFromDb, getTotalPrice as getTotal };
