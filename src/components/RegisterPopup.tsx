import React, { useState } from "react";
import { motion } from "framer-motion";

interface RegisterPopupProps {
  onClose: () => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("https://nest-backend-16zv.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Registration successful!");
        onClose();
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Animated Popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-96 border border-white/10"
      >
       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-lg font-bold bg-red-500 rounded-full px-2"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-xl text-lg font-semibold hover:bg-pink-600 transition-all"
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPopup;
