import {useState, useEffect} from "react"; 
import Header from "../assets/components/Header.jsx";
import CardPizza from "../assets/components/CardPizza.jsx";
const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);  
      } catch (error) {
        console.error("Error al obtener las pizzas", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);
  
  
  /* const pizzas = [
    {
      nombre: "Pizza Napolitana",
      precio: 5950,
      ingredientes: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
    {
      nombre: "Pizza Española",
      precio: 6950,
      ingredientes: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
,
    },
    {
      nombre: "Pizza Pepperoni",
      precio: 6950,
      ingredientes: ["mozzarella", "pepperoni", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    }
  ]
*/
  return (
    <div className="home">
      <Header />
      <h1>Nuestras Pizzas</h1>
      {loading ? (
        <p>Cargando pizzas...</p>
      ) : (
        <div className="pizza-list">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              nombre={pizza.name}
              precio={pizza.price}
              ingredientes={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default Home;