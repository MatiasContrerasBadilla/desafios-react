import Navbar from "./assets/components/Navbar.jsx";  
//import Home from "./assets/components/Home.jsx";  
import Footer from "./assets/components/Footer.jsx";  
import Cart from "./assets/components/Cart.jsx";

// import RegisterPage from "./components/RegisterPage.jsx";
// import LoginPage from "./components/LoginPage.jsx"  

import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min.js";  

const App = () => {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Navbar />  
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />  
    </div>
  );
};

export default App;