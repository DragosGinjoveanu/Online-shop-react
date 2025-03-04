import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import AuthContext from "../../contexts/authContext/index";
import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

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
  const [seePassword, setSeePassword] = useState(false);

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
          <div className="mb-4">
            <CustomInput
              label="Email"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Password"
              type={seePassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              trailingElement={
                <CustomButton
                  className=""
                  onClick={() => setSeePassword((prev) => !prev)}
                >
                  <FontAwesomeIcon icon={seePassword ? faEyeSlash : faEye} />
                </CustomButton>
              }
            />
          </div>
          <p className="text-sm text-center">
            Forgot your password?{" "}
            <a href="/reset-password" className="text-blue-600">
              Reset it here
            </a>
          </p>
          <CustomButton position="mt-4 mb-4">Login</CustomButton>
        </form>
        <CustomButton
          color="bg-red-500"
          hoverColor="bg-red-300"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </CustomButton>
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
