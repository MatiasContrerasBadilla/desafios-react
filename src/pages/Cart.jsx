import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } = useCartContext();
  const { token } = useUserContext();
  const [success, setSuccess] = useState(false);

  const handleCheckout = async () => {
    const res = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });
    if (res.ok) {
      setSuccess(true);
    }
  };

  return (
    <div className="container mt-5">
      {cart.map((item) => (
        <div key={item.id} className="mb-3">
          <h4>{item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      {token && <button onClick={handleCheckout}>Realizar compra</button>}
      {success && <p>Compra realizada con éxito!</p>}
    </div>
  );
};

export default Cart;
