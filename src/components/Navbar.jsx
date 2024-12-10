import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Online shop</div>
        {/* should add logo image here for the online shop */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-gray-400"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/create-new-product"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-gray-400"
          }
        >
          Create new product
        </NavLink>
      </div>
    </nav>
  );
}
