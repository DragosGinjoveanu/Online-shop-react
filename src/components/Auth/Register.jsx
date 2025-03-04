import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import AuthContext from "../../contexts/authContext/index";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

export default function Register() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  const [username, setUsername] = useState("");
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
      await doCreateUserWithEmailAndPassword(email, password, username);
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
          <div className="mb-4">
            <CustomInput
              label="Username"
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your username"
              value={username}
              minLength={3}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Email"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
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
              minLength={6}
              placeholder="Enter your password"
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

          <div className="mb-4">
            <CustomInput
              label="Confirm password"
              type={seePassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              required
              minLength={6}
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <CustomButton position="mb-4">Register</CustomButton>
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
