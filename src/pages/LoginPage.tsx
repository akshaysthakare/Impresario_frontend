import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterPopup from "../components/RegisterPopup";

const Login: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false);

  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://impresario-backend.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", formData.username);

        navigate("/");
      } else {
        alert(data.message || "Invalid credentials!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Not registered? {" "}
          <button
            onClick={() => setShowRegister(true)}
            className="text-blue-500 underline"
          >
            Register Now
          </button>
        </p>
      </div>
      {showRegister && <RegisterPopup onClose={() => setShowRegister(false)} />}

    </div>
  );
};

export default Login;
