import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-purple-700">
          Canvas<span className="font-thin">Draw</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "X" : "Menu"}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex gap-6 items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
