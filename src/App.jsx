import Navbar from "./assets/components/Navbar.jsx";
import Home from "./assets/components/Home.jsx";
import Footer from "./assets/components/Footer.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div>
     <Navbar />
     <Home />
     <Footer/>
    </div>
  );
};

export default App;