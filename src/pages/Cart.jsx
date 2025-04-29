import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } = useCartContext();

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
    </div>
  );
};

export default Cart;
