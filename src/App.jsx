import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/cart" element={<Cart />} />
  
  {}
  <Route path="/pizza/:id" element={<Pizza />} />  {}

  <Route path="/profile" element={<Profile />} />
  <Route path="/404" element={<NotFound />} />
  <Route path="*" element={<NotFound />} />
</Routes>

    </>
  );
}

export default App;
