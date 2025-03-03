import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import AuthContext from "../../contexts/authContext/index";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

export default function Register() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              required
              type={seePassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4 pr-10"
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setSeePassword((prev) => !prev)}
              className="absolute right-3 top-3 text-gray-600"
            >
              <FontAwesomeIcon icon={seePassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <label
            htmlFor="confirm-password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm password
          </label>
          <div className="relative">
            <input
              required
              type={seePassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4 pr-10"
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setSeePassword((prev) => !prev)}
              className="absolute right-3 top-3 text-gray-600"
            >
              <FontAwesomeIcon icon={seePassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded mb-4">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
