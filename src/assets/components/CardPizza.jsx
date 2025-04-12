import { Link } from "react-router-dom";

const CardPizza = ({ id, nombre, precio, ingredientes, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={nombre} className="card-pizza-img" />
      <div className="card-pizza-content">
        <h3 className="card-pizza-title">{nombre}</h3>
        <div className="card-pizza-ingredientes">
          <strong>Ingredientes: </strong>
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>
        <div className="card-pizza-botones">
          <Link to={`/pizza/${id}`}>
            <button className="btn btn-outline-primary btn-sm">Ver más</button>
          </Link>
          <button className="btn btn-primary btn-sm ms-2">
            Añadir al carro
          </button>
        </div>
        <p className="card-pizza-precio mt-2">
          <strong>Precio: ${precio.toLocaleString()}</strong>
        </p>
      </div>
    </div>
  );
};

export default CardPizza;
