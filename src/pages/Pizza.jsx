import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} width="300" />
      <p><strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}</p>
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
