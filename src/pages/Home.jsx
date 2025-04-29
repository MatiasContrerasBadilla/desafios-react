import { useCartContext } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCartContext();

  return (
    <div className="row">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col">
          <h2>{pizza.name}</h2>
          <p>${pizza.price}</p>
          <button onClick={() => addToCart(pizza)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
