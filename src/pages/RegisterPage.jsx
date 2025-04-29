import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useUserContext();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
