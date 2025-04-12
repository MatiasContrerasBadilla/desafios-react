import React, { useState, useContext } from "react";
import { pizzaCart } from "../data/pizzaData"; 
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);
  const { token } = useContext(UserContext);
  
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  const aumentarCantidad = (id) => {
    const nuevoCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(nuevoCart);
  };

  const disminuirCantidad = (id) => {
    const nuevoCart = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return pizza.count > 1 ? { ...pizza, count: pizza.count - 1 } : null;
        }
        return pizza;
      })
      .filter((pizza) => pizza !== null);
    setCart(nuevoCart);
  };

  return (
    <div className="cart">
      <h1>Detalles del pedido:</h1>
      <div className="cart-list">
        {cart.map((pizza, index) => (
          <div key={index} className="cart-item">
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>${pizza.price}</p>
            <button onClick={() => aumentarCantidad(pizza.id)}>+</button>
            <span>{pizza.count}</span>
            <button onClick={() => disminuirCantidad(pizza.id)}>-</button>
          </div>
        ))}
        <div className="cart-total">
          <h3>Total: ${total.toLocaleString()}</h3>
          <button className="btn btn-success" disabled={!token}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
