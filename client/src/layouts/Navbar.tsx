import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Search,
  User,
} from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Track Order", path: "/track-order" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BrewVerse" className="h-11 w-11" />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              BrewVerse
            </h1>

            <p className="text-xs text-gray-500">
              Crafted Coffee. Delivered Fresh.
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="font-medium text-gray-700 hover:text-orange-500 transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-5">

          <button className="hover:text-orange-500 transition">
            <Search size={21} />
          </button>

          <button className="relative hover:text-orange-500 transition">
            <Heart size={21} />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>

          <button className="relative hover:text-orange-500 transition">
            <ShoppingCart size={21} />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>

          <button className="hover:text-orange-500 transition">
            <User size={21} />
          </button>

          <Link
            to="/auth/login"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2.5 rounded-xl font-semibold"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">

          <ul className="flex flex-col gap-5 p-6">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-semibold"
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/auth/login"
              className="bg-orange-500 text-center text-white py-3 rounded-xl font-semibold"
            >
              Login
            </Link>

          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;