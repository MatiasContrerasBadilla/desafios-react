import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver a Home</Link>
    </div>
  );
};

export default NotFound;
