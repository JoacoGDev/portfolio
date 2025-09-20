import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            
            {/* Logo / Nombre */}
            <h1 className="text-xl font-bold text-blue-600">Joaquín Gil</h1>

            {/* Links en desktop */}
            <div className="hidden md:flex space-x-6">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"}>
                Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"}>
                About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"}>
                Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"}>
                Contact
                </NavLink>
                <DarkModeToggle></DarkModeToggle>
            </div>

            {/* Botón hamburguesa en móvil */}
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
                >
                ☰
                </button>
            </div>
            </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
            <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
            <NavLink to="/" className="block hover:text-blue-500">Home</NavLink>
            <NavLink to="/about" className="block hover:text-blue-500">About</NavLink>
            <NavLink to="/projects" className="block hover:text-blue-500">Projects</NavLink>
            <NavLink to="/contact" className="block hover:text-blue-500">Contact</NavLink>
            </div>
        )}
        </nav>
  );
};

export default Navbar;