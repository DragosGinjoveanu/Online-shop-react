import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { doSignOut } from "../../firebase/auth";

import AuthContext from "../../contexts/authContext";
import CustomButton from "../../ui/Button";

export default function UserMenu() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <CustomButton onClick={() => navigate("/login")}>
        <FontAwesomeIcon icon={faCircleUser} />
        {"  "}
        {currentUser ? currentUser.displayName : "Account"}
      </CustomButton>

      {isOpen && (
        <div className="absolute right-0 top-full w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
          <div className="py-4 px-4">
            {currentUser ? (
              <>
                <CustomButton position="mb-4">Profile</CustomButton>
                <CustomButton
                  onClick={() => doSignOut()}
                  color="bg-red-500"
                  hoverColor="bg-red-700"
                >
                  Logout
                </CustomButton>
              </>
            ) : (
              <>
                <CustomButton
                  onClick={() => navigate("/login")}
                  position="mb-4"
                >
                  Login
                </CustomButton>
                <CustomButton onClick={() => navigate("/register")}>
                  New account
                </CustomButton>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
