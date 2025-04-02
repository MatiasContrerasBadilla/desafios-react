import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} width="300" />
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
