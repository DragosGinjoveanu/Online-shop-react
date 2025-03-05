import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { doUpdateUsername } from "../../firebase/auth";
import ResetPassword from "./ResetPassword";
import VerifyEmail from "./VerifyEmail";
import AuthContext from "../../contexts/authContext";
import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

export default function UserProfile() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState("");

  console.log(currentUser.emailVerified);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  const handleUpdateUsername = async () => {
    if (newUsername.trim() === "") {
      toast.error("Name cannot be empty", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    try {
      await doUpdateUsername(newUsername);
      setNewUsername("");
      toast.success("Profile username updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <VerifyEmail />
      <p>
        <strong>Email:</strong> {currentUser?.email}
      </p>
      <p>
        <strong>Username:</strong> {currentUser?.displayName || "Not set"}
      </p>

      <div className="mt-4">
        <CustomInput
          type="text"
          id="new-username"
          name="new-username"
          label="Change your username:"
          placeholder="Enter your new username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <CustomButton onClick={handleUpdateUsername} position="mt-2">
          Update Username
        </CustomButton>
      </div>

      <div className="mt-6">
        <ResetPassword />
      </div>
    </div>
  );
}
