import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left Section in NavBar */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">TRAVEL SHOP</h1>
        <ul className="hidden md:flex gap-4 text-gray-700">
          <li className="cursor-pointer hover:text-black">Buy</li>
          <li className="cursor-pointer hover:text-black">Curate</li>
        </ul>
      </div>

      {/* Center Section  */}
      {username && (
        <div className="flex items-center pl-50px gap-2 text-lg font-semibold text-gray-700">
          <FontAwesomeIcon icon={faUserCircle} className="text-blue-500 text-xl" />
          <span className="capitalize">{username}</span>
        </div>
      )}

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md pl-10 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Contact Us Button */}
        <button className="text-gray-700 hover:text-black">Contact Us</button>

        {/* Logout Button */}
        {username && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
