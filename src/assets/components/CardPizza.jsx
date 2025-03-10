const CardPizza = ({nombre, precio, ingredientes, img}) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={nombre} className="card-pizza-img" />
      <div className="card-pizza-content">
        <h3 className="card-pizza-title">{nombre}</h3>
        <div className="card-pizza-ingredientes">
          <strong>Ingredientes: </strong> {ingredientes.join(", ")}
          </div>
          <div className="card-pizza-botones">
             <button className="btn btn-outline-primary btn-sm">
              Ver más
             </button>
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