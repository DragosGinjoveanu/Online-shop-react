import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import AuthContext from "../../contexts/authContext/index";

export default function Login() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // to-do -> custom notification messages depending if email / password is correct or not
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await doSignInWithGoogle();
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
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded mb-4">
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Sign in with Google
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
