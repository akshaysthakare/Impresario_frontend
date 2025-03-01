import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import SectionThree from "../components/SectionThree";
import FourthSection from "../components/FourthSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Checks if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <>
      <Navbar />
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
      >
        Logout
      </button>
      <HomeSection />
      <SectionThree />
      <FourthSection />
      <Footer />
    </>
  );
};

export default Home;
