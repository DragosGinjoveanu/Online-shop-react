import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import UserMenu from "./Auth/UserMenu";

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
        <UserMenu />
        <NavLink
          to="/shopping-cart"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-gray-400"
          }
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
    </nav>
  );
}
